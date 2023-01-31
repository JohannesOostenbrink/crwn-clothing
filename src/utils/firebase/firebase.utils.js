import {initializeApp} from 'firebase/app';
import {
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAfhONhu9DQtEjSiAz3m5mltUNPeM9ZrMw",
    authDomain: "crwn-clothing-123f4.firebaseapp.com",
    projectId: "crwn-clothing-123f4",
    storageBucket: "crwn-clothing-123f4.appspot.com",
    messagingSenderId: "839282771951",
    appId: "1:839282771951:web:e8dffc4db5d0a2d20b581a"
  }

const firebaseApp = initializeApp(firebaseConfig)

const GoogleProvider = new GoogleAuthProvider()

GoogleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, GoogleProvider)

export const SignInAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return;
    
    return await signInWithEmailAndPassword(auth, email, password) 
}

export const db = getFirestore()

export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd,
    field='title'
    ) => {
    const collectionRef = collection(db,collectionKey);
    const batch = writeBatch(db);

    if (Array.isArray(objectsToAdd)) {
        objectsToAdd.forEach((object)=> {
        const docRef = doc(collectionRef, object[field].toLowerCase());
        batch.set(docRef, object);
    });
    await batch.commit();
        console.log('done')
} else { console.error("objectsToAdd is not an array")
}};

 export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInformation = {}
    ) => {

const userDocRef = doc(db, 'users', userAuth.uid)

const userSnapshot = await getDoc(userDocRef)

if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date(); 

    try {
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalInformation

        });
     } catch (error) {
        console.log('error creating the user', error.message);
     }

return userDocRef; 

}
    }

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password); 
    
    return await createUserWithEmailAndPassword(auth,email,password);

}

export const UserSignOut = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback); 