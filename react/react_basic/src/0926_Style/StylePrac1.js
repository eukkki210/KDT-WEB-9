import './StylePrac1.scss'
import grassImg from './pngwing.com.png';

export default function StylePrac1() {
    return (
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
    );
}