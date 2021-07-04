import React, {useState, useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import firebase from "firebase";
import HomePage from "../Pages/homepage/homepage.component";
import GalleryPage from "../Pages/gallerypage/gallerypage.component";
import Header from "../Components/header/header.component";
import AuthenticationPage from "../Pages/authenticationpage/authenticationpage.component";
import {auth, createUserProfileDocument} from "../Firebase/firebase.utils";
import "../SASS/main.scss";
import "../CSS/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App: React.FC = () => {
	const [currentUser, setCurrentUser] = useState<null | any>(null);

	let unSubscribeFromAuth: any = null;
	// DOCUMENT SNAPSHOT OBJECT
	// ========================
	// We get a document snapshot object from our document reference object
	// The document snapshot object allows us to check if the document exists at this query using the .exists property which returns a boolean

	// We can also get the actual properties on the object by calling the .data() method , which returns us a JSON object of the document

	useEffect(() => {
		unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = createUserProfileDocument(userAuth);
				(await userRef).onSnapshot(async (snapShot) => {
					await setCurrentUser({id: snapShot.id, ...snapShot.data()});
					console.log("Auth State changed and now is :", snapShot.data());
				});
			} else {
				setCurrentUser(userAuth);
			}
			// setCurrentUser(user);
			// user has a value when the use is signed in even if you refresh the page firebase also implements user authenticated session persistance
			// Firebase use O Auth services which allows use to use third party authentication services without implemeneting them manually
		});
		return () => {
			unSubscribeFromAuth();
		};
	}, []);
	return (
		<>
			<Header currentPage="home" currentUser={currentUser} />
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
