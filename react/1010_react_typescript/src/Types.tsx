import React, { useRef, useState } from "react";

interface Props {
    name: string;
}

interface Data {
    name: string;
    age: number;
}

// 컴포넌트 제작 방법1
// export default function Types({ name }: Props) {
//     return (
//         <>
//             <h2>Hello {name}</h2>
//         </>
//     )
// }

// 컴포넌트 제작 방법2
const Types: React.FC<Props> = (props) => {
    const [count, setCount] = useState<Data | null>();

    const myInput = useRef<HTMLInputElement>(null);

    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => { };

    const handleFocus = () => {
        myInput.current?.focus();
    }

    return (
        <>
            <h2>Hello {props.name}</h2>
            <input ref={myInput} />
            <button onClick={handleFocus}>포커스버튼</button>
            <button onClick={(e) => onClick(e)}>버튼</button>
        </>
    )
}

export default Types;