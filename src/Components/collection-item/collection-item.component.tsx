import React from "react";
import {Card, Button} from "antd";
import {ShoppingCartOutlined} from "@ant-design/icons";
import "./collection-item.styles.scss";

const {Meta} = Card;

interface Props {
	id: number;
	title: string;
	imageUrl: string;
	price: number;
}
const CollectionItem: React.FC<Props> = ({id, title, imageUrl, price}) => {
	return (
		<div key={`title-${id}`}>
			<Card
				hoverable
				cover={<img alt={title} src={imageUrl} className="collection-preview-cover" />}
				className="u-center-text collection-preview-item"
			>
				<Meta title={`"${title}"`} description={`$${price}`} />
				<Button
					className="btn-add-to-cart btn-primary--pink"
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

export default CollectionItem;
