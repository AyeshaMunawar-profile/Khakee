import React from "react";
import "./homepage.styles.scss";
import CategoryMenu from "../../Components/category-menu/category-menu.componenet";

const HomePage: React.FC = () => (
	<>
		<div className="home-page">
			<CategoryMenu />
		</div>
	</>
);

export default HomePage;
