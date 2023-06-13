import React from "react";
import Link from "next/link";

const LogoItem = ({ address }) => {
  return (
    <div>
      <Link href={address}>
        <span className="p-2 mx-1 font-bold bg-yellow-400 rounded">
          MOVIEAPP
        </span>
      </Link>
    </div>
  );
};

export default LogoItem;
