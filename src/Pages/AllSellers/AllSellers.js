import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllSellers = () => {
  const { data: allbuyers = [], refetch } = useQuery({
    queryKey: ["allbuyers"],
    queryFn: () =>
      fetch("https://book-sell-server.vercel.app/allbuyers").then((res) =>
        res.json()
      ),
  });

  const handleDelete = (id) => {
    fetch(`https://book-sell-server.vercel.app/users/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("Buyers deleted successfully");
          refetch();
        }
      });
  };

  return (
    <div className=" py-12">
      {/* Desktop Responsive Start */}
      <div className="hidden sm:flex flex-col justify-start items-start">
        <div className="pl-4 lg:px-10 2xl:px-20 flex flex-row justify-center items-end space-x-4">
          <h1 className="text-4xl font-semibold leading-9 text-gray-800">
            All Sellers
          </h1>
          {/* <p className="text-base leading-4 text-gray-600 pb-1">
            {allbuyers.length}
            <span>{allbuyers.length === 1 ? " item" : " items"}</span>
          </p> */}
        </div>
        <table className="w-full mt-16 whitespace-nowrap">
          <thead
            aria-label="table heading"
            className="w-full h-16 text-left py-6 bg-gray-50 border-gray-200 border-b "
          >
            <tr>
              <th className="text-base font-medium leading-4 text-gray-600 2xl:pl-20 pl-4 lg:pl-10">
                IMAGE
              </th>
              <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                NAME
              </th>
              <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                EMAIL
              </th>
              <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                MORE OPTION
              </th>
              <th className="text-base font-medium leading-4 text-gray-600 2xl:pl-28 2xl:pr-20 pr-4 lg:pr-10" />
            </tr>
          </thead>
          <tbody className="w-full text-left">
            {allbuyers.map(
              (buyer, i) =>
                buyer?.role === "seller" && (
                  <tr key={i} className="border-gray-200 border-b  ">
                    <th>
                      <div className="h-32 w-32 mb-4 lg:mb-0 my-4 ml-12">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_7.png"
                          alt=""
                          className="h-full w-full rounded-full overflow-hidden shadow"
                        />
                      </div>
                    </th>
                    <th className="mt-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                      <p className=" text-base leading-4 text-gray-800">
                        {buyer?.name}
                      </p>
                    </th>
                    <th className="my-10  pl-6 lg:pl-20 2xl:pl-52">
                      <p className>{buyer?.email}</p>
                    </th>
                    <th className="my-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                      <button className="bg-sky-600 focus:ring-sky-800 focus:ring-offset-2 focus:ring-2 transition duration-150 ease-in-out hover:bg-sky-700 rounded text-white px-6 py-2 font-medium text-sm">
                        VERIFY
                      </button>
                    </th>
                    <th className="my-10 pl-4 lg:pl-12  2xl:pl-28 pr-4 2xl:pr-20">
                      <button
                        onClick={() => handleDelete(buyer?._id)}
                        className="bg-red-600 focus:ring-red-800 focus:ring-offset-2 focus:ring-2 transition duration-150 ease-in-out hover:bg-red-700 rounded text-white px-6 py-2 font-medium text-sm"
                      >
                        DELETE
                      </button>
                    </th>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
      {/* Desktop Responsive End */}
      {/* Mobile Responsive Start */}
      <div className=" flex justify-center items-center">
        <div className="sm:hidden flex flex-col justify-start items-start ">
          <div className="px-4 lg:px-10 2xl:px-20 flex flex-row justify-start items-end space-x-4">
            <p className="text-4xl font-semibold leading-9 text-gray-800">
              ALL Sellers
            </p>
            {/* <p className="text-base leading-4 text-gray-600 pb-1">
              {allbuyers.length}
              <span>{allbuyers.length === 1 ? " item" : " items"}</span>
            </p> */}
          </div>
          {allbuyers.map(
            (buyer, i) =>
              buyer?.role === "seller" && (
                <div key={i} className="border-gray-200 border-b pb-10">
                  <div className="px-4 flex flex-col justify-center items-start mt-10">
                    <div className="h-32 w-32 mb-4 lg:mb-0 my-4 mx-auto">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_7.png"
                        alt=""
                        className="h-full w-full rounded-full overflow-hidden shadow"
                      />
                    </div>
                  </div>
                  <div className="px-4 mt-6 flex justify-between w-full flex justify-center items-center">
                    <div>
                      <p className="w-36 text-base leading-6 text-gray-800">
                        {buyer?.name}
                      </p>
                    </div>
                    <div>
                      <p className="text-base font-semibold leading-4 text-gray-800">
                        {buyer?.email}
                      </p>
                    </div>
                  </div>
                  <div className="px-4 mt-6 flex justify-between w-full flex justify-center items-center">
                    <div>
                      <button className="bg-sky-600 focus:ring-sky-800 focus:ring-offset-2 focus:ring-2 transition duration-150 ease-in-out hover:bg-sky-700 rounded text-white px-6 py-2 font-medium text-sm">
                        VERIFY
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => handleDelete(buyer?._id)}
                        className="bg-red-600 focus:ring-red-800 focus:ring-offset-2 focus:ring-2 transition duration-150 ease-in-out hover:bg-red-700 rounded text-white px-6 py-2 font-medium text-sm"
                      >
                        DELETE
                      </button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      {/* Mobile Responsive End */}
    </div>
  );
};

export default AllSellers;
