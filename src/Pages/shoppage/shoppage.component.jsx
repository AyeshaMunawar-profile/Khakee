import {Component} from "react";
import "./shoppage.style.scss";
import SHOP_DATA from "./shop.data.js";
import CollectionPreview from "../../Components/collection-preview/collection-preview.component";

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
				<div className={"shop-page"}>
					{SHOP_DATA.map((collection) => (
						<CollectionPreview key={collection.id} title={collection.categoryName} items={collection.items} />
					))}
				</div>
			</>
		);
	}
}

export default ShopPage;
