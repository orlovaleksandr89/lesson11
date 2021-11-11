import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammablActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        console.log(inputRef.current.clientWidth);
        inputRef.current.focus();
    };
    const handleChangeWidth = () => {
        inputRef.current.style.width = "170px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                ref={inputRef}
                type="email"
                className="form-control"
                id="email"
            />
            <button className="btn btn-primary m-2" onClick={handleClick}>
                inputRef focus
            </button>
            <button
                className="btn btn-secondary m-2"
                onClick={handleChangeWidth}
            >
                Изменить ширину
            </button>
        </CardWrapper>
    );
};

export default ProgrammablActionsExample;
