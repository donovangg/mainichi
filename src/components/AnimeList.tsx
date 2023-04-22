import React from 'react'
import AnimeCard from './AnimeCard'

type AnimeProps = {
    anime: {
        mal_id: number;
        url: string;
        title: string;
        images: {
          jpg: string;
          webp: {
            image_url: string,
          }
        };
        genres: [
          {
            name: string,
            url: string
          }
        ]
        broadcast: {
          day: string
        }
      }[];
}

const AnimeList: React.FC<AnimeProps> = ({anime}) => {
  return (
    <div>
        <ul>
            {anime.map((ani) => (
                <AnimeCard ani={ani} />
            ))}
        </ul>
    </div>
  )
}

export default AnimeList