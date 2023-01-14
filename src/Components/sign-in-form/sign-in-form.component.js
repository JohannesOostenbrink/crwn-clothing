import {useState, useContext} from 'react'
import { 
    signInWithGooglePopup,
    SignInAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
}from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
import './sign-in.styles.scss'
import { UserContext } from '../../context/user.context'


const DefaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {

const [formFields, setFormFields] = useState(DefaultFormFields)
const {email, password} = formFields;

const {setCurrentUser} = useContext(UserContext);

const handleChange = (e) => {
    const {name, value} = e.target;
    setFormFields({...formFields, [name]:value})

}

const handleSubmit = async (event) => {
    event.preventDefault();
    try{
        const {user} = await SignInAuthUserWithEmailAndPassword(
            email, 
            password
        );
        
    }catch(error){
        if(error.code == 'auth/wrong-password'){
            alert('Wrong Password')
        }
        else if(error.code =='auth/user-not-found'){
            alert('User not found')
        }
    }
 }

 const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
};

    return(

        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>

<FormInput
                label="Email"
                type="email"
                required onChange = {handleChange}
                name = "email"
                value = {email}
                />

<FormInput 
                label="Password"
                type="password"
                required onChange = {handleChange}
                name = "password"
                value = {password}
                />

        <div className='buttonsContainer' >
            
            <Button type="submit" onClick={handleSubmit}> Sign In </Button>
            <Button buttonType='google' onClick = {signInWithGoogle} > Google Sign In </Button>
        </div>
        </div>
    )
}

export default SignInForm 


// import FormInput from "../form-input/form-input.component";

// import Button from "../button/button.component";

// import {
//     createUserDocumentFromAuth, 
//     auth, 
// } from "../../utils/firebase/firebase.utils";



// const signInForm = () => {

//     return(
//         <h1>Sign in</h1>,
//         <FormInput 
//                 label="email"
//                 type="email"
//                 required onChange = {handleChange}
//                 name = "email"
//                 value = {email}
//                 />,
//          <FormInput 
//                 label="password"
//                 type="password"
//                 required onChange = {handleChange}
//                 name = "password"
//                 value = {password}
//                 />,
            
//          <Button type="submit" > Sign In </Button>

//     )
// }

// export default signInForm; 