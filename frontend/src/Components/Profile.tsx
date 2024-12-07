import { IconJarLogoIcon } from '@radix-ui/react-icons';
import '../index.css';
import '../styles/Profile.css';
import igLogo from "../assets/instagram-white.png";
import xLogo from "../assets/X-white.png";
import ytLogo from "../assets/youtube-white.png";
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export default function Profile() {
    const [user, setUser] = useState({}); // State to store posts data

    // Fetch posts from the backend
    const fetchUser = async () => {
        let uid =  localStorage.getItem("uid")
        const apiEndpoint = `http://localhost:8080/users/${uid}`;
        try {
            const res = await axios.get(apiEndpoint)
            console.log('Fetched user data:', res.data);
            setUser(res.data); // Update the state with fetched posts
            console.log("User info:", user)
        } catch (error) {
            console.error("Error fetching user:", error);
            throw error
        }
    };

    useEffect(() => {
        fetchUser();
      }, []);

    return (
        // Split the contents into two columns, one 33% of the screen
        <div className="two-column-layout">
            <div className="column left-column">
                {/* Image of the user's profile picture */}
                <Avatar className="profile-avatar">
                    <AvatarImage className="profile-avatar-image" />
                    <AvatarFallback className="fallback">
                        PT
                    </AvatarFallback>
                </Avatar>
            </div>
            {/* Right column */}
            <div className="column main-column">
                <div className="profile-body">
                    {/* Name and username */}
                    <h1 className="name">Joe Schmoe</h1>
                    <h2 className="username">{user.username}</h2>
                    <hr />
                    <h3>Partner up:</h3>
                    {/* Contact information */}
                    <div className="contact-info">
                        <span>joeschmoesamplemail@example.com</span>
                        <span className="phone">+1-721-555-4020</span>
                    </div>
                    <hr />
                    <h3>
                        Workout Experience: {user.experience}
                    </h3>
                    <p>
                        Bio:
                        {user.bio}
                    </p>
                    <hr />
                    <h3>
                        Availablity
                    </h3>
                    <p>
                        I'm available to workout on Monday, Wednesday, Friday, and Saturday at 2pm to 6pm.
                        I can also workout on Tuesday at 9am if preferred.
                    </p>
                    <hr />
                    <h3>
                        Links
                    </h3>
                    {/* Links to external social media sites */}
                    <div className="button-container">
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="button-link">
                            <Button variant="ghost" className="button">
                                <img src={igLogo} alt="Instagram" className="button-logo" />
                            </Button>
                        </a>
                        <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="button-link">
                            <Button variant="ghost" className="button">
                                <img src={xLogo} alt="X" className="button-logo" />
                            </Button>
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="button-link">
                            <Button variant="ghost" className="button">
                                <img src={ytLogo} alt="YouTube" className="button-logo" />
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}


