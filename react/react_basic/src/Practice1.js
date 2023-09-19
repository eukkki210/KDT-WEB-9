import { Component } from 'react';
import './Practice1.css';
import grassImg from './pngwing.com.png';

class Practice1 extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="circle one"></div>
                    <div className="circle white"></div>
                    <div className="circle black"></div>
                    <div className="circle two"></div>
                    <div className="circle three"></div>
                    <div className="circle four"></div>
                    <div className="circle five"></div>
                    <img className="grass" src={grassImg} width="375px" height="100px" />
                </div>
            </>
        );
    }
}

export default Practice1;
