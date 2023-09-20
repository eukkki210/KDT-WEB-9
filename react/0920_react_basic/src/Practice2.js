import { Component } from "react";

class Practice2 extends Component {
    state = {
        visible: true,
    }

    handleDisappearing = () => {
        this.setState(() => {
            return { visible: !this.state.visible };
        });
    }

    render() {
        return <div>
            <h1>{this.state.visible && '안녕하세욘'}</h1>
            <button onClick={this.handleDisappearing}>{this.state.visible ? '사라져라' : '보여라'}</button>
        </div>
    }
}

export default Practice2;