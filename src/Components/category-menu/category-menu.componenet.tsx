import "./category-menu.styles.scss";
import React, {useState} from "react";
import MenuItem from "../menu-item/menu-item.component";

const CategoryMenu: React.FC = () => {
	const sectionsData = [
		{
			title: "Portraits",
			imageUrl: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_960_720.jpg",
			id: 1,
			linkUrl: "shop/portraits"
		},
		{
			title: "Landscapes",
			imageUrl: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg",
			id: 2,
			linkUrl: "shop/landscapes"
		},
		{
			title: "Concept Art",
			imageUrl: "https://i.pinimg.com/originals/3b/1e/d7/3b1ed796949ff915fde488ed59a2469b.jpg",
			id: 3,
			linkUrl: "shop/Concept-Art"
		},
		{
			title: "Digital Paintings",
			imageUrl:
				"https://static.proko.com/products/images/aaron-westerberg-masterpiece-demo-aaron-westerberg-demo-thumbnail-800x450x2.jpg",
			size: "large",
			id: 4,
			linkUrl: "shop/digital-paintings"
		},
		{
			title: "Sketches",
			imageUrl:
				"https://static.proko.com/products/images/portrait-drawing-fundamentals-course-morgan-portrait-thumbnail-800x450x1.jpg",
			size: "large",
			id: 5,
			linkUrl: "shop/sketches"
		},
		{
			title: "Sculptures",
			imageUrl: "https://b4s5x6t6.stackpathcdn.com/wp-content/uploads/2019/11/hb_200178.jpg",
			id: 6,
			linkUrl: "shop/sculptures"
		}
	];

	const [sections, setSections] = useState(sectionsData);
	return (
		<div className="category-menu section">
			{sections
				? sections.map((item) => (
						<MenuItem
							key={item.id}
							title={item.title}
							imageUrl={item.imageUrl}
							linkUrl={item.linkUrl}
							size={item.size}
						/>
				  ))
				: ""}
		</div>
	);
};

export default CategoryMenu;
