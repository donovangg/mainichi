import React from "react";
import { useRouter } from "next/router";
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";

export const getStaticPaths = async () => {
  const res = await fetch("https://api.jikan.moe/v4/seasons/2023/summer");
  const data = await res.json();
  const anime = data.data;

  return {
    paths: anime.map((ani) => {
      return {
        params: {
          id: ani.mal_id.toString(),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const id = params.id;
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
  const data = await res.json();

  return {
    props: { ani: data },
  };
};

const AnimeDetails = ({ ani }) => {
  const router = useRouter();
  console.log(ani.data);
  const title = ani.data.title;
  const jpTitle = ani.data.title_japanese;
  const imageUrl = ani.data.trailer.images.maximum_image_url;
  const animeImage = ani.data.images.webp.image_url;
  const synopsis = ani.data.synopsis;
  const streaming = ani.data.streaming;
  const airingStatus = ani.data.status;
  const malLink = ani.data.url;
  const day = ani.data.broadcast.day;
  const string = ani.data.broadcast.string;
  const time = ani.data.broadcast.time;
  const timezone = ani.data.broadcast.timezone;

  return (
    <>
      <header
        className={`absolute top-0 z-10 flex w-screen flex-col items-center overflow-hidden
     bg-[image:var(--image-url)] bg-cover bg-no-repeat py-36`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute left-0 top-0 h-full w-full bg-[url('/assets/texture.png')]"></div>
        <div className="absolute left-0 top-0 h-full w-full bg-black opacity-40"></div>
      </header>
      <section className="mx-auto mt-44 w-10/12 rounded-md border-2 border-blue-500 ">
        <div className="mt-10 border-2 border-red-500 bg-white p-4 shadow-lg lg:grid lg:grid-cols-2">
          <div className="z-50  flex justify-center border-2 border-green-500">
            <img src={animeImage} alt={ani.data.title} className="-mt-12" />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <h1 className="text-4xl">🇺🇸{ani.data.title}</h1>
            <h1 className="text-4xl">🇯🇵{jpTitle}</h1>
          </div>
        </div>
        <section className="md:grid md:grid-cols-2 md:gap-2">
          <div className="bg-white p-4 shadow-lg">
            <ul>
              <li>
                <p>Airing:</p>
                <p>{airingStatus}</p>
              </li>
              <li>
                <p>Broadcast</p>
                <p>{string}</p>
              </li>
              <li>
                <a href={malLink} target="_blank">
                  MAL
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 shadow-lg">
            <h3>Synopsis</h3>
            <p className="text-clip break-normal leading-6">{synopsis}</p>
          </div>
        </section>
        <section className="bg-white p-4 shadow-lg">
          <h2>Streaming</h2>
          <p>Platforms for streaming:</p>
          <>
          {streaming.map((stream) => (
            <div>
              <a href={stream.url} target="_blank">{stream.name}</a>
            </div>
          ))}
          </>
        </section>
      </section>
    </>
  );
};

export default AnimeDetails;
