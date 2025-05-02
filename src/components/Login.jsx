import React, { useState } from 'react'
import Header from './header'

const Login = () => {
  const [isSignInForm, setInSignInForm] = useState(true);
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
      <form action="submit" className="absolute p-15 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-75">
        <h1 className="font-bold text-3xl py-0.5 pl-2 pb-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
            <input type="text" placeholder="Full Name" className="py-2 px-3 m-2 w-full border border-white-500 h-14"/>
         )}
         <input type="text" placeholder="Email or mobile number" className="py-2 px-3 m-2 w-full border border-white-500 h-14"/>
         <input type="password" placeholder="Password" className="py-2 px-3 m-2 w-full border border-white-500 h-14"/>
         <button className="py-2 m-2 bg-red-600 w-full rounded-lg bg-opacity-100 h-10 text-1.5xl font-medium">{isSignInForm ? "Sign In" : "Sign Up"}</button>
         <p className="py-4 m-2 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up now" : "Already Registered? SignIn now"}</p>
      </form>
    </div>
  );
};

export default Login
