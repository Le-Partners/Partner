import React, { useEffect, useState } from 'react';
import { Star,ThumbsUp,Heart,BicepsFlexed, Flame } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";



const Feed = () => {
  // starts the amount of cards that first generate
  // will add more once we get dummy data
  const [cards] = useState(Array.from({ length: 5 }));

const descriptions = {
    Like: "Show appreciation for this post.",
    Fire: "This post is on fire! Give it a flame.",
    Superstar: "Make this post a superstar!",
  };
  // TODO:  add links to usernames that profiles get mapped to as well as caption
  return (
    <div className="feed-container flex flex-col items-center p-8">
      {cards.map((_, index) => (
        <div key={index} className="w-full md:w-96 mb-8 space-y-4 mb-8 -translate-x-20 transform"> {/* Added mb-8 for spacing */}


          {/* profile Icon and name above the card */}
          <div className="flex items-center space-x-4 mb-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src="path_to_profile_image" alt="Profile Picture" />
              <AvatarFallback>PT</AvatarFallback>
            </Avatar>
            <div>
                <p className="text-sm text-gray-500">@joe_schmoes_username</p>
              </div>
            </div>



            {/* Card with image placeholder */}
            <Card className="w-full h-[300px]">
              <CardContent className="space-y-4">

                {/* image within the card */}
                <div className="bg-gray-200 h-48 rounded-md"> {/* Image area */}
                  <p className="text-center text-gray-500">Image Placeholder</p>
                </div>
              </CardContent>
            </Card>


             {/* Like, fire, Superstar buttons slide effect */}

            <div className="flex mt-2 space-x-1 items-start w-full"> {/* Reduced spacing between icons */}
              <div className="group flex items-center transition-all duration-300 min-w-[2rem] hover:min-w-[5rem] overflow-hidden">
                <ThumbsUp size={20} className="text-white group-hover:text-blue-500 transition-colors duration-300" />
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-blue-500">
                  Like
                </span>
              </div>

              <div className="group flex items-center transition-all duration-300 min-w-[2rem] hover:min-w-[5rem] overflow-hidden">
                <Flame size={20} className="text-white group-hover:text-red-500 transition-colors duration-300" />
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-red-500">
                  Fire!
                </span>
              </div>

              <div className="group flex items-center transition-all duration-300 min-w-[2rem] hover:min-w-[6rem] overflow-hidden">
                <Star size={20} className="text-white group-hover:text-yellow-500 transition-colors duration-300" />
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-yellow-500">
                  Superstar!
                </span>
              </div>
            </div>

            {/* Caption Section */}
          <div className="mt-2 text-sm text-white-600 text-left w-full ">
            <p>This is the caption text for the post. This is the caption text for the post.This is the caption text for the post.This is the caption text for the post.</p>
          </div>

            {/* Separator Line */}
            <div className="border-t-2 border-gray-300 mt-4 w-full"></div>
          </div>
        ))}
      </div>

  );
};


export default Feed;