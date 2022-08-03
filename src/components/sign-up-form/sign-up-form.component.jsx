import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss"


const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (password !== confirmPassword){
            alert("Password do not match")
            return
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password); 

            await createUserDocumentFromAuth(user, {displayName})

            resetFormFields()
        } catch (error) {
            if (error.code === "auth/email-already-in-use"){
                alert("User Already Exist with the Email!")
            }
            console.log('user creation, encountered an error', error.message)
        }
    }

    const handleChange = (event) => {
        const {name , value} = event.target
        setFormFields({...formFields, [name]: value})
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign Up with your email and password</span>
            <form onSubmit={(e) => handleSubmit(e)}>
                <FormInput label="Display Name" required type="text" onChange={handleChange} name="displayName" value={displayName}/>
                
                <FormInput label="Email" required type="email" onChange={handleChange} name="email" value={email} />
                
                <FormInput label="password" required type="password" onChange={handleChange} name="password" value={password}/>
                
                <FormInput label="Confirm Password" required type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUpForm;
