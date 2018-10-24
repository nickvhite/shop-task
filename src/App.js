import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from './components/Header';
import Entities from './components/Entities';
import Footer from './components/Footer';
import Loader from './components/Loader';


class App extends Component {
    constructor(props) {
        super(props);
        this.askList()
            .then(function(data) {
                this.props.onAddPage();
                this.props.onLoadEntities(data.entities);
                this.props.onAddEntities();
                this.props.onLoadEntities([]);
                this.props.onShowLoader(false);
                this.props.onUpdateLength(data.total);
                this.askList()
                    .then(function(data1){
                        this.props.onAddPage();
                        this.props.onUpdateLength(data1.total);
                        this.props.onLoadEntities(data1.entities);
                    }.bind(this))
            }.bind(this))
            .catch((err) => console.log(err));
    }

    loadList() {
        this.props.onAddEntities();
        this.props.onLoadEntities([]);
        this.askList()
            .then(function(data){
                this.props.onAddPage();
                this.props.onLoadEntities(data.entities);
                this.props.onUpdateLength(data.total);
            }.bind(this))
    }

    askList() {
        let prom = new Promise((resolve, reject) => {
            let pageNumber = this.props.eventList.entities.currentPage;
            let xhr = new XMLHttpRequest();
            xhr.open("GET", `server/list.php?page=${pageNumber};per_page=4`);
            xhr.onreadystatechange = function () {
                if (xhr.readyState !== 4) return;
                if (xhr.status !== 200) {
                    return reject('error')
                } else {
                    return resolve(JSON.parse(xhr.responseText));
                }
            };
            xhr.send();
        });
        return prom;
    }

    render() {
        return (
            <div className="app">
                {this.props.eventList.loader.visible ? <Loader/> : null}
                {<Header/>}
                {<Entities
                    loadData={this.loadList.bind(this)}
                />}
                {<Footer/>}
            </div>
        )
    }
}

export default connect(
    state => ({
        eventList: state
    }),
    dispatch => ({
        onLoadEntities: (data) => {
            dispatch({type: 'LOAD_ENTITIES', payload: data});
        },
        onAddEntities: (data) => {
            dispatch({type: 'ADD_ENTITIES', payload: data});
        },
        onAddPage: () => {
            dispatch({type: 'ADD_PAGE'});
        },
        onUpdateLength: (data) => {
            dispatch({type: 'UPDATE_LENGTH', payload: data});
        },
        onShowLoader: (data) => {
            dispatch({type: 'SHOW_LOADER', payload: data});
        }
    })
)(App);
