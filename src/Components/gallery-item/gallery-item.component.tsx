import React from "react";
import {Card, Button} from "antd";
import {ShoppingCartOutlined} from "@ant-design/icons";
import {toHeaderCase} from "js-convert-case";
import "./gallery-item.styles.scss";

const {Meta} = Card;
const currencyFormatter = new Intl.NumberFormat("en-IN", {style: "currency", currency: "USD"});
interface Props {
	id: number;
	title: string;
	imageUrl: string;
	price: number;
}
const GalleryItem: React.FC<Props> = ({id, title, imageUrl, price}) => {
	return (
		<div key={`title-${id}`}>
			<Card
				hoverable
				cover={<img alt={title} src={imageUrl} className="gallery-preview-cover" />}
				className="u-center-text gallery-preview-item"
			>
				<Meta title={`"${toHeaderCase(title)}"`} description={`${currencyFormatter.format(price)}`} />
				<Button
					className="btn-add-to-cart  btn-gradient btn-primary"
					type="primary"
					shape="round"
					icon={<ShoppingCartOutlined />}
				>
					Add to cart
				</Button>
			</Card>
		</div>
	);
};

export default GalleryItem;
