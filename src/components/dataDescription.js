import React from "react";
import "./../styles/dashboard.css";

function dataDescription() {
	return (
		<div className="description">
			<h1>Sales Dashboard</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
				ex qui magnam aut officiis est reprehenderit accusantium. Dicta,
				quos ducimus ipsa laudantium ex repellendus ea repudiandae,
				quisquam quaerat officiis, quis a. Hic blanditiis voluptatum
				tempora aspernatur. Iure neque repellat cupiditate dicta
				distinctio. Ipsam suscipit at, atque placeat fugit nulla saepe.
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
