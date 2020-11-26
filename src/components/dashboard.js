import React from "react";
import "./../styles/dashboard.css";
import WidgetText from "./widgetText";
import WidgetLine from "./widgetLine";
import WidgetBar from "./widgetBar";
import WidgetDoughnut from "./widgetDoughnut";

function dashboard() {
	const chartData = [
		{ label: "Electronic accessories", value: "170" },
		{ label: "Fashion accessories", value: "178" },
		{ label: "Food and beverages", value: "174" },
		{ label: "Health and beauty", value: "152" },
		{ label: "Home and lifestyle", value: "160" },
		{ label: "Sports and travel", value: "166" },
	];

	return (
		<div>
			<div id="grid24">
				<div className="widgetElement">
					<WidgetText
						title="Rating"
						description="Average rating"
						value_for="average_rating"
					/>
				</div>
				<div className="widgetElement">
					<WidgetText
						title="Rating"
						description="Average rating"
						value_for="average_rating"
					/>
				</div>
				<div className="widgetElement">
					<WidgetText
						title="Rating"
						description="Average rating"
						value_for="average_rating"
					/>
				</div>
				<div className="widgetElement">
					<WidgetText
						title="Rating"
						description="Average rating"
						value_for="average_rating"
					/>
				</div>
				<div className="widgetElement">
					<WidgetBar data={chartData} />
				</div>
			</div>

			<div id="grid12">
				<div className="widgetElement">
					<WidgetDoughnut data={chartData} />
				</div>
				<div className="widgetElement">
					<WidgetLine data={chartData} />
				</div>
			</div>
		</div>
	);
}

export default dashboard;
