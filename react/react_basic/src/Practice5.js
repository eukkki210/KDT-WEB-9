import PropTypes from 'prop-types';
import './Practice1.css';
import grassImg from './pngwing.com.png';

function Practice5(props) {
    return (
        <>
            <h1>이번주 베스트셀러</h1>
            <img src={grassImg} width="375px" height="100px" />
            <h2>{props.title}</h2>
            <h3>저자: {props.author}</h3>
            <h3>판매가: {props.price}</h3>
            <h3>구분: {props.type}</h3>
        </>
    );
}

export default Practice5;