import { Component } from "react";

class Practice1 extends Component {
    state = {
        color: "black",
        text: "검정색 글씨",
    }

    handleColorRed = () => {
        this.setState(() => {
            return { color: "red", text: "빨간색 글씨" };
        });
    }

    handleColorBlue = () => {
        this.setState(() => {
            return { color: "blue", text: "파란색 글씨" };
        });
    }

    render() {
        return <div>
            <h1 style={this.state}>{this.state.text}</h1>
            <button onClick={this.handleColorRed}>빨간색</button>
            <button onClick={this.handleColorBlue}>파란색</button>
        </div>
    }
}

export default Practice1;