import React from 'react'
import { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {addUser, removeUser} from "../utils/userSlice"

function Header(){
    const dispatch = useDispatch();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const user = useSelector((store)=> store.user);
    const handleSignOut = () =>{
      signOut(auth).then(() => {
}).catch((error) => {
  navigate("/error");
});

    }
        useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid, email, displayName, photoURL} = user;
    dispatch(addUser({uid:uid , email:email, displayName: displayName, photoURL:photoURL}));
    navigate("/browse");

  } else {
    dispatch(removeUser);
    navigate("/");

  }
});
    },[])


  return (
    <div className="absolute w-screen px-22 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      alt="logo"
      />
      {user && (<div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2 focus:outline-none"
        >
          <img
            className="w-10 h-10 rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"
            alt="User Icon"
          />
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-black text-white rounded shadow-lg z-50">
            <ul className="flex flex-col text-sm">
              <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">Profile</li>
              <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">Settings</li>
              <li onClick={handleSignOut} className="border-t border-gray-700 px-4 py-2 hover:bg-gray-800 cursor-pointer">
                Sign Out
              </li>
            </ul>
          </div>
        )}
      </div>
)}
    </div>
  )
}

export default Header

