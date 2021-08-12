import { Button } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="relative h-[400px] sm:h-[600px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] bottom-[200px]">
      <Image
        src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=2560"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="font-semibold text-lg sm:text-lg">Not sure where to go? <br></br>Perfect.</p>
        <button className=" bg-white rounded-full px-10 py-4 shadow-md hover:shadow-sm active:scale-90 transition duration-150">
            <text className="font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600">
          I'm flexible</text>
        </button>{" "}
      </div>
    </div>
  );
}