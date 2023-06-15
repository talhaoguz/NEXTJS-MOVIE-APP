import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";

const Card = ({ result }) => {
  return (
    <Link href={`/movie/${result.id}`}>
      <div className="flex flex-col items-center w-full h-full p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-900">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={600}
          height={500}
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        />
        {/*    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" */}
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {result.title}
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-4">
            {result.overview}
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400  items-center flex flex-row">
            <FiThumbsUp />
            <span className="mt-[2px] ml-1">{result.vote_count}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
