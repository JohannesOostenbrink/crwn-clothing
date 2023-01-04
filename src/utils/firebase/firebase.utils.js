import {initializeApp} from 'firebase/app';
import {
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAfhONhu9DQtEjSiAz3m5mltUNPeM9ZrMw",
    authDomain: "crwn-clothing-123f4.firebaseapp.com",
    projectId: "crwn-clothing-123f4",
    storageBucket: "crwn-clothing-123f4.appspot.com",
    messagingSenderId: "839282771951",
    appId: "1:839282771951:web:e8dffc4db5d0a2d20b581a"
  };

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore(); 

const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

const userSnapshot = await getDoc(userDocRef); 
};