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
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
  const data = await res.json();

  return {
    props: { ani: data },
  };
};

const AnimeDetails = ({ ani }) => {
  const router = useRouter();
  console.log(ani.data);
  const imageUrl = ani.data.trailer.images.maximum_image_url;
  return (
    <div>
      <header
        className={`relative flex w-screen flex-col  items-center overflow-hidden
     bg-[image:var(--image-url)] bg-cover bg-no-repeat py-32`}
     style={{backgroundImage:`url(${imageUrl})`}} 
      >
        <div className="absolute left-0 top-0 h-full w-full bg-[url('/assets/texture.png')]"></div>
        <div className="absolute left-0 top-0 h-full w-full bg-black opacity-40"></div>
      </header>
      <h1 className="text-red-700">{ani.data.title}</h1>
    </div>
  );
};

export default AnimeDetails;
