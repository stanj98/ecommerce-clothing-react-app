import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCtuRIgzri5X4zbzFqdkxOxKx30EWmED6Y",
    authDomain: "crown-db-8bc44.firebaseapp.com",
    projectId: "crown-db-8bc44",
    storageBucket: "crown-db-8bc44.appspot.com",
    messagingSenderId: "833614749644",
    appId: "1:833614749644:web:1466180d90c81256974769",
    measurementId: "G-W68641BDL5"
}

export const createUserProfileDocument = async (userAuth, additionalData) => { 
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creatin user', error.message); 
        }
    }
    return userRef;
 }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ 'prompt': 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;    