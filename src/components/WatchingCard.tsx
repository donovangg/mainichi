import React from "react";

type WatchingCardProps = {
  title: string;
  image_url: string;
};

const WatchingCard: React.FC<WatchingCardProps> = ({ title, image_url }) => {
  return (
    <div>
      <li className="flex flex-col items-center rounded-lg border border-gray-200 bg-white shadow   md:max-w-xl md:flex-row">
        <img
          className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={image_url}
          alt={title}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </li>
    </div>
  );
};

export default WatchingCard;
