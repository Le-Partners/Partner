import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EmailAuthCredential, createUserWithEmailAndPassword } from "firebase/auth";
import {auth, provider} from '../Firebase'
import { register } from "module";


const styles = {
    container: {
      // Flexbox to center the box and title in middle of page
      display: 'flex',
      flexDirection: 'column', // stacks the title and box vertical
      justifyContent: 'center',  // then centers the content vertivcal
      alignItems: 'center',  // centers the content horizontal
      height: '100vh', 
      backgroundColor: '#f0f0f0',  // light gray background page
    },
    header: {
      textAlign: 'center',  //centers the text for the titles and text 
      marginBottom: '20px',  // Add space between the title and the login box
    },
    title: {
      fontSize: '3rem',  // Large font 
      fontWeight: 'bold',  // bold
      margin: 0, 
    },
    subtitle: {
      fontSize: '1.25rem',  // small font size for text
      color: '#555',  //dark gray text
      marginTop: '8px',  //space between title and text
      marginBottom: '0', 
    },
    box: {
      padding: '20px',  // padding in box
      backgroundColor: 'white',  //white background in box
      borderRadius: '8px',  // Round corners
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // Subtle shadow around the box 
      textAlign: 'center',  //centers the text inside box
      width: '300px',  // width of box
    },
    inputGroup: {
      marginBottom: '15px',  // Space between the email and password boxes
      textAlign: 'left',  // aligns text to left
    },
    input: {
      width: '100%',  
      padding: '8px',  // padding inside the input 
      marginTop: '5px',  //small space between the labl and input boxes
      borderRadius: '4px',  // rounde corners 
      border: '1px solid #ccc',  // light border around the input 
    },
    button: {
      padding: '10px 20px',  // padding inside the button
      backgroundColor: 'blue',  // blue background
      color: 'white',  // White text 
      border: 'none', 
      borderRadius: '4px',  //round corners 
      cursor: 'pointer',  //shows pointer cursor when hovering button
      width: '100%', 
    },
    logInText: {
      marginTop: '20px',  //space between the button and  have a partner? text
    },
    logInLink: {
      color: 'blue',  // Green color for the "Sign up" text
      textDecoration: 'none', 
      cursor: 'pointer',
    },
    
  };



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

    return (
            <div style={styles.container}>
        {/* Title above the signup box */}
        <div style={styles.header}>
            <h1 style={styles.title}>Partner</h1>  
            <p style={styles.subtitle}>Sign up to join the partner network!</p> 
        </div>

        {/* Box that holds the signup info */}
        <div style={styles.box}>
        <form onSubmit={Register}>
          <div style={styles.inputGroup}>
            <label>Name:</label>
            <input
              onChange={(e) => setName(e.target.value)}  // Updates the name based on the input 
              style={styles.input}  // Styles for input areas 
              required  // Makes the input required to submit
            />
          </div>
          <div style={styles.inputGroup}>
            <label>Email:</label>
                <input
    
                  onChange={(e) => setEmail(e.target.value)}  //updates the email based on the input 
                  style={styles.input}  // styles for input areas 
                  required  //makes the input required to submit
                />
              </div>
              <div style={styles.inputGroup}>
                <label>Password:</label>
                <input
                  type="password"  // set text type  to password to make hidden characters
                  value={password}  // sets password to the the password variable
                  onChange={(e) => setPass(e.target.value)}  // updates the password based on the input 
                  style={styles.input} // styles for input areas 
                  required  //makes the input required to submit
                />
              </div>
              <button type="submit" style={styles.button}>
                Log In
              </button>
              </form>
    
            {/* section for the sign-up text */}
            <div style={styles.logInText}>
            <p>Not a partner?</p>
            {/* button is clickable for signuplink but need to connect pages */}
            <a style={styles.logInLink}>Sign up</a> 
        </div>
        </div>
        </div>
        );
}