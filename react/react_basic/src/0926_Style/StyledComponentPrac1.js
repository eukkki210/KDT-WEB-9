import { useState } from 'react';
import styled from 'styled-components';

const _Btn = styled.button`
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    padding: 10px 15px;
    border-radius: 4px;
`;

export default function StyledComponentPrac1() {
    const [buttonStyle, setButtonStyle] = useState({
        backgroundColor: 'blue',
        color: 'white',
    });

    const changeColor = () => {
        setButtonStyle(prevStyle => ({
            backgroundColor: prevStyle.backgroundColor === 'blue' ? 'red' : 'blue',
            color: prevStyle.color === 'white' ? 'black' : 'white',
        }));
    };

    return (
        <div>
            <_Btn {...buttonStyle} onClick={changeColor}>
                색상변경!
            </_Btn>
        </div>
    );
}
