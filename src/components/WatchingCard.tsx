import React from "react";
import { FaTrash } from "react-icons/fa";

type WatchingCardProps = {
  title: string;
  image_url: string;
  url: string;
  day: string;
  timezone: string;
  time: string;
  mal_id: number;
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
  return (
    <div key={mal_id}>
      <li className="sm: relative flex w-96 flex-col items-center rounded-lg border border-gray-200 bg-white shadow md:w-96 md:flex-row lg:w-[30rem]">
        <img
          className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={image_url}
          alt={title}
        />
        <FaTrash className="absolute right-0 top-0 " />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>

          <div className="flex gap-1">
            <span>{day}</span>
            <span>{time}</span>
          </div>
          <span>{timezone}</span>
          <p></p>
          <a href={url}>Here</a>
        </div>
      </li>
    </div>
  );
};

export default WatchingCard;
