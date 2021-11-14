import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { validator } from "../../../utils/ validator";
const FormComponent = ({
    children,
    validatorConfog,
    onSubmit,
    defaultData
}) => {
    const [data, setData] = useState(defaultData || {});
    const [errors, setErrors] = useState({});
    const handleChange = useCallback((target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    }, []);

    const validate = useCallback(
        (data) => {
            const errors = validator(data, validatorConfog);
            setErrors(errors);
            return Object.keys(errors).length === 0;
        },
        [validatorConfog, setErrors]
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) {
            return;
        }
        onSubmit(data);
    };
    // Фокус при нажатии Enter
    const handleKeyDown = useCallback((e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            const form = e.target.form;
            const indexField = Array.prototype.indexOf.call(form, e.target);
            form.elements[indexField + 1].focus();
        }
    }, []);

    useEffect(() => {
        if (Object.keys(data).length > 0) validate(data);
    }, [data]);

    const isValid = Object.keys(errors).length === 0;

    // Переиспользуемая форма
    const clonedElements = React.Children.map(children, (child) => {
        const childType = typeof child.type;
        let config = {};
        if (childType === "object") {
            if (!child.props.name) {
                throw new Error("Name property is required", child);
            }
            config = {
                ...child.props,
                onChange: handleChange,
                value: data[child.props.name] || "",
                error: errors[child.props.name],
                onKeyDown: handleKeyDown
            };
        }

        if (childType === "string") {
            if (child.type === "button") {
                if (
                    child.props.type === "submit" ||
                    child.props.type === undefined
                ) {
                    config = { ...child.props, disabled: !isValid };
                }
            }
        }

        return React.cloneElement(child, config);
    });

    return <form onSubmit={handleSubmit}>{clonedElements}</form>;
};
FormComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    validatorConfog: PropTypes.object,
    onSubmit: PropTypes.func,
    defaultData: PropTypes.object
};
export default FormComponent;
