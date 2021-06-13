import "./collection-preview.styles.scss";
import {Typography} from "antd";
const {Title} = Typography;
import {Carousel} from "antd";

const CollectionPreview = ({title, items}) => {
	return (
		<>
			<div className={"collection-preview"}>
				<Title className={"collection-heading section-heading section-heading--sub"}>{title.toUpperCase()}</Title>
				<Carousel className={"preview"} autoplay dots={true} dotPosition={"bottom"}>
					{items.map((item) => (
						<div key={`title-${item.id}`} className={"section-heading--paragraph u-center-text"}>
							{item.title}
						</div>
					))}
				</Carousel>
			</div>
		</>
	);
};

export default CollectionPreview;
