import React from "react";
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import '../App.css';
import axios from "axios";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HamburgerMenuIcon, BellIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import '../styles/NavBar.css'
import logo from "../assets/logo.png";
// TODO replace BellIcon with BellDotIcon when notifications/are pending
// import { BellDotIcon, EnvelopeOpenIcon } from "lucide-react";
// TODO ditto for messages icon
// TODO Adapt to screen size
export default function NavBar() {
    return (
        <React.Fragment>
            {/* Parent div */}
            <ul className="navbar">
                {/* Left section with logo and menu button */}
                <div className="navbar-left">
                    {/* Side tray button */}
                    <Button variant="ghost" className="navbar-button">
                        <HamburgerMenuIcon />
                    </Button>
                    {/* Home Button */}
                    <Button variant="ghost" className="navbar-button">
                        <img src={logo} alt="Partner" className="object-contain w-auto h-full" />
                    </Button>
                </div>
                {/* Search box */}
                <div className="navbar-search">
                    <Input type="search" placeholder="Find a Partner" />
                </div>

                {/* Account action buttons */}
                <div className="navbar-actions">
                    <Button variant="outline" className="navbar-button">
                        <EnvelopeClosedIcon />
                    </Button>
                    <Button variant="outline" className="navbar-button">
                        <BellIcon />
                    </Button>
                    <Button
                        variant="outline"
                        className="avatar-button">
                        <Avatar className="navbar-avatar">
                            <AvatarImage
                                src="https://github.com/shadcnawadad.pg"
                                className="navbar-avatar-image" />
                            <AvatarFallback className="navbar-avatar-fallback">
                                PT
                            </AvatarFallback>
                        </Avatar>
                    </Button>
                </div>
            </ul>
        </React.Fragment>
    );
}