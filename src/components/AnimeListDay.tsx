import React from "react";
import AnimeCard from "./AnimeCard";

const AnimeListDay = ({ anime, day }) => {
  return (
    <section className="mx-auto w-10/12 p-4  rounded-md bg-white shadow-lg ">
      <h2 className="text-3xl text-center sm:text-left">{day}</h2>
      <ul className="my-4 sm:grid sm:grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-4 flex items-center flex-col justify-center">
        {anime.map((ani: any) => (
          <>
            {ani.broadcast.day == day ? (
              <AnimeCard key={ani.mal_id} ani={ani} />
            ) : (
              ""
            )}
          </>
        ))}
      </ul>
    </section>
  );
};

export default AnimeListDay;
