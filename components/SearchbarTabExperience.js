import { SearchIcon } from "@heroicons/react/solid";
import React from "react";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";

function SearchbarTabExperience() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const resetInput = () => {
    setSearchInput("");
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const [value, setValue] = useState(0);
  const [searchInput, setSearchInput] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: "",
  });  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className=" hidden md:flex flex-row items-center rounded-full h-[68px] w-[100%] md-shadow-sm  bg-white font-bold dark:bg-gray-800 space-x-5">
      <div className="text-[12px] text-black dark:text-white h-[100%] flex flex-wrap content-center pl-7  rounded-full   transition transform duration-200 ease-out">
        <h1>Location : </h1>
        <input
          value={searchInput.location}
          onChange={(e) => setSearchInput({...searchInput,location:e.target.value})}
          type="text"
          placeholder="Where are you going?"
          className="bg-transparent  outline-none placeholder-gray-500 "
        />
      </div>
      <div className="text-[12px]  dark:text-white text-black h-[100%] flex flex-wrap content-center pl-7  rounded-full   transition transform duration-200 ease-out">
        <h1>Date : </h1>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="date"
          placeholder="Add Date"
          className="flex-grow bg-transparent  outline-none placeholder-gray-500  cursor-pointer "
        />      </div>
        <SearchIcon className="h-[50%] bg-[#FE375B] text-white rounded-full md:p-2 cursor-pointer justify-end p-5" />
    </div>
  );
}

export default SearchbarTabExperience;
