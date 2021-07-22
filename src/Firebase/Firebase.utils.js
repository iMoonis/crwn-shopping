// This import loads the firebase namespace.
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyDl89ZRFRz-zTEl6q00rYyZK9dYWqCiGxA",
    authDomain: "crwn-shopping-c88ee.firebaseapp.com",
    projectId: "crwn-shopping-c88ee",
    storageBucket: "crwn-shopping-c88ee.appspot.com",
    messagingSenderId: "37546640759",
    appId: "1:37546640759:web:557488927d3b3b83fb4d72",
    measurementId: "G-1RCVNPT9XV"
};

firebase.initializeApp(config);

export const auth = firebase.auth(); 
export const firestore = firebase.firestore; 

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;