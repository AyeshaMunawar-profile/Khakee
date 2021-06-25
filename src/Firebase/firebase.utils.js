import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

const config = {
	apiKey: "AIzaSyDtfWQ-vQeWkoSMNdKzSBMMEYjMjFo-ZxU",
	authDomain: "khakee-paintyourself.firebaseapp.com",
	projectId: "khakee-paintyourself",
	storageBucket: "khakee-paintyourself.appspot.com",
	messagingSenderId: "2951000578",
	appId: "1:2951000578:web:ea9c66a084d28764196d1b",
	measurementId: "G-5QLVBSMJL2"
};

firebase.initializeApp(config);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account", login_hint: "user@example.com"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
