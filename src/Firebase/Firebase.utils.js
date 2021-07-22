// This import loads the firebase namespace.
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDl89ZRFRz-zTEl6q00rYyZK9dYWqCiGxA",
    authDomain: "crwn-shopping-c88ee.firebaseapp.com",
    projectId: "crwn-shopping-c88ee",
    storageBucket: "crwn-shopping-c88ee.appspot.com",
    messagingSenderId: "37546640759",
    appId: "1:37546640759:web:557488927d3b3b83fb4d72",
    measurementId: "G-1RCVNPT9XV"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth(); 
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;