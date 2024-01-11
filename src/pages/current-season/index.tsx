import React from "react";
import AnimeCard from "~/components/AnimeCard";

const Home = ({ anime }) => {
  return (
    <section className="flex w-full flex-col gap-8 pt-16 ">
      <section className="mx-auto w-5/6  border-green-600 lg:w-4/6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl" data-testid="h2-element">
            Winter 2024 ⛄
          </h2>
        </div>
        <ul className="my-4 flex flex-col items-center justify-center gap-4 sm:grid sm:grid-cols-[repeat(auto-fill,minmax(12rem,1fr))]">
          {anime.map((ani) => (
            <React.Fragment key={ani.mal_id}>
              <AnimeCard key={ani.mal_id} ani={ani} />
            </React.Fragment>
          ))}
        </ul>
      </section>
    </section>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://api.jikan.moe/v4/seasons/2024/winter");
  const data = await res.json();
  const anime = data.data;

  return { props: { anime } };
}

export default Home;
