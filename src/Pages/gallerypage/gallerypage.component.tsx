import React, {useState} from "react";
import "./gallerypage.style.scss";
import {Typography} from "antd";
import SHOP_DATA from "./shop.data";
import GalleryPreview from "../../Components/gallery-preview/gallery-preview.component";

const {Title} = Typography;
const GalleryPage: React.FC = () => {
	const [collections, setCollections] = useState(SHOP_DATA);

	return (
		<>
			<div>
				<div className="section gallery-page">
					<Title level={1} className="section-heading--main">
						{" "}
						Gallery
					</Title>
					{collections.map((collection) => (
						<GalleryPreview key={collection.id} title={collection.categoryName} items={collection.items} />
					))}
				</div>
			</div>
		</>
	);
};

export default GalleryPage;
