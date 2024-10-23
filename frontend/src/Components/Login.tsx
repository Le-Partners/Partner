import React from 'react';
import googleLogo from '../assets/web_light_sq_SI@2x.png';
import {useState} from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, EmailAuthCredential  } from 'firebase/auth';
import { auth, provider} from '../Firebase'
import {Link, useNavigate} from 'react-router-dom';






export default function Login(){
    var [email, setEmail] = useState('');
    var [password, setPass] = useState('');
    const nav = useNavigate();

    const GoogleSignIn = (event: React.MouseEvent<HTMLButtonElement>) =>{
        event.preventDefault();
        //Open a pop up tab that allows users to sign in with user accounts
        signInWithPopup(auth, provider).then((res) =>{
            //Use the google account displayName as the account name.
            const user = res.user.displayName;
            const profile = res.user.photoURL;
            const uid = res.user.uid;
            //If statement exists because typescript is unsure if user is null or not
            if(user && profile){
                //If the user does exist, set the users name in the storage to verify a user is logged in.
                localStorage.setItem("user", user);
                localStorage.setItem("photo", profile);
                localStorage.setItem("uid", uid);
                //Navigate to home page.
                nav('/home');
            }     
        }).catch((error) =>{
            alert(error.message);
        })
    }

    const UserSignIn = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        //Check if user input fields correctly.
        if(email === '' || password === ''){
            return alert("Must Fill In All Fields");
        }
        //If successful, set the user as the email name. Will add option in future to update display name.
        //Otherwise, same function as above.
        signInWithEmailAndPassword(auth, email, password).then((userCredentials) =>{
            var user = auth.currentUser;
            var photo = user?.photoURL;
            const uid = user?.uid;
            if(user && user.displayName && uid){
                localStorage.setItem("user", user.displayName);
                localStorage.setItem('uid', uid);
            }
            if(photo){
            localStorage.setItem("photo", photo);
            }
            else{
                localStorage.setItem("user", email);
            }
            nav('/home');
        }).catch((error) => {
            alert(error.message)
        })
    }

    return (
      
          // flexible and aligns, stacks vertically, horizontally centers, vertically centers, sets height of screen, white bg
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white text-black">
            
            {/* Title and subtext css for whole section */}

                {/*  mb-6: adds space between bottom of subtext  */}
            <div className="text-center mb-6">

              {/* text-4xl: sets text 4 times reg size, 36px | font-bold: bold font   */}
                <h1 className="text-4xl font-bold mb-2">Partner</h1>
                
                  {/* text-lg: large font = 18px | text-gray-700: sets text gray shade    */}
                <p className="text-lg text-gray-700">Login to find new partners!</p>
            </div>

            {/* Login form */}

              {/*  p-6: adds padding | rounded-lg: larger rounding effect | shadow-md: gives meduim shadow around box  */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-md">

                {/* handles user input   */}
                <form onSubmit={UserSignIn}>

                    <div className="mb-4 text-left">

                        {/* email input  */}
                        <label>Email:</label>

                          {/* updates the state on change */}
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}

                            // w-full: sets input as 100% of width | mt-1: adds a space of 4px above | border: adds border to input
                            className="w-full mt-1 p-2 border border-gray-300 rounded-lg bg-white text-black"
                        />
                    </div>

                    {/* password Input  */}
                    <div className="mb-4 text-left">
                        <label>Password:</label>
                        {/*  creates hidden feature for password  */}
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPass(e.target.value)}
                            className="w-full mt-1 p-2 border border-blue-300 bg-white rounded-lg"
                        />
                    </div>

                    {/*  Login button  */}
                    <button
                        type="submit"

                        // hover:bg-blue = changes bg to darker blue when hovering over 
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                    >
                        Log In
                    </button>
                </form>

                 {/* Google Sign in button image */}
                 <button
                    onClick={GoogleSignIn}
                    className="mt-4 border-none bg-transparent cursor-pointer focus:outline-none"
                >
                    <img
                    //cconnected to image imported 
                       src={googleLogo}
                       alt="Google Sign-In"
                       className="w-300 h-12"
                    />
                </button>


                {/* Sign up link */}
                <div className="mt-4 text-center">
                    <p>Not a partner?</p>
                    <Link to="/signup" className="text-blue-500">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
      
  );
    

    


}