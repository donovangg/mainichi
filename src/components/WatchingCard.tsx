import React, { Dispatch, SetStateAction } from "react";
import { FaTrash } from "react-icons/fa";
import AnimeContext from "~/context/AnimeContext";
import { UserAuth } from "~/context/AuthContext";
import { useContext, useState, useEffect } from "react";
import { db } from "~/firebase/firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";

type WatchingCardProps = {
  setWatching: Dispatch<SetStateAction<any[]>>
  title: string;
  image_url: string;
  url: string;
  day: string;
  timezone: string;
  time: string;
  mal_id: number;
  deleteAnime: (mal_id: any) => void;
};

const WatchingCard: React.FC<WatchingCardProps> = ({
  title,
  image_url,
  url,
  day,
  timezone,
  time,
  mal_id,
}) => {
  const { addWatching, watching, setWatching} = useContext(AnimeContext);
  const { signedInUser } = UserAuth();

  const [anime, setAnime] = useState([]);

  useEffect(() => {
    onSnapshot(doc(db, "users", `${signedInUser?.email}`), (doc) => {
      setWatching(doc.data()?.savedAnime);
    });
  }, [signedInUser?.email]);

  const animeRef = doc(db, "users", `${signedInUser?.email}`);

  const deleteAnime = async (passedID) => {
    try {
      const result = watching.filter((ani) => ani.mal_id !== passedID);
      await updateDoc(animeRef, {
        savedAnime: result,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div key={mal_id}>
      <li className="sm: relative flex w-96 flex-col items-center rounded-lg border border-gray-200 bg-white shadow md:w-96 md:flex-row lg:w-[30rem]">
        <img
          className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={image_url}
          alt={title}
        />
        <button
          onClick={() => {
            deleteAnime(mal_id);
          }}
        >
          <FaTrash className="absolute right-2 top-2 text-2xl duration-100 hover:text-pink-500" />
        </button>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>

          <div className="flex gap-1">
            <span>{day}</span>
            <span>{time}</span>
          </div>
          <span>{timezone}</span>
          <a href={url} target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M8.273 7.247v8.423l-2.103-.003v-5.216l-2.03 2.404l-1.989-2.458l-.02 5.285H.001L0 7.247h2.203l1.865 2.545l2.015-2.546l2.19.001zm8.628 2.069l.025 6.335h-2.365l-.008-2.871h-2.8c.07.499.21 1.266.417 1.779c.155.381.298.751.583 1.128l-1.705 1.125c-.349-.636-.622-1.337-.878-2.082a9.296 9.296 0 0 1-.507-2.179c-.085-.75-.097-1.471.107-2.212a3.908 3.908 0 0 1 1.161-1.866c.313-.293.749-.5 1.1-.687c.351-.187.743-.264 1.107-.359a7.405 7.405 0 0 1 1.191-.183c.398-.034 1.107-.066 2.39-.028l.545 1.749H14.51c-.593.008-.878.001-1.341.209a2.236 2.236 0 0 0-1.278 1.92l2.663.033l.038-1.81h2.309zm3.992-2.099v6.627l3.107.032l-.43 1.775h-4.807V7.187l2.13.03z"
              />
            </svg>
          </a>
        </div>
      </li>
    </div>
  );
};

export default WatchingCard;
