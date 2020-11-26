import React, { Component } from "react";
import "./../styles/widget.css";
import axios from "axios";

class widgetText extends Component {
	constructor(props) {
		super(props);

		this.state = {
			average_response: 0,
			title: props.title,
			description: props.description,
			value_for: props.value_for,
		};
	}

	componentDidMount() {
		axios
			.get(`https://33513.wayscript.io/`)
			.then((response) => {
				// console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		const { title, description } = this.state;
		return (
			<div className="widgetWrap">
				<div className="widgetTitle">{title}</div>
				<div className="widgetValue">
					<div className="value">{this.state.average_response}</div>
					<div className="valueDescription">{description}</div>
				</div>
			</div>
		);
	}
}

export default widgetText;
