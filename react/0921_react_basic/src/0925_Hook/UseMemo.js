import { useState, useMemo } from "react";

export default function UseMemo() {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');

    // count가 변경될 때만 실행, inputValue가 변경되어도 컴포넌트는 리렌더링되지만, calc는 다시 계산되지 않는다 
    const calc = useMemo(() => {
        for (let i = 0; i < 10000; i++) {
            // i = i * 2;
        }
        return count * 2;
    }, [count]);

    return (
        <>
            <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <button onClick={() => setCount(() => count + 1)}>PLUS</button>
            <p>count: {count}</p>
            <p>calc: {calc}</p>
        </>
    )
}