"use client";

import { ThemeProvider } from "next-themes";

import React from "react";

const Providers = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-gray-700">{children}</div>
    </ThemeProvider>
  );
};

export default Providers;
