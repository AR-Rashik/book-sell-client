import React from "react";
import { Link } from "react-router-dom";

const CollectionCard = ({ item }) => {
  const {
    category_id,
    original_price,
    resell_price,
    used,
    posted_time,
    category_name,
    location,
    seller_name,
    book_name,
    image_url,
  } = item;

  return (
    <div className="mx-2 w-72 lg:mb-0 mb-8 hover:shadow-indigo-200 hover:shadow-2xl transition duration-150 ease-in-out">
      <div>
        <img src={image_url} alt="" className="w-full h-44" />
      </div>
      <div className="bg-white">
        <div className="flex items-center justify-between px-4 pt-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-bookmark"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
            </svg>
          </div>
          <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
            <p className="text-xs text-yellow-700 font-bold">{}</p>
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">{book_name}</h2>
            <p className="text-xs text-gray-600 pl-5">{posted_time}</p>
          </div>
          <p className="text-md text-gray-600 mt-2 text-left">
            <span className="font-semibold">Seller:</span> {seller_name}
          </p>
          <div className="flex flex-wrap mt-4">
            <div className="mt-2">
              <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                {location}
              </p>
            </div>
            <div className="pl-2 mt-2">
              <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                Used: {used}
              </p>
            </div>
            <div className="pl-2 mt-2">
              <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                Original price: {original_price}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between py-4">
            <Link
              to={`/services`}
              className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 font-medium text-sm"
            >
              Book Now
            </Link>
            <h3 className="text-indigo-700 text-xl font-semibold">
              ${resell_price}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
