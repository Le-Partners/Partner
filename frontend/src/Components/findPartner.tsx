import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
            <CarouselItem className="pl-4 w-full h-[500px] items-center ">
              <div className="bg-red-100 w-full h-full p-8 rounded-lg text- shadow-md flex flex-col justify-center">
                <h2 className="text-2xl font-bold">Partner 1</h2>
                <p className="text-lg mt-2">Beginner</p>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-4 w-full h-[500px] items-center ">
              <div className="bg-green-100 w-full h-full p-8 rounded-lg text-center shadow-md flex flex-col justify-center">
                <h2 className="text-2xl font-bold">Partner 2</h2>
                <p className="text-lg mt-2">Intermediate.</p>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-4 w-full h-[500px] items-center ">
              <div className="bg-yellow-100 w-full h-full p-8 rounded-lg text-center shadow-md flex flex-col justify-center">
                <h2 className="text-2xl font-bold">Partner 3</h2>
                <p className="text-lg mt-2">Advance.</p>
              </div>
            </CarouselItem>
          </CarouselContent>

          {/* Navigation buttons */}
          <CarouselPrevious className=" absolute top-1/2 -translate-y-1/2 left" />
          <CarouselNext className=" absolute top-1/2 -translate-y-1/2 right" />
        </Carousel>
      </div>

      {/* Buttons Below Carousel */}
      <div className="align-items ">
        <button>
          Send Message  
        </button>

        <button>
         Partner Up 
        </button>

        <button>
        Connect 
        </button>
      </div>

    </div>
  );
}
