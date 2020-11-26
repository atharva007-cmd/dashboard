import React from "react";
import "./../styles/dashboard.css";
import WidgetText from "./widgetText";
import WidgetLine from "./widgetLine";
import WidgetBar from "./widgetBar";
import WidgetDoughnut from "./widgetDoughnut";

function dashboard() {
	const chartData = [
		{ label: "Electronic accessories", value: "166" },
		{ label: "Fashion accessories", value: "160" },
		{ label: "Food and beverages", value: "152" },
		{ label: "Health and beauty", value: "174" },
		{ label: "Home and lifestyle", value: "178" },
		{ label: "Sports and travel", value: "170" },
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
