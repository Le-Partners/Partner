import React from 'react';
import {useState} from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, EmailAuthCredential  } from 'firebase/auth';
import { auth, provider} from '../Firebase'
import {Link, useNavigate} from 'react-router-dom';





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
    signUpText: {
      marginTop: '20px',  //space between the button and  not a partner? text
    },
    signUpLink: {
      color: 'blue',  // Green color for the "Sign up" text
      textDecoration: 'none', 
      cursor: 'pointer',
    },
    
  };

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
    <div style={styles.container}>
      {/* title above the login box*/}
      <div style={styles.header}>
        <h1 style={styles.title}>Partner</h1>  
        <p style={styles.subtitle}>Login to find new partners!</p> 
      </div>

      {/* box that holds the login info */}
      <div style={styles.box}>
        
        
        {/*boxes with email and password */}
        <form onSubmit={UserSignIn}>
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
        <div style={styles.signUpText}>
        <p>Not a partner?</p>
        {/* button is clickable for signuplink but need to connect pages */}
        <a style={styles.signUpLink}>Sign up</a> 
    </div>
    </div>
    </div>
    );
     
    


}