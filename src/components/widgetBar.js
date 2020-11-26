import "./../styles/widget.css";
import React, { Component } from "react";
import axios from "axios";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

class widgetBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: props.data,
		};
	}

	componentDidMount() {
		axios
			.get(`https://33513.wayscript.io/`)
			.then((response) => {
				console.log(response.data.data);
				this.setState({ data: response.data.data });
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		const chartConfigs = {
			type: "bar2d",
			width: "100%",
			height: 400,
			dataFormat: "json",
			dataSource: {
				chart: {
					caption: "Products sold for each product lines",
					subCaption: "[ January-March 2019 ]",
					xAxisName: "Product lines",
					yAxisName: "Products sold",
					theme: "candy",
					bgColor: "#222222",
				},
				data: this.state.data,
			},
		};

		return (
			<div className="bar">
				<ReactFC {...chartConfigs} />
			</div>
		);
	}
}

export default widgetBar;
