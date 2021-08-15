import { Button } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import React from "react";

export default function Banner() {
  const router =useRouter()
  return (
    <div className="relative h-[500px] overflow-x-hidden">

      <div className="absolute top-[40%] w-full text-center">
        <p className="font-semibold text-lg sm:text-lg">
          Not sure where to go? Perfect.
        </p>
        <button className=" bg-white rounded-full px-10 py-4 shadow-md hover:shadow-sm active:scale-90 transition duration-150 my-4" onClick={()=>router.push("/search?location=lo&startDate=2021-08-24T23%3A00%3A00.000Z&endDate=2021-08-28T23%3A00%3A00.000Z&noOfGuests=1")}>
          <text className="font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600">
            I'm flexible
          </text>
        </button>{" "}
      </div>
    </div>
  );
}
