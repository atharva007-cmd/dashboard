import React from "react";
import "./../styles/dashboard.css";

function dataDescription() {
	return (
		<div className="description">
			<h1>Sales Dashboard</h1>
			<p>
				The following data contains information about sales of products
				of different product lines from various cities. The data has
				various genders and modes of payments categorised date-wise.
				Product info consists of unit price, units sold, profits after
				taxation, etc.
			</p>
			<div className="schema">
				<h4>Dataset schema: </h4>
				<div id="date-and-time">Date</div>
				<div id="date-and-time">Time</div>
				<div id="customer-info">Invoice ID</div>
				<div id="shop-info">Branch</div>
				<div id="shop-info">City</div>
				<div id="customer-info">Customer Type</div>
				<div id="product-info">Product Line</div>
				<div id="product-info">Unit Price</div>
				<div id="customer-info">Gender</div>
				<div id="customer-info">Payment</div>
				<div id="product-info">Quantity</div>
				<div id="product-info">Tax 5%</div>
				<div id="shop-info">Cogs</div>
				<div id="product-info">Total</div>
				<div id="shop-info">Gross Income</div>
				<div id="product-info">Rating</div>
				<div id="shop-info">Gross Margin %</div>
			</div>
		</div>
	);
}

export default dataDescription;
