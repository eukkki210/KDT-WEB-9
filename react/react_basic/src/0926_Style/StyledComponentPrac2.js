import { useState } from 'react';
import styled from 'styled-components';

const _Input = styled.input`
    margin: 10px;
`;

const _Btn = styled.button`
    background-color: aquamarine;
    color: black;
    padding: 10px 15px;
    border-radius: 4px;
`;

export default function StyledComponentPrac2() {
    const [inputText, setInputText] = useState("");
    const [buttonStyle, setButtonStyle] = useState({
        backgroundColor: 'blue',
        color: 'white',
    });

    const onChange = (event) => {
        setInputText(event.target.value);
    }

    const addItem = () => {
        
    };

    return (
        <div>
            <form>
                <_Input
                    type="text"
                    value={inputText}
                    onChange={(e) => onChange(e)}
                />
            </form>
            <_Btn onClick={addItem}>Add</_Btn>
        </div>
    );
}
