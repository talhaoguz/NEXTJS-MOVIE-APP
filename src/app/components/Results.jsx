import React from "react";
import Card from "./Card";

const Results = ({ results }) => {
  return (
    <div className="grid grid-cols-5 gap-4 py-8 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;
