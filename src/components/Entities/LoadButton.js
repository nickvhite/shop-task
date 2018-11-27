import React from 'react';
const LoadButton = (props) => {
		return (
			<div className="load_button">
				<button onClick={props.clickFunction}>
					load more
				</button>
			</div>
		)
}
export default LoadButton;
