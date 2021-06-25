import React, {useState, useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import firebase from "firebase";
import HomePage from "../Pages/homepage/homepage.component";
import GalleryPage from "../Pages/shoppage/gallerypage.component";
import Header from "../Components/header/header.component";
import AuthenticationPage from "../Pages/authenticationpage/authenticationpage.component";
import {auth} from "../Firebase/firebase.utils";
import "../SASS/main.scss";
import "../CSS/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App: React.FC = () => {
	const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);

	let unSubscribeFromAuth: any = null;
	useEffect(() => {
		unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			// user has a value when the use is signed in even if you refresh the page firebase also implements user authenticated session persistance
			// Firebase use O Auth services which allows use to use third party authentication services without implemeneting them manually
			console.log("Current user is :", user);
		});
		return () => {
			unSubscribeFromAuth();
		};
	}, []);
	return (
		<>
			<Header currentPage="home" />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/gallery" component={GalleryPage} />
				<Route exact path="/sign-up" component={AuthenticationPage} />
				<Route exact path="/sign-in" component={AuthenticationPage} />
			</Switch>
		</>
	);
};

export default App;
