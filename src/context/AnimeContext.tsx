import { createContext, useState, useContext } from "react";
import { doc, setDoc, arrayUnion, updateDoc } from "firebase/firestore"; 
import   {db}   from '../firebase/firebase'
import { UserAuth } from './AuthContext'
import { array } from "zod";

interface AnimeWatchingContext {
  watching: any[];
  addWatching: (
    title: string,
    image_url: string,
    mal_id: number,
    url: string,
    day: string,
    timezone: string,
    time: string
  ) => void;
  deleteWatching: (mal_id: any) => void;
}

const AnimeContext = createContext<AnimeWatchingContext>(
  {} as AnimeWatchingContext
);

export function AnimeProvider({ children }: { children: React.ReactNode }) {
  const { signedInUser } = UserAuth();
  const [watching, setWatching] = useState([]);

  const animeID = doc(db, 'users', `${signedInUser?.email}`)

  const addWatching = (
    title: string,
    image_url: string,
    mal_id: number,
    url: string,
    day: string,
    timezone: string,
    time: string
  ) => {
    setWatching((prevState) => [
      ...prevState,
      { title, image_url, mal_id, url, day, timezone, time },
    ]);
    if(signedInUser?.email) {
      updateDoc(animeID, {
        savedAnime: arrayUnion({
          title: title,
          image_url: image_url,
          mal_id: mal_id,
          url: url,
          day: day,
          timezone: timezone,
          time: time
        })
      })
    } else {
      alert("please sign in")
    }
  };

  const deleteWatching = (mal_id) => {
    setWatching((prevState) => prevState.filter((a) => a.mal_id !== mal_id));
    updateDoc(animeID, {
      savedAnime: watching
    })
  };


  return (
    <AnimeContext.Provider
      value={{
        watching,
        addWatching,
        deleteWatching,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
}

export default AnimeContext;
