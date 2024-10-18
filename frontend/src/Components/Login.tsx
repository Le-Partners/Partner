import React from 'react';
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

    return(
        <React.Fragment>
            <div>
                Bye
            </div>
        </React.Fragment>
    )
}