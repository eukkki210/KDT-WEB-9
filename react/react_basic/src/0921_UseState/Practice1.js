import { useState } from "react";

export default function Practice1() {
    const [color, setColor] = useState("black");
    const [text, setText] = useState("검정색 글씨");

    const handleColorRed = () => {
        setColor("red");
        setText("빨간색 글씨");
    };

    const handleColorBlue = () => {
        setColor("blue");
        setText("파란색 글씨");
    };

    return (
        <div>
            <h1 style={{ color: color }}>{text}</h1>
            <button onClick={handleColorRed}>빨간색</button>
            <button onClick={handleColorBlue}>파란색</button>
        </div>
    );
}
