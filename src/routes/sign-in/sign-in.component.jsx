import React, {useEffect} from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth, 
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  useEffect( ()=>{
    const getRedirectResultFunction = async () => {
      const response = await getRedirectResult(auth)
      if(response) {
        const userDocRef = await createUserDocumentFromAuth(response.user)
      }

    }
    
    getRedirectResultFunction()
  }, []) 
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button>

    </>
  );
};

export default SignIn;
