import React from 'react';
import {connect} from 'react-redux';

const Footer =({ eventList }) => {
    let footerData = eventList.footer.content;
    return (
        <div id="footer">
            <div
                className="block block_1"
            >
                <h1 className="block_title">
                    {footerData.block_1.title}
                </h1>
                <h4 className="block_title_description">
                    {footerData.block_1.descriptions}
                </h4>
                <ul>
                    {footerData.block_1.points.map((e)=><li key={e}>{e}</li>)}
                </ul>
            </div>
            <div
                className="block block_2"
            >
                <h1 className="block_title">
                    {footerData.block_2.title}
                </h1>
                <h4 className="block_title_description">
                    {footerData.block_2.descriptions}
                </h4>
                <ul>
                    {footerData.block_2.points.map((e)=><li key={e}>{e}</li>)}
                </ul>
            </div>
            <div
                className="block block_3"
            >
                <h1 className="block_title">
                    {footerData.block_3.title}
                </h1>
                {footerData.block_3.points.map((e, i) => {
                    return (
                        <div
                            className={`point point_${i}`}
                            key={i}
                        >
                            <p className="point_img">{e.img}</p>
                            <p className="point_text">{e.text}</p>
                            {e.text_2 ? <p className="point_text_2">{e.text_2}</p> : null}
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default connect(
    state => ({
        eventList: state
    }),
    dispatch => ({})
)(Footer);