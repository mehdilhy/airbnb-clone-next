import { Button } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://i.ibb.co/gzNg0bD/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className=" bg-white rounded-full px-10 py-4 shadow-md hover:shadow-sm active:scale-90 transition duration-150">
            <text className="font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600">
          I'm flexible</text>
        </button>{" "}
      </div>
    </div>
  );
}
