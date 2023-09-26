import styled from 'styled-components'

// 기본 사용방법
const _Boxone = styled.div`
    background-color: blueviolet;
    width: 100px;
    height: 100px;
`;

// props를 이용하는 방법
const _Boxtwo = styled.div`
    background-color: ${(props) => props.color};
    width: 100px;
    height: 100px;
`;

// 상속 받아서 이용하는 방법 
const _Circle = styled(_Boxtwo)`
    /* background-color: ${(props) => props.color};
    width: 100px;
    height: 100px; */
    border-radius: 50%;
`;

// 기존 태그를 이름만 바꿔서 사용하는 방법 => as 키워드 사용
const _Btn = styled.button`
    background-color: aquamarine;
    color: royalblue;
    padding: 10px 15px;
    border-radius: 4px;
`;

// html 태그에 옵션 값을 넣는 방법 
const _Input = styled.input.attrs({ required: true })`
    background-color: yellowgreen;
`;

// 중첩
const _Boxthree = styled.div`
    width: 200px;
    height: 200px;
    background-color: burlywood;
    line-height: 200px;
    text-align: center;
    /* 다른 컴포넌트 불러와서 사용 */
    ${_Input} {
        background-color: burlywood;
    }

    /* pseudo */
    p {
        color: whitesmoke;
        font-weight: bold;
        &: hover {
            font-size: 30px;
        }
    }
`;

export default function StyledComponent() {
    return (
        <div>
            <_Boxthree>
                <p>Hello Styled</p>
                <_Input />
            </_Boxthree>
            {/* <_Boxone as="header"></_Boxone> */}
            {/* <_Boxtwo color={'rosybrown'} />
            <_Boxtwo color={'orangered'} />
            <_Circle color={'greenyellow'}/> */}
            {/* <_Btn>클릭</_Btn>
            <_Btn as="a" href='https://toss.im/career/job-detail?job_id=4559918003&company=%ED%86%A0%EC%8A%A4%EB%B1%85%ED%81%AC'>a태그</_Btn> */}
            <_Input />
            <_Input />
            <_Input />
        </div>
    )
}