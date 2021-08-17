import { Center, Input } from "@chakra-ui/react";
import { SearchIcon } from "@heroicons/react/solid";
import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/dist/client/router";
import { Formik } from "formik";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));
function SearchbarTab() {
  const router = useRouter();
  const [value, setValue] = useState(0);
  const [searchInput, setSearchInput] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: "",
  });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return ( 
    <div className=" hidden md:flex flex-row  items-center md:border-1 rounded-full h-[68px] w-[800px] md-shadow-sm bg-white justify-between font-bold dark:bg-gray-800 dark:text-gray-200">
     
      <div className="text-[12px] dark:text-gray-200 text-black h-[100%] w-[80%] flex flex-wrap content-center pl-7 border-r-2 rounded-l-full hover:rounded-full hover:transition transition transform duration-200 ease-out">
        <h1>Location</h1>
        <form></form>
        <Input
          value={searchInput.location}
          onChange={(e) => setSearchInput({...searchInput,location:e.target.value})}
          type="text"
          aria-expanded="false"
          placeholder="Where are you going?"
          variant="unstyled"
          className="placeholder-gray-500 "
          onClick={handleClick}
          aria-describedby={id}
        />
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          PaperProps={{
            style: {
              width: "25%",
              height: "20%",
              borderRadius: "20px",
              backgroundColor: "dark:#1F2937",
            },
          }}
        >
          {" "}
          <h1 className="font-bold text-xs p-7 dark:text-gray-200 dark:bg-gray-800">
            GO ANYWHERE, ANYTIME
          </h1>
          <div
            className="flex flex-row justify-between items-center rounded-full h-[40%] border-1 shadow-lg hover:shadow-xl  transition duration-150 p-7 cursor-pointer dark:text-gray-200  "
            onClick={() =>
              router.push(
                "/search?location=london&startDate=2021-08-24T23%3A00%3A00.000Z&endDate=2021-08-28T23%3A00%3A00.000Z&noOfGuests=1"
              )
            }
          >
            <button className="font-bold text-purple-800 w-[100px]    ">
              I'm flexible
            </button>{" "}
            <video
              crossorigin="anonymous"
              playsinline=""
              poster="https://a0.muscache.com/pictures/04c0a34f-9880-48b7-a69c-49011f602a35.jpg"
              preload="auto"
              width="28"
              height="28"
              className="m-3"
              src="https://a0.muscache.com/v/3d/fc/3dfc1c47-7bfb-5a3b-a969-ed42ae03c901/3dfc1c477bfb5a3ba969ed42ae03c901_200k_1.mp4?impolicy=low_quality"
              type="video/mp4"
              style={{ backgroundColor: "#fff" }}
              autoPlay
            />
          </div>
        </Popover>
      </div>
      <div className="text-[12px] text-black h-[100%]  w-[50%] flex flex-wrap content-center pl-7 border-r-2 rounded-l-full hover:rounded-full hover:bg-gray-200  transition transform duration-200 ease-out dark:text-gray-200 dark:bg-gray-800">
        <h1>Check in</h1>
        <Input
          value={searchInput.date}
          onChange={(e) => setSearchInput({...searchInput,checkIn:e.target.value})}
          type="date"
          aria-expanded="false"
          placeholder="Add dates"
          variant="unstyled"
          className="placeholder-gray-500"
          required

        />
      </div>
      <div className="dark:text-gray-200 dark:bg-gray-800 text-[12px] text-black h-[100%] w-[50%] flex flex-wrap content-center pl-7 border-r-2 rounded-l-full hover:rounded-full hover:bg-gray-200  transition transform duration-200 ease-out">
        <h1>Check out</h1>
        <Input
          value={searchInput.checkOut}
          onChange={(e) => setSearchInput({...searchInput,checkOut:e.target.value})}
          type="date"
          aria-expanded="false"
          placeholder="Add dates"
          variant="unstyled"
          className="placeholder-gray-500 transition"
          required
        />
      </div>
      <div className="dark:text-gray-200 dark:bg-gray-800 flex flex-row hover:bg-gray-200 h-[100%] w-[75%] transition transform duration-200 ease-out rounded-full items-center space-x-5 pr-3">
        <div className="text-[12px] text-black  flex flex-wrap content-center pl-5 dark:text-gray-200 dark:bg-gray-800">
          <h1>Guests</h1>
          <Input
            value={searchInput.guests}
            onChange={(e) => setSearchInput({...searchInput,guests:e.target.value})}
            type="number"
            aria-expanded="false"
            placeholder="Add guests"
            variant="unstyled"
            className="placeholder-gray-500"
            required

          />
        </div>
        <SearchIcon className="flex h-12 w-20  bg-[#FE375B] dark:bg-red-400 text-white rounded-full md:p-2 cursor-pointer justify-end"       onClick={() => {
        router.push({
          pathname: '/search',
          query: {location : searchInput.location,
            startDate:searchInput.checkIn,
            endDate:searchInput.checkOut,
            guests:searchInput.guests
           },
        })
      }} />
      </div>
    </div>
  )}

export default SearchbarTab;
