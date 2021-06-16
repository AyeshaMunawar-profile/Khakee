import "./collection-preview.styles.scss";
import {Typography} from "antd";
import Slider from "react-slick";
import CollectionItem from "../collection-item/collection-item.component";

const {Title} = Typography;
interface Props {
	title: string;
	items: any;
}
const CollectionPreview: React.FC<Props> = ({title, items}) => {
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
					slidesToScroll: 1,
					dots: false
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
					arrows: false
				}
			}
		]
	};
	return (
		<>
			<div className="collection-preview sub-section">
				<Title className="collection-heading section-heading section-heading--sub">{title.toUpperCase()}</Title>
				<Slider {...sliderSettings} className="collection-slider">
					{items.map((item: any) => {
						return (
							<CollectionItem
								key={item.id}
								id={item.id}
								imageUrl={item.imageUrl}
								price={item.price}
								title={item.title}
							/>
						);
					})}
				</Slider>
			</div>
		</>
	);
};

export default CollectionPreview;
