import React, {useState} from "react";
import "./gallerypage.style.scss";
import SHOP_DATA from "./shop.data";
import GalleryPreview from "../../Components/gallery-preview/gallery-preview.component";

const GalleryPage: React.FC = () => {
	const [collections, setCollections] = useState(SHOP_DATA);

	return (
		<>
			<div>
				<div className="section gallery-page">
					{collections.map((collection) => (
						<GalleryPreview key={collection.id} title={collection.categoryName} items={collection.items} />
					))}
				</div>
			</div>
		</>
	);
};

export default GalleryPage;
