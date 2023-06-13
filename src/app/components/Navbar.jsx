import React from "react";
import NavbarItem from "@/app/components/(navbarComponents)/NavbarItem.jsx";

const Navbar = () => {
  return (
    <div className="flex flex-row self-center justify-center w-full space-x-4">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
};

export default Navbar;
