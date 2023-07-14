import React from 'react'
import { useRouter } from 'next/router';
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType
} from 'next'

export const getStaticPaths = async () => {
  const res = await fetch('https://api.jikan.moe/v4/seasons/2023/summer');
  const data = await res.json();
  const anime = data.data;

  return {
    paths: anime.map((ani) => {
      return {
        params: {
          id: ani.mal_id.toString()
        }
      }
    }),
    fallback:false
  }
}

export const getStaticProps = async ({params}) => {
  const id = params.id;
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
  const data = await res.json();

  return {
    props: {ani: data}
  }
}

const AnimeDetails = ({ani}) => {
  const router = useRouter();
console.log(ani.data);
  return (
   <div>
    <h1 className="text-red-700">{ani.data.title}</h1>
   </div>
  )
}

export default AnimeDetails