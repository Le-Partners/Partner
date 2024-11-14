import React, { forwardRef } from "react";
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import '../App.css';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HamburgerMenuIcon, BellIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import '../styles/NavBar.css';
import logo from "../assets/logo.png";

// Export NavBar as a forwardRef component
const NavBar = forwardRef<HTMLUListElement>((props, ref) => {
    return (
        <React.Fragment>
            <ul className="navbar" ref={ref}>
                <div className="navbar-left">
                    <Button variant="outline" className="navbar-button">
                        <HamburgerMenuIcon />
                    </Button>
                    <Button variant="outline" className="navbar-button">
                        <img src={logo} alt="Partner" className="object-contain w-auto h-full" />
                    </Button>
                </div>
                <div className="navbar-search">
                    <Input type="search" placeholder="Find a Partner" />
                </div>

                <div className="navbar-actions">
                    <Button variant="outline" className="navbar-button">
                        <EnvelopeClosedIcon />
                    </Button>
                    <Button variant="outline" className="navbar-button">
                        <BellIcon />
                    </Button>
                    <Button variant="ghost" className="avatar-button">
                        <Avatar className="navbar-avatar">
                            <AvatarImage className="navbar-avatar-image" />
                            <AvatarFallback className="navbar-avatar-fallback">
                                PT
                            </AvatarFallback>
                        </Avatar>
                    </Button>
                </div>
            </ul>
        </React.Fragment>
    );
});

// Setting displayName for debugging in React DevTools
NavBar.displayName = "NavBar";

export default NavBar;