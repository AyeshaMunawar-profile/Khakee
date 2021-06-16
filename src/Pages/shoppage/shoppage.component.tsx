import {useState} from "react";
import "./shoppage.style.scss";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../Components/collection-preview/collection-preview.component";

const ShopPage: React.FC = () => {
	const [collections, setCollections] = useState(SHOP_DATA);

	return (
		<>
			<div className="shop-page">
				<div className="section">
					{collections.map((collection) => (
						<CollectionPreview key={collection.id} title={collection.categoryName} items={collection.items} />
					))}
				</div>
			</div>
		</>
	);
};

export default ShopPage;
