import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const CollectionCard = ({ item }) => {
  const { user } = useContext(AuthContext);
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
    product_condition,
  } = item;

  const handleAddBooking = (event) => {
    event.preventDefault();

    const form = event.target;

    const userName = form.userName.value;
    const email = form.email.value;
    const productName = form.productName.value;
    const productPrice = form.productPrice.value;
    const meetingLocation = form.meetingLocation.value;
    const phoneNumber = form.phoneNumber.value;

    const booking = {
      userName,
      email,
      productName,
      productPrice,
      meetingLocation,
      phoneNumber,
      image_url,
    };

    console.log(booking);

    fetch("https://book-sell-server.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setShow(!show);

        if (data.acknowledged) {
          setShow(!show);
          toast.success("Booking confirmed");
          form.reset();
        }
      })
      .catch((error) => console.error("Book booking error: ", error));
  };

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
            <p className="text-xs text-yellow-700 font-bold">
              {product_condition}
            </p>
          </div>
        </div>
        <div className="p-4">
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-lg font-semibold mb-3">{book_name}</h2>
            <p className="text-xs text-gray-600">{posted_time}</p>
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
            <h3 className="text-indigo-700 text-2xl font-semibold">
              ${resell_price}
            </h3>
            {/* Modal start*/}
            <div>
              <form onSubmit={handleAddBooking}>
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
                        <h3 className="text-center text-indigo-400 dark:text-indigo-400 text-xl font-bold tracking-normal leading-tight mb-8">
                          Please fill these information
                        </h3>
                        <div className="flex flex-col gap-6 my-5">
                          <div className="flex items-center justify-center gap-5">
                            <label
                              htmlFor="userName"
                              className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
                            >
                              User Name
                            </label>
                            <input
                              name="userName"
                              id="userName"
                              type="text"
                              className="text-gray-200 dark:text-gray-200 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                              defaultValue={user?.displayName}
                              disabled
                            />
                          </div>
                          <div className="flex items-center justify-center gap-5">
                            <label
                              htmlFor="email"
                              className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
                            >
                              User Email
                            </label>
                            <input
                              id="email"
                              name="email"
                              className="text-gray-200 dark:text-gray-200 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                              value={user?.email}
                              disabled
                            />
                          </div>
                          <div className="flex items-center justify-center gap-5">
                            <label
                              htmlFor="productName"
                              className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
                            >
                              Product Name
                            </label>
                            <input
                              type="text"
                              id="productName"
                              name="productName"
                              className="text-gray-200 dark:text-gray-200 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                              value={book_name}
                              disabled
                            />
                          </div>
                          <div className="flex items-center justify-center gap-5">
                            <label
                              htmlFor="productPrice"
                              className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
                            >
                              Product Price
                            </label>
                            <input
                              id="productPrice"
                              name="productPrice"
                              className="text-gray-200 dark:text-gray-200 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                              value={resell_price}
                              disabled
                            />
                          </div>
                          <div className="flex items-center justify-center gap-5">
                            <label
                              htmlFor="meetingLocation"
                              className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
                            >
                              Meeting Location
                            </label>
                            <input
                              id="meetingLocation"
                              name="meetingLocation"
                              type="text"
                              className="text-gray-200 dark:text-gray-200 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                              placeholder="Meeting Location"
                              required
                            />
                          </div>
                          <div className="flex items-center justify-center gap-5">
                            <label
                              htmlFor="phoneNumber"
                              className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
                            >
                              Phone Number
                            </label>
                            <input
                              type="number"
                              id="phoneNumber"
                              name="phoneNumber"
                              className="text-gray-200 dark:text-gray-200 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                              placeholder="Enter your phone number"
                              required
                            />
                          </div>
                        </div>
                        <div className="flex items-center justify-center w-full">
                          <input
                            type="submit"
                            value="Submit"
                            className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"
                          />
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
                <div className="w-full flex justify-center py-12" id="button">
                  {/* <button
                    className="focus:outline-none mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"
                    onClick={() => setShow(!show)}
                  >
                    Open Modal
                  </button> */}
                </div>
              </form>
            </div>
            {/* Modal end */}
            <div className="">
              <button
                id="button"
                className="bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 font-medium text-sm"
                onClick={() => setShow(!show)}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
