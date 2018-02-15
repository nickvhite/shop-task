import React from 'react';
import {connect} from 'react-redux';

const Entities =({ eventList }) => {
    let entitiesData = eventList.entities;
    return (
        <div id="entities">
            {entitiesData.shovedEntities.map((elem, ind) => {
                return (
                    <div
                        className="entitie"
                        key={ind}
                    >
                        <div className="entitie_image">
                            {elem.discountCost ? <p className="entitie_discount">sale</p> : null}
                            {elem.new ? <p className="entitie_new">new</p> : null}
                        </div>
                        <div className="entitie_text">
                            <h2>{elem.title}</h2>
                            <p>{elem.description}</p>
                            {!elem.discountCost ?
                                <div className="price">
                                    <span>{`$${elem.cost}`}</span>
                                </div> :
                                <div className="price">
                                    <span>{`$${elem.discountCost.toFixed(2)}`}</span>
                                    <span>{`$${elem.cost.toFixed(2)}`}</span>
                                </div>
                            }
                        </div>
                        <div className="entitie_buttons_container">
                            <button className="entitie_add">add to card</button>
                            <button className="entitie_view">view</button>
                        </div>
                    </div>
                );
            })}
            <div className="load_button">
                <button className="entitie_load">load more</button>
            </div>
        </div>
    )
};

export default connect(
    state => ({
        eventList: state
    }),
    dispatch => ({})
)(Entities);