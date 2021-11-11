import React, { useEffect, useState, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}
const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    function runFactorial(value) {
        console.log("run");
        return factorial(value);
    }
    const [otherState, setOtherState] = useState(false);
    const fact = useMemo(() => runFactorial(value), [value]);
    const buttonColor = otherState ? "primary" : "secondary";
    useEffect(() => {
        console.log("render");
    });

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Value : {value}</p>
                <p>Result factorial: {fact}</p>
                <button
                    className="btn btn-primary ms-md-2"
                    onClick={() => setValue((prev) => prev + 10)}
                >
                    Increment
                </button>
                <button
                    className="btn btn-primary ms-md-2"
                    onClick={() => setValue((prev) => prev - 10)}
                >
                    Decrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={"btn ms-md-2 btn-" + buttonColor}
                    onClick={() => setOtherState((prev) => !prev)}
                >
                    Сторонние зависимости
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
