import {useState} from "react";
import "./shoppage.style.scss";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../Components/collection-preview/collection-preview.component";

const ShopPage: React.FC = () => {
	const [collections, setCollections] = useState(SHOP_DATA);

	return (
		<>
			<div>
				<div className="section shop-page">
					{collections.map((collection) => (
						<CollectionPreview key={collection.id} title={collection.categoryName} items={collection.items} />
					))}
				</div>
			</div>
		</>
	);
};

export default ShopPage;
