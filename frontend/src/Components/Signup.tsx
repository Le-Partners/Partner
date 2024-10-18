import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EmailAuthCredential, createUserWithEmailAndPassword } from "firebase/auth";
import {auth, provider} from '../Firebase'

export default function Signup(){
    var [email, setEmail] = useState('');
    var [password, setPass] = useState('');
    var [verify, setVerify] = useState('');
    const nav = useNavigate()

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

    return(
        <React.Fragment>
            <div>
                Hi
            </div>
        </React.Fragment>
    )
}