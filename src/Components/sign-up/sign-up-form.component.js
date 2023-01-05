import {useState} from 'react'
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'

const DefaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}


const SignUpForm = () => {

const [formFields, setFormFields] = useState(DefaultFormFields)
const { displayName, email, password, confirmPassword } = formFields;

const handleSubmit = async (event) => {
    event.preventDefault();

}

const handleChange = (e) => {
    const {name, value} = e.target;
    setFormFields({...formFields, [name]:value})

}

console.log(formFields)

    return(
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit = {() => {}}>
                <label>Display Name</label>
                <input type='text' required onChange = {handleChange} name='displayName' value={displayName} />
                <label>Email</label>
                <input type='email' required onChange = {handleChange} name='email' value={email}/>
                <label>Password</label>
                <input type='password' required onChange = {handleChange} name='password' value={password}/>
                <label>Confirm Password</label>
                <input type='password' required onChange = {handleChange} name='confirmPassword' value={confirmPassword} />
                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default SignUpForm; 