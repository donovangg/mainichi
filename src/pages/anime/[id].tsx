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
        className={`absolute top-0 z-10 flex w-screen flex-col  items-center overflow-hidden
     bg-[image:var(--image-url)] bg-cover bg-no-repeat py-36`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute left-0 top-0 h-full w-full bg-[url('/assets/texture.png')]"></div>
        <div className="absolute left-0 top-0 h-full w-full bg-black opacity-40"></div>
      </header>
      <section className="mx-auto mt-40 w-10/12 rounded-md  bg-white p-4 shadow-lg">
        <div className="flex border-2 border-red-500">
          <div>
            <img src={animeImage} />
          </div>
          <div>
            <h1 className="text-red-700">{ani.data.title}</h1>
          </div>
        </div>
        <h2>Streaming</h2>
        {streaming.map((stream) => (
          <div>
            <p>{stream.name}</p>
            <a href={stream.url} target="_blank">Watch</a>
          </div>
        ))}
      </section>
    </>
  );
};

export default AnimeDetails;
