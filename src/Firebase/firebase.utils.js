import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
// IMPORTANT NOTES :
// Firestore stores the data in two forms
// 1) Collections
// 2) Document

// The data is stored using NOSQL
// NOSQL could be simply understood as data stored as one giant json file
// Collection is a collection of objects called as docuemnts documents has properties which stores different values inclusing a reference to a collection

// QUERY REFERENCE AND QUERY SNAPSHOT
// QUERY : A query is a request we make to the firestore to give us something from the database

// Firestore returns us two types of objects : References and snapshots . Of these objects , they can be either document or collection version

// Fire store will always return us these objects even if nothing exists at from these queries

// QUERY REFERENCE
// A query reference object is an object that represents the "current" place in the database that we are asking from

// we get then by calling either
// firestore.doc('users/:userId');
// firestore.collections('/users');

// The queryReference object does not have actual data of the collection or document . It instead has properties that tells us details about it , or the method to get the snapshot object which gives us the data we need

// DOCUMENT REFERENCE VS COLLECTION REFERENCE
// We use document reference object to perform our CRUD methods ( create , retrieve , update and delete ). The documentRef methods are .set(), .get(), .update() and .delete() respectively

// We can also add document to collections using the collectionRef object using the .add() method  collectionRef.add({value:props})

// We get the snapshot Object from the referenceObject using the .get() method import.meta. documentRef.get() or collectionRef.get()

// documentRef return a documentSnapsot Object
// collectionRef returns a querySnapshot object

const config = {
	apiKey: "AIzaSyDtfWQ-vQeWkoSMNdKzSBMMEYjMjFo-ZxU",
	authDomain: "khakee-paintyourself.firebaseapp.com",
	projectId: "khakee-paintyourself",
	storageBucket: "khakee-paintyourself.appspot.com",
	messagingSenderId: "2951000578",
	appId: "1:2951000578:web:ea9c66a084d28764196d1b",
	measurementId: "G-5QLVBSMJL2"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	// firebase authentication service is only going to return a user object if the user is signing in , it return null for sign out
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	if (userAuth) {
		const snapShot = await userRef.get();
		console.log("Snap shot recieved is :", snapShot);
		// if the user doesnt exists in the firestore database but exist in the users that signed up using google signup service add them to the firestore database too
		if (!snapShot.exists) {
			const {displayName, email} = userAuth;
			const createdAt = new Date();
			try {
				await userRef.set({
					displayName,
					email,
					createdAt,
					...additionalData
				});
			} catch (error) {
				console.log("Error creating user", error.message);
			}
		}
	}
	return userRef;
};

firebase.initializeApp(config);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account", login_hint: "user@example.com"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
