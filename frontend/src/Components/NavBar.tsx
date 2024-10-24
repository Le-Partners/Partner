import React from "react";
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import '../App.css';
import axios from "axios";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {HamburgerMenuIcon, BellIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";

import logo from "../assets/logo.png";
// TODO replace BellIcon with BellDotIcon when notifications/are pending
// import { BellDotIcon, EnvelopeOpenIcon } from "lucide-react";
// TODO ditto for messages icon
// TODO Adapt to screen size
export default function NavBar() {
    return (
        <React.Fragment>
            {/* Parent div */}
            <div className="absolute top-0 left-0 w-full pt-8 pl-8 pr-8 flex items-center justify-between space-x-4">
                {/* Left section with logo and menu button */}
                <div className="flex items-center justify-start space-x-4">
                    {/* Side tray button */}
                    <Button
                        variant="ghost"
                        className="flex items-center justify-center w-16 h-16">
                        <HamburgerMenuIcon />
                    </Button>
                    {/* Home Button */}
                    <Button
                        variant="ghost"
                        className="flex items-center justify-center w-16 h-16">
                        <img
                            src={logo}
                            alt="Partner"
                            className="object-contain w-auto h-full" />
                    </Button>
                </div>

                {/* Search box */}
                <div className="flex items-center justify-center flex-grow">
                    <Input
                        className="hidden sm:flex items-center justify-center w-full"
                        type="search"
                        placeholder="Find a Partner">
                    </Input>
                </div>

                {/* Account action buttons */}
                <div className="flex items-center justify-end space-x-4">
                    <Button
                        variant="outline"
                        className="flex items-center justify-center w-16 h-16">
                        <EnvelopeClosedIcon />
                    </Button>
                    <Button
                        variant="outline"
                        className="flex items-center justify-center w-16 h-16">
                        <BellIcon />
                    </Button>
                    <Button
                        variant="outline"
                        className="flex items-center justify-center w-16 h-16 rounded-full p-0">
                        <Avatar className="w-full h-full">
                            <AvatarImage
                                src="https://github.com/shadcnawadad.pg"
                                className="object-cover w-full h-full rounded-full" />
                            <AvatarFallback
                                className="flex items-center justify-center text-xl text-white bg-gray-600 rounded-full">
                                PT
                            </AvatarFallback>
                        </Avatar>
                    </Button>
                </div>
            </div>
        </React.Fragment>
    );
}
