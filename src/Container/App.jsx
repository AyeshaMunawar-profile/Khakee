import React from "react";
import HomePage from "../Pages/homepage/homepage.component";
import {Route, Switch} from "react-router-dom";
import ShopPage from "../Pages/shoppage/shoppage.component";
import "../SASS/main.scss";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
	return (
		<>
			<Switch>
				<Route exact path={"/"} component={HomePage} />
				<Route path={"/shop"} component={ShopPage} />
			</Switch>
		</>
	);
}

export default App;
