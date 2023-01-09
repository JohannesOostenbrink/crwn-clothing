import {useState} from 'react'
import FormInput from '../form-input/form-input.component'
import { 
    signInWithGooglePopup,
    SignInAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
} 
    from '../../utils/firebase/firebase.utils'

import './sign-in.styles.scss'
import Button from '../button/button.component'

const DefaultFormFields = {
    email: '',
    password: '',
}


const SignInForm = () => {

const [formFields, setFormFields] = useState(DefaultFormFields)
const {email, password} = formFields;

const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
};

const SignInEmailPassword = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
};

const handleChange = (e) => {
    const {name, value} = e.target;
    setFormFields({...formFields, [name]:value})

}

const handleSubmit = async (event) => {
    event.preventDefault();

    try{
        const response = await SignInAuthUserWithEmailAndPassword(
            email, 
            password
            
            );


    }catch(error){
        if(error){
            alert('no such user identified')
        }
        console.log('user login error', error)

    }

 }

    return(

        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit = {handleSubmit}/>

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

        <div className = 'buttons-container' >
            
            <Button type="submit" > Sign In </Button>
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