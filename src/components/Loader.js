import React from 'react';
import {connect} from 'react-redux';

const Header =({ eventList }) => (
    <div id="preloader">
        <div className="spinWrap">
            <div className="loader"></div>
        </div>
    </div>
);

export default connect(
    state => ({
        eventList: state
    }),
    dispatch => ({})
)(Header);