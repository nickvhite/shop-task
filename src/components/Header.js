import React from 'react';
import {connect} from 'react-redux';

const Header =({ eventList }) => (
    <header id="header"></header>
);

export default connect(
    state => ({
        eventList: state
    }),
    dispatch => ({})
)(Header);