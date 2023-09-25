import { useState } from "react";

export default function Practice2() {
    const [visible, setVisible] = useState(true);

    const handleDisappearing = () => {
        setVisible(!visible);
    }

    return (
        <div>
            <h1>{visible && '안녕하세요'}</h1>
            <button onClick={handleDisappearing}>{visible ? '사라져라' : '보여라'}</button>
        </div>
    );
}
