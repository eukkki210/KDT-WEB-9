import { Component } from "react";

class Practice6 extends Component {
    constructor(props) {
        super(props);
        this.showMessage = this.showMessage.bind(this);
    };

    showMessage() {
        alert(this.props.message);
    };

    render() {
        return (
            <>
                <button onClick={this.showMessage}>Show Message</button>
            </>
        )
    }
}

export default Practice6;