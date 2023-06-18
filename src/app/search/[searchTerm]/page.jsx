import Results from "@/app/components/Results";
import React from "react";

const SearchPage = async ({ params }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&page=1&include_adult=false`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const results = data.results;
  return (
    <div>
      {results && results.lenth === 0 && (
        <h1 className="text-2xl text-center text-white">No results found</h1>
      )}

      {results && <Results results={results} />}
    </div>
  );
};

export default SearchPage;
