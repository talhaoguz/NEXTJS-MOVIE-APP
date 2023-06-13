import React from "react";
import Link from "next/link";

const MenuItem = ({ title, address, Icon }) => {
  return (
    <div>
      <Link href={address}>
        <Icon className="hidden max-sm:block" />
        <p className="max-sm:hidden">{title}</p>
      </Link>
    </div>
  );
};

export default MenuItem;
