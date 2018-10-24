import React, { Component } from 'react';
class LoadButton extends Component {
	render() {
		return (
			<div className="load_button">
					<button
							className="entitie_load"
							onClick={() => {
									this.props.loadData()
							}}
					>
							load more
					</button>
			</div>
		)
	}
}
export default LoadButton;
