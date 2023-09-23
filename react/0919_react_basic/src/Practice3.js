import { Component } from "react";

class Practice3 extends Component {
    render() {
        const name = "류승기";

        const my_style = {
            backgroundColor: 'blue',
            color: 'orange',
            fontSize: '40px',
            padding: 12,
        }

        return (
            <>
                <div style={my_style}>
                    {name}
                </div>
            </>
        )
    }
}

export default Practice3;