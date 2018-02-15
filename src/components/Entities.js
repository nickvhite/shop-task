import React, {Component} from 'react';
import {connect} from 'react-redux';

class Entities extends Component {
    render() {
        return (
            <div id="entities"></div>
        );
    }
}

export default connect(
    state => ({
        eventList: state
    }),
    dispatch => ({})
)(Entities);