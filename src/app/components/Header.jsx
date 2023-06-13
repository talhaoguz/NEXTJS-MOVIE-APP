import React from "react";
import MenuItem from "@/app/components/(headerComponents)/MenuItem.jsx";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import LogoItem from "@/app/components/(headerComponents)/LogoItem.jsx";
import SearchItem from "@/app/components/(headerComponents)/SearchItem.jsx";
import DarkModeSwitch from "@/app/components/(headerComponents)/DarkModeSwitch.jsx";

const Header = () => {
  return (
    <header className="flex flex-row justify-between w-full p-4">
      <div className="flex flex-row self-center justify-center space-x-4">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={AiFillInfoCircle} />
      </div>
      <div className="">
        <SearchItem />
      </div>
      <div className="flex flex-row self-center justify-center h-full">
        <DarkModeSwitch />
        <LogoItem address="/" />
      </div>
    </header>
  );
};

export default Header;
