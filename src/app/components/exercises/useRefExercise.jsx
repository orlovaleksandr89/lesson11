import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const blockRef = useRef();
    const handleChangeBlock = () => {
        blockRef.current.style.width = "80px";
        blockRef.current.style.height = "150px";
        blockRef.current.textContent = "Text";
        blockRef.current.style.transition = "all 0.5s ease";
    };
    const handleChangeBlockBack = () => {
        blockRef.current.style.width = "60px";
        blockRef.current.style.height = "40px";
        blockRef.current.textContent = "Block";
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содежимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={blockRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>
            <button
                className="btn btn-warning mt-3"
                onClick={handleChangeBlock}
            >
                ChangeBlock
            </button>
            <button
                className="btn btn-success ms-3 mt-3"
                onClick={handleChangeBlockBack}
            >
                Go Back
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
