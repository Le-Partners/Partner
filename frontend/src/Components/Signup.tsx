import React from "react";
import googleLogo from '../assets/web_light_sq_SU@2x.png';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth,GoogleAuthProvider,EmailAuthCredential, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import {auth, provider} from '../Firebase'
import { register } from "module";




export default function Signup(){
    var [email, setEmail] = useState('');
    var [password, setPass] = useState('');
    var [verify, setVerify] = useState('');
    const nav = useNavigate()

    const GoogleSignUp = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      //Open a pop up tab that allows users to sign in with user accounts
      signInWithPopup(auth, provider).then((res) => {
          //Use the google account displayName as the account name.
          const user = res.user.displayName;
          const profile = res.user.photoURL;
          const uid = res.user.uid;
          //If statement exists because typescript is unsure if user is null or not
          if (user && profile) {
              //If the user does exist, set the users name in the storage to verify a user is logged in.
              localStorage.setItem("user", user);
              localStorage.setItem("photo", profile);
              localStorage.setItem("uid", uid);
              //Navigate to home page.
              nav('/home');
          }
      }).catch((error) => {
          alert(error.message);
      })
  }


    const Register = (event: React.MouseEvent<HTMLButtonElement>) =>{
        event.preventDefault();
        //Prompts user to input all fields if error.
        if(email === '' || password === ''){
            return alert("Must Fill In All Fields");
        }
        //Added this functionality, checks if pasword verifier matches password.
        if(verify != password){
            return alert('Error - Passwords Must Match')
        }
        //Registers a user with their email and password.
        createUserWithEmailAndPassword(auth, email, password).then((res) =>{
            //Navigates them to login page 
            nav('/Login');
        }).catch((error) =>{
            //If there was an error, more likely then not user input email incorrectly.
            alert(error.message);
        })
    }

    return (
      <div className="flex flex-col items-center justify-center h-screen ">
          {/* Title and subtitle */}
          <div className="text-center mb-6">
              <h1 className="text-4xl font-bold mb-2">Partner</h1>
              <p className="text-lg text-gray-400">Sign up to join the partner network!</p>
          </div>

          {/* Signup form */}
          <div className=" p-6 rounded-lg shadow-md w-80">
              <form onSubmit={Register}>
                  {/* Name input */}
                  <div className="mb-4 text-left">
                      <label>Name:</label>
                      <input
                          onChange={(e) => setName(e.target.value)}
                          className="w-full mt-1 p-2 border border-gray-300 rounded-lg "
                          required
                      />
                  </div>

                  {/* Email input */}
                  <div className="mb-4 text-left">
                      <label>Email:</label>
                      <input
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full mt-1 p-2 border border-gray-300 rounded-lg "
                          required
                      />
                  </div>

                  {/* Password input */}
                  <div className="mb-4 text-left">
                      <label>Password:</label>
                      <input
                          type="password"
                          value={password}
                          onChange={(e) => setPass(e.target.value)}
                          className="w-full mt-1 p-2 border border-blue-300  rounded-lg"
                          required
                      />
                  </div>

                  {/* Verify password input */}
                  <div className="mb-4 text-left">
                      <label>Verify Password:</label>
                      <input
                          type="password"
                          value={verify}
                          onChange={(e) => setVerify(e.target.value)}
                          className="w-full mt-1 p-2 border border-blue-300  rounded-lg"
                          required
                      />
                  </div>

                  {/* Sign up button */}
                  <button
                      type="submit"
                      className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                  >
                      Register
                  </button>
              </form>
              
               {/* Google Signup button image*/}
               <button
                    onClick={GoogleSignUp}
                    className="mt-4 border-none bg-transparent cursor-pointer focus:outline-none"
                >
                    <img
                        src={googleLogo}
                        alt="Google Sign-Up"
                        className="w-300 h-12" 
                    />
                </button> 

              {/* Login link */}
              <div className="mt-4 text-center">
                  <p>Already a partner?</p>
                  <Link to="/login" className="text-blue-500">
                      Log In
                  </Link>
              </div>
          </div>
      </div>
  );
}