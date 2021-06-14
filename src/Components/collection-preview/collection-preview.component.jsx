import "./collection-preview.styles.scss";
import {Typography} from "antd";
const {Title} = Typography;
import Slider from "react-slick";

const CollectionPreview = ({title, items}) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3
	};
	return (
		<>
			<div className={"collection-preview"}>
				<Title className={"collection-heading section-heading section-heading--sub"}>{title.toUpperCase()}</Title>
				<Slider {...settings}>
					{items.map((item) => {
						return (
							<div key={`title-${item.id}`}>
								<h1>{item.title}</h1>
							</div>
						);
					})}
				</Slider>
			</div>
		</>
	);
};

export default CollectionPreview;
