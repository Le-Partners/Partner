import React from "react"
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import axios from "axios"
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BellIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import logo from "../assets/logo.png";
// TODO replace BellIcon with BellDotIcon when notifications/are pending
// import { BellDotIcon, EnvelopeOpenIcon } from "lucide-react";
// TODO ditto for messages icon

export default function NavBar() {
    return (
        <React.Fragment>
            <div className="absolute top-0 left-0 pt-8 pl-40 flex space-x-4">
                <Button
                    variant="ghost"
                    className="flex items-center justify-center w-16 h-16">
                    <img
                        src={logo}
                        alt="Partner"
                        className="object-contain w-auto h-full" />
                </Button>
            </div>
            <div className="absolute top-0 right-0 pt-8 pr-8 flex space-x-4">
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
                            { /*TODO Fallback icon should be dependent on username*/}
                            PT
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </div>
        </React.Fragment>
    );
}
