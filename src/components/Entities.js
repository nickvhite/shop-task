import React, {Component} from 'react';
import {connect} from 'react-redux';
import Product from './Product.js';
import LoadButton from './LoadButton';

class Entities extends Component {
    render() {
        let entitiesData = this.props.eventList.entities;
        return (
            <div id="entities">
                {entitiesData.shovedEntities.map((elem, ind) => Product(elem, ind))}
                {entitiesData.entitiesLength === entitiesData.shovedEntities.length ? null : <LoadButton loadData={this.props.loadData.bind(this)}/>}
            </div>
        )
    }
};

export default connect(
    state => ({
        eventList: state
    }),
    dispatch => ({})
)(Entities);
