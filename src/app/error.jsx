"use client";

import React, { useEffect } from "react";

const error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="w-full text-3xl text-center ">
      <h1>Something went wrong</h1>
      <button className="p-2 border" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
};

export default error;
