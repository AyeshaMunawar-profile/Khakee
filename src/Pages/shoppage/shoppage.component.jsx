import {Component} from "react";
import "./shoppage.style.scss";
import SHOP_DATA from "./shop.data.js";

class ShopPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collections: SHOP_DATA
		};
	}

	render() {
		return (
			<>
				<div>Hello this is my shopping arera </div>
			</>
		);
	}
}

export default ShopPage;
