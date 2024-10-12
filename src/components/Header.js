import React from 'react'
import { useEffect } from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser , removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';


const Header = () => {
  const dispatch = useDispatch();
const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = ()=>{


    const auth = getAuth();
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
    });


  };

  useEffect(()=>{

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid , email , displayName , photoURL } = user;
        dispatch(addUser({uid:uid , email:email , displayName:displayName ,photoURL:photoURL }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
       dispatch(removeUser());
       navigate("/");
      }
    });
// unsubscribe when components unmounds 
    return () => unsubscribe();

  },[navigate,dispatch]);
  

  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>


  <img className = "w-44 " src = {LOGO}
    alt= "logo"/>

   {user && (<div className='flex p-2'>
    <img alt="usericon" src= {user?.photoURL} className='h-10 w-10 '/>
      <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
    </div>)
    }
    


  </div>
  )
}

export default Header