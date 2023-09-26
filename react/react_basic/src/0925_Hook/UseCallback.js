import { useState, useCallback } from "react";

function ChildComponent({ onClick }) {
    console.log("Child Component");
    return (
        <>
            <button onClick={onClick}>PLUS</button>
        </>
    )
}

export default function UseCallback() {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');

    // useCallback 미사용
    const plusCount = () => {
        console.log('plusCount', count);
        setCount((prev) => prev + 1);
    };

    // useCallback 사용
    // 반복해서 생성되는 이벤트 핸들의 함수를 useCallback으로 감싸줘서 하무를 메모이제이션
    const plusCountCallback = useCallback(() => {
        console.log('plusCountCallback', count);
        setCount((prev) => prev + 1);
    }, []);

    const onChange = (e) => {
        setInputValue(e.target.value);
        plusCount();
    };

    return (
        <>
            <input value={inputValue} onChange={(e) => onChange(e)} />
            <ChildComponent onClick={plusCountCallback} />
            <p>{count}</p>
        </>
    )
}