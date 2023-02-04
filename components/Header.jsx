import React from "react";
import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon,
} from "@heroicons/react/solid";

const Header = () => {
  return (
    <header
      className="sticky top-[0] z-50 bg-white p-5 shadow-md md:px-10 grid
      grid-cols-3 text-black"
    >
      {/* Left - Logo */}
      <div className="flex cursor-pointer h-10 relative items-center my-auto">
        <Image
          src={`https://links.papareact.com/qd3`}
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
          type="text"
          placeholder="Start your search"
          className="bg-transparent outline-none 
          rounded-full pl-5 flex-grow text-sm text-gray-600 placeholder-gray-400"
        />
        <SearchIcon
          className="hidden md:inline-flex h-8 
        bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"
        />
      </div>

      {/* Right - nav */}
      <div></div>
    </header>
  );
};

export default Header;
