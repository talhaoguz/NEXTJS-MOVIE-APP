"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const NavbarItem = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div>
      <Link
        href={`/?genre=${param}`}
        className={`text-gray-400 hover:text-yellow-600 
        ${
          genre && genre === param
            ? "text-yellow-600 underline underline-offset-8 decoration-4"
            : "text-gray-400 no-underline"
        }`}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavbarItem;
