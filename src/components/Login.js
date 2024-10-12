import React, { useState , useRef } from 'react';  // Combine React and useState imports
import Header from './Header';
import {checkValideData} from "../utils/validate";
import {createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase";
import {updateProfile } from "firebase/auth";


import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATER } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage , setErrorMessage] = useState(null);

  const dispatch = useDispatch();
  
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);  

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  
  const handleButtonClick = ()=> {

    
    // console.log(name.current.value);
    // console.log(email.current.value);
    // console.log(password.current.value);

    const message = checkValideData(email.current.value , password.current.value);
    
    setErrorMessage(message);
 
    if (message) return;


    if(!isSignInForm){

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
                    const user = userCredential.user;
          
          updateProfile(user, {
            displayName: name.current.value , 
            photoURL: USER_AVATER,
          }).then(() => {
                  const { uid , email , displayName , photoURL } = auth.currentUser;
            dispatch(addUser({uid:uid , email:email , displayName:displayName ,photoURL:photoURL }));
            
            // Profile updated!
            // ...
           

          }).catch((error) => {
            // An error occurred
            // ...
            setErrorMessage(error.message)
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode +"-"+errorMessage);
        });

    }
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage);
        });

    }

    }



  

  return (
    <div>
      <Header />
      <div className="absolute">
        <img 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_small.jpg" 
          alt="bg img"
        />
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

       { !isSignInForm && (<input 
          ref={name}
          type="text" 
          placeholder="Full name" 
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />)}


        <input 
        ref={email}
          type="text" 
          placeholder="Email address" 
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />

        <input 
        ref={password}
          type="password" 
          placeholder="Password" 
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        
        <p className="text-red-500 font-bold text-lg py-2" >{errorMessage}</p>

        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign up now" : "Already a member? Sign in"}
        </p>
      </form>
    </div>
  );
};

export default Login;
