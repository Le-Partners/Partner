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
    <div className="p-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Find Your Workout Partner</h1>

      <div className="w-full max-w-lg h-[400px] relative"> {/* Increased width and height */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4 h-full">
            {/* Carousel Items - each item occupies full width and increased height */}
            <CarouselItem className="pl-4 w-full h-full flex items-center justify-center">
              <div className="bg-blue-100 w-full h-full p-8 rounded-lg text-center shadow-md flex flex-col justify-center">
                <h2 className="text-2xl font-bold">Partner 1</h2>
                <p className="text-lg mt-2">Beginner, loves cardio.</p>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-4 w-full h-full flex items-center justify-center">
              <div className="bg-green-100 w-full h-full p-8 rounded-lg text-center shadow-md flex flex-col justify-center">
                <h2 className="text-2xl font-bold">Partner 2</h2>
                <p className="text-lg mt-2">Intermediate, strength training focused.</p>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-4 w-full h-full flex items-center justify-center">
              <div className="bg-yellow-100 w-full h-full p-8 rounded-lg text-center shadow-md flex flex-col justify-center">
                <h2 className="text-2xl font-bold">Partner 3</h2>
                <p className="text-lg mt-2">Advanced, specializes in HIIT.</p>
              </div>
            </CarouselItem>
          </CarouselContent>

          {/* Navigation buttons */}
          <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-2" />
          <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-2" />
        </Carousel>
      </div>
    </div>
  );
}
