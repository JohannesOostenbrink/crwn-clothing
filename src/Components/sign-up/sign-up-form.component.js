import {useState, useContext} from 'react'
import FormInput from '../form-input/form-input.component'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth  } from '../../utils/firebase/firebase.utils'
import './sign-up-form.styles.scss'
import Button from '../button/button.component'
import {UserContext} from '../../context/user.context'

const DefaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}


const SignUpForm = () => {

const [formFields, setFormFields] = useState(DefaultFormFields)
const { displayName, email, password, confirmPassword } = formFields;

const {setCurrentUser} = useContext(UserContext);

const handleChange = (e) => {
    const {name, value} = e.target;
    setFormFields({...formFields, [name]:value})

}

const handleSubmit = async (event) => {
    event.preventDefault();

    if(password !== confirmPassword){
        alert('passwords do not match');
        return;
    }

const resetFormFields = () => {
    setFormFields(DefaultFormFields);
}

    try{
        const {user} = await createAuthUserWithEmailAndPassword(
            email, 
            password
            
            );

            await createUserDocumentFromAuth(user, {displayName});
            setCurrentUser(user);
            resetFormFields();


    }catch(error){
        if(error.code == 'auth/email-already-in-use'){
            alert('Cannot create user, email already in use')
        }
        console.log('user creation encountered an error', error)

    }

    // createAuthUserWithEmailAndPassword(email, password)
    // .then(user => {
    //   console.log(user);
    // })
    // .catch(error => {
    //   console.error(error);
    // });

 }

    return(

        <div className='sign-up-container'>

            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>

                <FormInput 
                label="Display Name"
                type="text"
                required onChange = {handleChange}
                name = "displayName"
                value = {displayName}
                />

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

                <FormInput 
                label="Confirm Password"
                type="password"
                required onChange = {handleChange}
                name = "confirmPassword"
                value = {confirmPassword}
                />

        <Button type="submit" onClick={handleSubmit} > Sign up </Button>

    </div>
    )
}

export default SignUpForm 