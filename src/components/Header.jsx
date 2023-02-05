"use client";
import React from "react";
import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numOfPersons, setNumOfPersons] = useState(1);
  const router = useRouter();

  console.log(startDate);
  console.log(endDate);

  const handelDateChange = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const handelCancelClick = () => {
    setSearchInput("");
    setStartDate(new Date());
    setEndDate(new Date());
    setNumOfPersons(1);
  };

  const handelSearchClick = (event) => {
    event.preventDefault();
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numOfPersons,
      },
    });
  };

  const handelChangeDirection = () => {
    router.push("/");
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <header
      className="sticky top-[0] z-50 bg-white p-5 shadow-md md:px-10 grid
      grid-cols-3 text-black"
    >
      {/* Left - Logo */}
      <div
        onClick={handelChangeDirection}
        className="flex cursor-pointer h-10 relative items-center my-auto"
      >
        <Image
          src={`https://links.papareact.com/qd3`}
          alt="banner image"
          fill={true}
          style={{
            objectFit: "contain",
            objectPosition: "left",
          }}
        />
      </div>

      {/* Middle - Search */}
      <div
        className="flex items-center 
        md:border-2 rounded-full py-2"
      >
        <input
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          type="text"
          placeholder="Start your search"
          className="bg-transparent outline-none 
          rounded-full pl-5 flex-grow text-sm text-gray-600 placeholder-gray-400"
        />
        <SearchIcon
          onClick={handelSearchClick}
          className="hidden md:inline-flex h-8 
        bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"
        />
      </div>

      {/* Right - nav */}
      <div className="flex items-center justify-end text-gray-500 space-x-4">
        <p className="hidden md:block cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 p-2 border-2 rounded-full">
          <UserCircleIcon className="h-6 cursor-pointer" />
          <MenuIcon className="h-6 cursor-pointer" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            color={"#FD5B61"}
            onChange={handelDateChange}
          />

          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              min={1}
              value={numOfPersons}
              onChange={(event) => setNumOfPersons(event.target.value)}
              className="w-12 pl-2 text-lg outline-none
            text-red-400 bg-transparent"
            />
          </div>
          <div className="flex items-center justify-evenly">
            <button className="text-gray-500" onClick={handelCancelClick}>
              Cancel
            </button>
            <button className="text-red-400" onClick={handelSearchClick}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
