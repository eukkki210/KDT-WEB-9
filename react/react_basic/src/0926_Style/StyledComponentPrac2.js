import React, { useState } from 'react';
import styled from 'styled-components';

const _Container = styled.div`
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 10px;
`;

const _Input = styled.input`
  padding: 5px;
  font-size: 16px;
  margin-right: 10px;
`;

const _Button = styled.button`
  padding: 5px 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

const _ListItem = styled.div`
  padding: 5px;
  border-bottom: 1px solid #ccc;
`;

export default function StyledComponentPrac2() {
    const [inputText, setInputText] = useState('');
    const [items, setItems] = useState([]);

    const handleAddItem = () => {
        if (inputText.trim() !== '') {
            setItems([...items, inputText]);
            setInputText('');
        }
    };

    return (
        <div>
            <div>
                <_Input
                    type="text"
                    placeholder="Add to List"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <_Button onClick={handleAddItem}>Add</_Button>
            </div>
            <_Container>
                {items.map((item, index) => (
                    <_ListItem key={index}>{item}</_ListItem>
                ))}
            </_Container>
        </div>
    );
}
