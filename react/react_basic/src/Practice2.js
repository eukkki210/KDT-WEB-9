import { Component } from "react";
import grassImg from './pngwing.com.png';

class Practice2 extends Component {
    render() {
        const style = {
            color: 'orange',
            fontSize: '40px',
            marginTop: 20,
        }

        return (
            <>
                <div style={style}>
                    <h2>안녕하세요</h2>
                    <img src={grassImg} width="375px" height="100px" />
                </div>
            </>
        )
    }
}

export default Practice2;