import SignInForm from '../../Components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../Components/sign-up/sign-up-form.component';
import './authentication.component.styles.scss'

const Authentication = () => {
    return(
        <div className = 'authentication-container'>
            <SignInForm/>,
            <SignUpForm />
        </div>
    )
}

export default Authentication;

// import {useEffect} from 'react';
// import {getRedirectResult} from 'firebase/auth'
  // useEffect(async () => {
    //    const response = await getRedirectResult(auth);
    //    if(response) {
    //     const userDocRef = await createUserDocumentFromAuth(response.user);
    //    }
    // }, []);
      {/* <button onClick = {logGoogleUser}>Sign in with Google</button> */}
    {/* <button onClick = {signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}