import { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
    color: 'red'
};

class Practice4 extends Component {
    
    render() {
        return (
            <>
                <h2>내가 좋아하는 음식은 <span style={styles}>{this.props.food}</span></h2>
            </>
        );
    }
}

Practice4.defaultProps = {
    food: "마라샹궈",
};

Practice4.propTypes = {
    food: PropTypes.string,
}

export default Practice4;
