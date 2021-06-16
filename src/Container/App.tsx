import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "../Pages/homepage/homepage.component";
import ShopPage from "../Pages/shoppage/shoppage.component";
import Header from "../Components/header/header.component";
import "../SASS/main.scss";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AuthenticationPage from "../Pages/authenticationpage/authenticationpage.component";

const App: React.FC = () => {
	return (
		<>
			<Header currentPage="home" />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={ShopPage} />
				<Route exact path="/sign-up" component={AuthenticationPage} />
				<Route exact path="/sign-in" component={AuthenticationPage} />
			</Switch>
		</>
	);
};

export default App;
