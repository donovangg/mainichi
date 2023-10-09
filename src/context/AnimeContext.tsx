import { createContext, useState, useContext, Dispatch, SetStateAction } from "react";
import { doc, setDoc, arrayUnion, updateDoc } from "firebase/firestore"; 
import   {db}   from '../firebase/firebase'
import { UserAuth } from './AuthContext'
import { array } from "zod";
import { Toast } from "~/components/ui/toast";
import { useToast } from "~/components/ui/use-toast";

interface AnimeWatchingContext {
  setWatching: Dispatch<SetStateAction<any[]>>
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
}

const AnimeContext = createContext<AnimeWatchingContext>(
  {} as AnimeWatchingContext
);

export function AnimeProvider({ children }: { children: React.ReactNode }) {
  const { signedInUser } = UserAuth();
  const [watching, setWatching] = useState([]);
  const { toast } = useToast()

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
    toast({
      title: "Anime Added",
      description: "Anime added to your watchlist",
    })
  };


  // const deleteAnime = async (passedID) {
  //   try {

  //   } catch(error) {
  //     console.log(error);
  //   }
  // }


  return (
    <AnimeContext.Provider
      value={{
        watching,
        addWatching,
        setWatching
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
}

export default AnimeContext;
