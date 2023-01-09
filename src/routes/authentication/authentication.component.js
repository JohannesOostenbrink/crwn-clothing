import {useEffect} from 'react';
import SignInForm from '../../Components/sign-in-form/sign-in-form.component';
// import {getRedirectResult} from 'firebase/auth'

import SignUpForm from '../../Components/sign-up/sign-up-form.component';

const Authentication = () => {
    // useEffect(async () => {
    //    const response = await getRedirectResult(auth);
    //    if(response) {
    //     const userDocRef = await createUserDocumentFromAuth(response.user);
    //    }
    // }, []);

    return(
        <div>
            <h1>Sign in Page</h1>,
            <SignInForm/>,
            {/* <button onClick = {logGoogleUser}>Sign in with Google</button> */}
            {/* <button onClick = {signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
            <SignUpForm />
        </div>
    )
}

export default Authentication;