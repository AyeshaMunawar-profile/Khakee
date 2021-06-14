import "./collection-preview.styles.scss";
import {Typography, Card} from "antd";
const {Title} = Typography;
import Slider from "react-slick";

const {Meta} = Card;
const CollectionPreview = ({title, items}) => {
	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: false,
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
			<div className={"collection-preview"}>
				<Title className={"collection-heading section-heading section-heading--sub"}>{title.toUpperCase()}</Title>
				<Slider {...sliderSettings} className={"collection-slider"}>
					{items.map((item) => {
						return (
							<div key={`title-${item.id}`}>
								<Card
									hoverable
									cover={<img alt={item.title} src={item.imageUrl} className={"collection-preview-cover"} />}
									className={"u-center-text collection-preview-item"}
								>
									<Meta title={item.title} description={`$${item.price}`} />
								</Card>
							</div>
						);
					})}
				</Slider>
			</div>
		</>
	);
};

export default CollectionPreview;
