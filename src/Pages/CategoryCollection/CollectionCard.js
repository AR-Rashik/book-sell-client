import React, { useState } from "react";
import { Link } from "react-router-dom";

const CollectionCard = ({ item }) => {
  const [show, setShow] = useState(false);

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
          <div className="flex items-center justify-start py-4">
            {/* Modal */}
            <div>
              <div>
                {show && (
                  <div
                    className="py-12 bg-transparent dark:transparent bg-opacity-80 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
                    id="modal"
                  >
                    <div
                      role="alert"
                      className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
                    >
                      <div className="relative py-8 px-8 md:px-16 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md rounded border border-gray-400">
                        <div className="w-full flex justify-center text-green-400 mb-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-circle-check"
                            width={56}
                            height={56}
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={12} cy={12} r={9} />
                            <path d="M9 12l2 2l4 -4" />
                          </svg>
                        </div>
                        <h1 className="text-center text-gray-800 dark:text-gray-100 font-lg font-bold tracking-normal leading-tight mb-4">
                          Payment Processing Successful
                        </h1>
                        <p className="mb-5 text-sm text-gray-600 dark:text-gray-400 text-center font-normal">
                          Thank you for your payment. An automated payment
                          receipt will be sent to your email. Check the action
                          below for more details.
                        </p>
                        <div className="flex items-center justify-center w-full">
                          <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm">
                            Manage Plan
                          </button>
                          <button
                            className="focus:outline-none ml-3 bg-gray-100 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-150 text-gray-600 dark:text-gray-400 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                            onClick={() => setShow(!show)}
                          >
                            Cancel
                          </button>
                        </div>
                        <div
                          className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-500 transition duration-150 ease-in-out"
                          onClick={() => setShow(!show)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-label="Close"
                            className="icon icon-tabler icon-tabler-x"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="2.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* <div className="w-full flex justify-center py-12" id="button">
                    <button className="focus:outline-none mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm" onClick={()=>setShow(!show)}>
                        Open Modal
                    </button>
                </div> */}
                {/* Modal End */}
              </div>
            </div>
            <button
              id="button"
              className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 font-medium text-sm"
              onClick={() => setShow(!show)}
            >
              Book Now
            </button>
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
