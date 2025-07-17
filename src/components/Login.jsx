import React, { useState, useRef} from 'react'
import Header from "./Header"
import { checkValidData } from '../utils/validate';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth } from "../utils/firebase"
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [isSignInForm, setInSignInForm] = useState(true);
  const[errorMessage, setErrorMessage] = useState(null);
  const Navigate = useNavigate();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        const nameValue = isSignInForm ? null : name.current?.value || "";
        const emailValue = email.current?.value || "";
        const passwordValue = password.current?.value || "";
        const message = checkValidData(nameValue, emailValue, passwordValue);
        setErrorMessage(message);

        if(message) return;
        if(!isSignInForm){
          //sign up login
          createUserWithEmailAndPassword(auth, emailValue, passwordValue)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
  displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
  Navigate("/browse");
}).catch((error) => {
  setErrorMessage(error.message);
});
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
    
  });

        }else{
          //signin logic
          signInWithEmailAndPassword(auth, emailValue, passwordValue)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    Navigate("/browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });

        }

    };

    const toggleSignInForm = () => {
       setInSignInForm(!isSignInForm);
    };
  return (
    <div>
      <Header/>
      <div className="absolute">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_large.jpg"
      alt="bg"/>
      </div>
      <form onSubmit={(e)=> e.preventDefault()} className="absolute p-15 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-75">
        <h1 className="font-bold text-3xl py-0.5 pl-2 pb-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
            <input ref={name} type="text" placeholder="Full Name" className="py-2 px-3 m-2 w-full border border-white-500 h-14"/>
         )}
         <input ref={email} type="text" placeholder="Email or mobile number" className="py-2 px-3 m-2 w-full border border-white-500 h-14"/>
         <input ref={password} type="password" placeholder="Password" className="py-2 px-3 m-2 w-full border border-white-500 h-14"/>
         <p className="text-red-600 font-bold text-lg py-2">{errorMessage}</p>
         <button className="py-2 m-2 bg-red-600 w-full rounded-lg bg-opacity-100 h-10 text-1.5xl font-medium" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
         <p className="py-4 m-2 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up now" : "Already Registered? Sign In now"}</p>
      </form>
    </div>
  );
};

export default Login
