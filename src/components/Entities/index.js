import React, { Component } from 'react';
import {connect} from 'react-redux';

import Loader from '../Loader';
import Product from './Product';
import LoadButton from './LoadButton';

import ImageLoader from'../../js/imageLoader';
import { loadData, showData } from '../../store/entities';


class Entities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entitiesForload: 8,
            entitiesPage: 1
        }
        this.loader = new ImageLoader();
        this.firstLoad();
    }

    incrementPage() {
        this.setState({entitiesPage: this.state.entitiesPage + 1});
    }

    getData = async() => {
        let url = `https://morning-depths-45008.herokuapp.com/?page=${this.state.entitiesPage}&per_page=${this.state.entitiesForload}`;
        const response = await fetch(url);
        const json = await response.json();
        await this.incrementPage();
        await this.loader.init(json.entities);
        return json;
    }

    firstLoad = async() => {
        let json = await this.getData();
        await this.showFirstLoad(json);
        this.setState({entitiesForload: 4, entitiesPage: 3});
    }

    showFirstLoad(data) {
        let firstLoad = {
            entities: data.entities.slice(0, 4),
            total: data.total
        }
        let secondLoad = {
            entities: data.entities.slice(4, 8),
            total: data.total
        }
        this.props.loadData(firstLoad);
        this.props.showData();
        this.props.loadData(secondLoad);
    }

    loadMore = async() => {
        this.props.showData();
        let json = await this.getData();
        await this.props.loadData(json);
    }

    render() {
        return (
            <div id="entities">
                {this.props.entities.showedEntities.length ?
                    <div className="entities-container">
                        {this.props.entities.showedEntities.map((elem, ind) => Product(elem, ind))}
                    </div> :
                    <Loader clickFunction = {this.props.loadData}/>
                }
                {this.props.entities.showedEntities.length &&
                    this.props.entities.total > this.props.entities.showedEntities.length ?
                    <LoadButton clickFunction={this.loadMore} /> :
                    null
                }
            </div>
        )
    }
};

export default connect(
    state => ({
        entities: state.entities
    }),
    ({
        showData,
        loadData
    })
)(Entities);
