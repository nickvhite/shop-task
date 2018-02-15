import React, {Component} from 'react';
import {connect} from 'react-redux';

const Footer =({ eventList }) => {
    let footerData = eventList.footer.content;
    return (
        <footer id="footer">
            <div
                className="block_1"
            >
                <h1 className="block_title">
                    {footerData.block_1.title}
                </h1>
                <h4 className="block_title_description">
                    {footerData.block_1.descriptions}
                </h4>
                <ul className="block_content">
                    {footerData.block_1.points.map((e)=><li key={e}>{e}</li>)}
                </ul>
            </div>
            <div
                className="block_2"
            >
                <h1 className="block_title">
                    {footerData.block_2.title}
                </h1>
                <h4 className="block_title_description">
                    {footerData.block_2.descriptions}
                </h4>
                <ul className="block_content">
                    {footerData.block_2.points.map((e)=><li key={e}>{e}</li>)}
                </ul>
            </div>
            <div
                className="block_3"
            >
                <h1 className="block_title">
                    {footerData.block_3.title}
                </h1>
                <ol className="block_content">
                    {footerData.block_3.points.map((e, i) => {
                        return (
                            <div
                                className={`point_${i}`}
                                key={i}
                            >
                                <img src={e.img}/>
                                <p>{e.text}</p>
                            </div>
                        )
                    })}
                </ol>
            </div>
        </footer>
    )
};

export default connect(
    state => ({
        eventList: state
    }),
    dispatch => ({})
)(Footer);