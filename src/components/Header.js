import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/useSlice';
import appStore from '../utils/appStore';

const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const user = useSelector((store)=>store.user);

  const handleSignOut=()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
        // An error happened.
        navigate("/error");
      });
  }

  useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          navigate("/browse");
        } else {
          dispatch(removeUser());
          navigate("/");
        }
      });

      // this will called when component unmounts
      return ()=>unsubscribe();
  },[])



  return (
    <div className='absolute w-screen px-16 py-4 bg-gradient-to-b from-gray-900 flex justify-between z-10'>
        <img className='w-44'  src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt='logo' />

      {user && <div className='flex p-2'>
         <img  className="w-12 h-12" alt='profileIcon' src={user?.photoURL}
         />
         <p className='font-bold text-white p-4 cursor-pointer' onClick={handleSignOut}>Sign Out</p>
       </div>
}
    </div>
  )
}

export default Header