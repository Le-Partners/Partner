import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";
import { UserPlus,Send,Handshake } from 'lucide-react';

export default function FindPartner() {



  
  return (
    <div className="p-8 flex flex-col items-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Find Your Workout Partner</h1>

      <div className="w-full max-w-lg h-full"> 
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          
          <CarouselContent className="h-full">
            {/* Carousel Items  */}
            <CarouselItem className="relative pl-4 w-full h-[500px] bg-red-200 items-center flex justify-center">
            <img
              src="rizzler.png"
              alt="John Doe"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg">
              <p className="text-lg font-bold">The Rizzler, 25</p>
            </div>
            <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg">
              <p className="text-lg font-bold">Beginner</p>
            </div>
            </CarouselItem>

            <CarouselItem className="relative pl-4 w-full h-[500px] bg-red-200 items-center flex justify-center">
            <img
              src="/shirt2.jpg"
              alt="John Doe"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg">
              <p className="text-lg font-bold">Harvey Specter, 25</p>
            </div>
            <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg">
              <p className="text-lg font-bold">Intermediate</p>
            </div>
            </CarouselItem>

            <CarouselItem className="relative pl-4 w-full h-[500px] bg-red-200 items-center flex justify-center">
            <img
              src="/shirt1.jpeg"
              alt="John Doe"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg">
              <p className="text-lg font-bold">Pearson Hardman, 28</p>
            </div>
            <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg">
              <p className="text-lg font-bold">Advanced</p>
            </div>
            </CarouselItem>
        </CarouselContent>

          {/* Navigation buttons */}
          <CarouselPrevious className=" absolute top-1/2 -translate-y-1/2 left" />
          <CarouselNext className=" absolute top-1/2 -translate-y-1/2 right" />
        </Carousel>




      {/* Bio Section */}
      <div className=" shadow-md w-full">
          
          <p className="text-white-700">
            I’m looking for a workout partner I’m looking for a workout partnerI’m looking for a workout partnerI’m 
            looking for a workout partnerI’m looking for a workout partner
          </p>
        </div>
          
        {/* Buttons Below Carousel */}
      <div className="flex justify-around w-full mt-2">

        <button className="px-4 py-2 bg-gray-700 text-white shadow hover:bg-blue-600">
          
        <span>Send Message</span>
          
        </button>
        <button className="px-4 py-2 bg-gray-700 text-white shadow hover:bg-blue-600">
        <span>Partner Request</span>
        </button>
        <button className="px-4 py-2 bg-gray-700 text-white shadow hover:bg-blue-600">
          Connect
        </button>
      </div>

      
    </div>

      
    </div>
  );
}
