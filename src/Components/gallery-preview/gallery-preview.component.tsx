import React from "react";
import Slider from "react-slick";
import {Typography} from "antd";
import GalleryItem from "../collection-item/gallery-item.component";
import "./gallery-preview.styles.scss";

const {Title} = Typography;
interface Props {
	title: string;
	items: any;
}
const GalleryPreview: React.FC<Props> = ({title, items}) => {
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
					arrows: true
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
					arrows: true
				}
			}
		]
	};
	return (
		<>
			<div className="gallery-preview sub-section">
				<Title className="gallery-heading section-heading section-heading--sub">{title.toUpperCase()}</Title>
				<Slider {...sliderSettings} className="collection-slider">
					{items.map((item: any) => {
						return (
							<GalleryItem key={item.id} id={item.id} imageUrl={item.imageUrl} price={item.price} title={item.title} />
						);
					})}
				</Slider>
			</div>
		</>
	);
};

export default GalleryPreview;
