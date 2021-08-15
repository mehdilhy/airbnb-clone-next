import { SearchIcon } from "@heroicons/react/solid";
import React from "react";
import { useState } from "react";

function SearchbarTabExperience() {
  const [value, setValue] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className=" hidden md:flex flex-row items-center md:border-1 rounded-full h-[66px] w-[800px] md-shadow-sm bg-white justify-between pb-[2px] p-2 font-bold">
      <div className="flex flex-initial text-black text-[12px] font-weight:800 items-center">
        <h1>Location</h1>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="Where are you going?"
          className="flex-grow pl-4 bg-transparent  outline-none placeholder-gray-500 "
        />
      </div>
      <div className="text-black text-[12px]  font-weight:800 ">
        <h1>Date</h1>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="Add when you want to go"
          className="flex-grow pl-4 bg-transparent  outline-none placeholder-gray-500 "
        />
      </div>
      <div>
        <SearchIcon className="flex h-[12] bg-[#FE375B] text-white rounded-full md:p-2 cursor-pointer justify-center" />
      </div>
    </div>
  );
}

export default SearchbarTabExperience;
