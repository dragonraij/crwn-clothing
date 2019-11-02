import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBtnuboh3XTrwWA4uni2Mj_GQkbxWSgiWw",
  authDomain: "crwn-db-28a93.firebaseapp.com",
  databaseURL: "https://crwn-db-28a93.firebaseio.com",
  projectId: "crwn-db-28a93",
  storageBucket: "crwn-db-28a93.appspot.com",
  messagingSenderId: "961108233575",
  appId: "1:961108233575:web:eaad7cfbb684fb540c33c2",
  measurementId: "G-GCXMSFHWQH"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error){
        console.log('error creating user');
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
