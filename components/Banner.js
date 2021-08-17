import { Button, Center } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import React from "react";

export default function Banner() {
  const router = useRouter();
  return (
    <div className="relative h-[500px] overflow-x-hidden ">
      <Center>
        <div className="  absolute top-[20%] text-center  w-[30%] rounded-xl">
          <Center>
            <button
              className="dark:text-gray-200   dark:bg-gray-800 bg-white rounded-xl px-10 py-4 shadow-md hover:shadow-sm active:scale-90 transition duration-150 my-4"
              onClick={() =>
                router.push(
                  "/search?location=lo&startDate=2021-08-24T23%3A00%3A00.000Z&endDate=2021-08-28T23%3A00%3A00.000Z&noOfGuests=1"
                )
              }
            >
              <text className="font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-900 to-pink-900 dark:from-gray-400 dark:to-white">
                Not sure where to go ?{" "}
              </text>
              <text className="font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600 dark:from-gray-400 dark:to-white">
                <br></br>
                I'm flexible
              </text>
            </button>{" "}
          </Center>
        </div>
      </Center>
    </div>
  );
}
