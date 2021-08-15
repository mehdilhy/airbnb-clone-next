import { Input } from "@chakra-ui/react";
import { SearchIcon } from "@heroicons/react/solid";
import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));
function SearchbarTab() {
  const [value, setValue] = useState(0);
  const [searchInput, setSearchInput] = useState("");
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
    <div className=" hidden md:flex flex-row  items-center md:border-1 rounded-full h-[68px] w-[800px] md-shadow-sm bg-white justify-between font-bold">
      <div className="text-[12px] text-black h-[100%] w-[80%] flex flex-wrap content-center pl-7 border-r-2 rounded-l-full hover:rounded-full hover:bg-gray-200  transition transform duration-200 ease-out">
        <h1>Location</h1>
        <Input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
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
          className="h-[800px] w-[800px]"
        >
          {" "}
          <h1 className="font-bold text-xs">GO ANYWHERE, ANYTIME</h1>
          <div className="flex flex-row  space-y-5 justify-between items-center">
            <button className="bg-white rounded-full h-12  shadow-md hover:shadow-sm transition duration-150 text-purple-800 w-[100px]">
              I'm flexible
            </button>{" "}
            <video
              
              crossorigin="anonymous"
              playsinline=""
              poster="https://a0.muscache.com/pictures/04c0a34f-9880-48b7-a69c-49011f602a35.jpg"
              preload="auto"
              width="28"
              height="28"
              className="justify-between"
              autoPlay
            >
              {" "}
              <source
                src="https://a0.muscache.com/v/3d/fc/3dfc1c47-7bfb-5a3b-a969-ed42ae03c901/3dfc1c477bfb5a3ba969ed42ae03c901_200k_1.mp4?impolicy=low_quality"
                type="video/mp4"
              ></source>
            </video>
          </div>
        </Popover>
      </div>
      <div className="text-[12px] text-black h-[100%]  w-[50%] flex flex-wrap content-center pl-7 border-r-2 rounded-l-full hover:rounded-full hover:bg-gray-200  transition transform duration-200 ease-out">
        <h1>Check in</h1>
        <Input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          aria-expanded="false"
          placeholder="Add dates"
          variant="unstyled"
          className="placeholder-gray-500"
        />
      </div>
      <div className="text-[12px] text-black h-[100%] w-[50%] flex flex-wrap content-center pl-7 border-r-2 rounded-l-full hover:rounded-full hover:bg-gray-200  transition transform duration-200 ease-out">
        <h1>Check out</h1>
        <Input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          aria-expanded="false"
          placeholder="Add dates"
          variant="unstyled"
          className="placeholder-gray-500"
        />
      </div>
      <div className="flex flex-row hover:bg-gray-200 h-[100%] w-[75%] transition transform duration-200 ease-out rounded-full items-center space-x-5 pr-3">
        <div className="text-[12px] text-black  flex flex-wrap content-center pl-5">
          <h1>Guests</h1>
          <Input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            aria-expanded="false"
            placeholder="Add guests"
            variant="unstyled"
            className="placeholder-gray-500"
          />
        </div>
        <SearchIcon className="flex h-12 w-20  bg-[#FE375B] text-white rounded-full md:p-2 cursor-pointer justify-end" />
      </div>
    </div>
  );
}

export default SearchbarTab;
