import { SearchIcon } from "@heroicons/react/solid";
import React from "react";
import { useState } from "react";

function SearchbarTab() {
  const [value, setValue] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className=" hidden md:flex flex-row  items-center md:border-1 rounded-full h-[68px] w-[800px] md-shadow-sm bg-white justify-between font-bold  ">
      <div className="text-[12px] text-black h-[100%] flex flex-wrap content-center pl-7 border-r-2 rounded-full hover:bg-gray-200  transition transform duration-200 ease-out">
        <h1>Location</h1>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          aria-expanded="false"
          placeholder="Where are you going?"
          className="flex-grow bg-transparent  outline-none placeholder-gray-500  cursor-pointer "
        />
      
      </div>
      <div className="text-[12px] text-black h-[100%] flex flex-wrap content-center pl-7 border-r-2 rounded-full hover:bg-gray-200  transition transform duration-200 ease-out">
        <h1>Check in</h1>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="Add dates"
          className="flex-grow bg-transparent  outline-none placeholder-gray-500  cursor-pointer "
        />
      </div>
      <div className="text-[12px] text-black h-[100%] flex flex-wrap content-center pl-7 border-r-2 rounded-full hover:bg-gray-200  transition transform duration-200 ease-out">
        <h1>Check out</h1>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="Add dates"
          className="flex-grow bg-transparent  outline-none placeholder-gray-500  cursor-pointer "
        />
      </div>
      <div className="flex flex-row hover:bg-gray-200 h-[100%] transition transform duration-200 ease-out rounded-full items-center">
      <div className="text-[12px] text-black  flex flex-wrap content-center pl-7 ">
        <h1>Guests</h1>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="Add guests"
          className="flex-grow bg-transparent  outline-none placeholder-gray-500  cursor-pointer "
        />
      </div>
      <SearchIcon className="flex h-11  bg-[#FE375B] text-white rounded-full md:p-2 cursor-pointer justify-end " /></div>
    </div>
  );
}

export default SearchbarTab;
