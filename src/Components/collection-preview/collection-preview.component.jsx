import "./collection-preview.styles.scss";
import {Typography} from "antd";
const {Title} = Typography;
import Slider from "react-slick";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({title, items}) => {
	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: true,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 2400,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
					dots: true
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};
	return (
		<>
			<div className={"collection-preview sub-section"}>
				<Title className={"collection-heading section-heading section-heading--sub"}>{title.toUpperCase()}</Title>
				<Slider {...sliderSettings} className={"collection-slider"}>
					{items.map(({id, ...otherItemProps}) => {
						return <CollectionItem key={id} {...otherItemProps} />;
					})}
				</Slider>
			</div>
		</>
	);
};

export default CollectionPreview;
