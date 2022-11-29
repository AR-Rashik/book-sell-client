import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/myorders?email=${user?.email}`;

  const { data: myorders = [] } = useQuery({
    queryKey: ["myorders", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className=" py-12">
      {/* Desktop Responsive Start */}
      <div className="hidden sm:flex flex-col justify-start items-start">
        <div className="pl-4 lg:px-10 2xl:px-20 flex flex-row justify-center items-end space-x-4">
          <h1 className="text-4xl font-semibold leading-9 text-gray-800">
            My Orders
          </h1>
          <p className="text-base leading-4 text-gray-600 pb-1">
            {myorders.length}
            <span>{myorders.length === 1 ? " item" : " items"}</span>
          </p>
        </div>
        <table className="w-full mt-16 whitespace-nowrap">
          <thead
            aria-label="table heading"
            className="w-full h-16 text-left py-6 bg-gray-50 border-gray-200 border-b "
          >
            <tr>
              <th className="text-base font-medium leading-4 text-gray-600 2xl:pl-20 pl-4 lg:pl-10">
                YOUR ORDERS
              </th>
              <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                NAME
              </th>
              <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                PRICE
              </th>
              <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                PAY
              </th>
              <th className="text-base font-medium leading-4 text-gray-600 2xl:pl-28 2xl:pr-20 pr-4 lg:pr-10" />
            </tr>
          </thead>
          <tbody className="w-full text-left">
            {myorders.map((order, i) => (
              <tr key={i} className="border-gray-200 border-b  ">
                <th>
                  <img
                    className="my-10 pl-4 lg:pl-10 2xl:pl-20"
                    src={order?.image_url}
                    alt="shoe"
                  />
                </th>
                <th className="mt-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                  <p className=" text-base leading-4 text-gray-800">
                    {order?.productName}
                  </p>
                </th>
                <th className="my-10  pl-6 lg:pl-20 2xl:pl-52">
                  <p className>{order?.productPrice}</p>
                </th>
                <th className="my-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                  <button className="bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 font-medium text-sm">
                    Pay
                  </button>
                </th>
                <th className="my-10 pl-4 lg:pl-12  2xl:pl-28 pr-4 2xl:pr-20">
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 text-base leading-none text-red-600 hover:text-red-800">
                    <p>Remove Item</p>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Desktop Responsive End */}
      {/* Mobile Responsive Start */}
      <div className=" flex justify-center items-center">
        <div className="sm:hidden flex flex-col justify-start items-start ">
          <div className="px-4 lg:px-10 2xl:px-20 flex flex-row justify-start items-end space-x-4">
            <p className="text-4xl font-semibold leading-9 text-gray-800">
              My orders
            </p>
            <p className="text-base leading-4 text-gray-600 pb-1">
              {myorders.length}
              <span>{myorders.length === 1 ? " item" : " items"}</span>
            </p>
          </div>
          {myorders.map((order, i) => (
            <div key={i} className="border-gray-200 border-b pb-10">
              <div className="px-4 flex flex-col justify-center items-start mt-10">
                <div>
                  <img src={order?.image_url} alt="shoe" />
                </div>
              </div>
              <div className="px-4 mt-6 flex justify-between w-full flex justify-center items-center">
                <div>
                  <p className="w-36 text-base leading-6 text-gray-800">
                    {order?.productNameproductname}
                  </p>
                </div>
                <div>
                  <p className="text-base font-semibold leading-4 text-gray-800">
                    {order?.productPrice}
                  </p>
                </div>
              </div>
              <div className="px-4 mt-6 flex justify-between w-full flex justify-center items-center">
                <div>
                  <button className="bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 font-medium text-sm">
                    Pay
                  </button>
                </div>
                <div>
                  <button className="focus:outline-none focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-red-800">
                    <p>Remove Item</p>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Mobile Responsive End */}
    </div>
  );
};

export default MyOrders;
