import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from './components/Header';
import Entities from './components/Entities';
import Footer from './components/Footer';


class App extends Component {
    constructor(props) {
        super(props);
    }

    

    submitLoginForm(data) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:3000/server/list.php?page=2;per_page=4");
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;
            if (xhr.status !== 200) {
                console.log(xhr);
            } else {
                console.log(xhr);
            }
        };
        xhr.send()
    }

    render() {
        return (
            <div className="app">
                {<Header/>}
                {<Entities/>}
                {<Footer/>}
            </div>
        )
    }
}

export default connect(
    state => ({
        eventList: state
    }),
    dispatch => ({})
)(App);