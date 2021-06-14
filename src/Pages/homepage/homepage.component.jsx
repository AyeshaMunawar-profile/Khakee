import React from "react";
import "./homepage.styles.scss";
import CategoryMenu from "../../Components/category-menu/category-menu.componenet";
import Header from "../../Components/header/header.component";

const HomePage = () => (
	<>
		<div className="home-page">
			<Header />
			<CategoryMenu />
		</div>
	</>
);

export default HomePage;
