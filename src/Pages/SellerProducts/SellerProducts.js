import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const SellerProducts = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/myproducts?email=${user?.email}`;

  const { data: myproducts = [] } = useQuery({
    queryKey: ["myproducts", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
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
            My Products
          </h1>
          <p className="text-base leading-4 text-gray-600 pb-1">
            {myproducts.length}
            <span>{myproducts.length === 1 ? " item" : " items"}</span>
          </p>
        </div>
        <table className="w-full mt-16 whitespace-nowrap">
          <thead
            aria-label="table heading"
            className="w-full h-16 text-left py-6 bg-gray-50 border-gray-200 border-b "
          >
            <tr>
              <th className="text-base font-medium leading-4 text-gray-600 2xl:pl-20 pl-4 lg:pl-10">
                YOUR PRODUCT
              </th>
              <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                NAME
              </th>
              <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                PRICE
              </th>
              <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                MORE OPTIONS
              </th>
              <th className="text-base font-medium leading-4 text-gray-600 2xl:pl-28 2xl:pr-20 pr-4 lg:pr-10" />
            </tr>
          </thead>
          <tbody className="w-full text-left">
            {myproducts.map((product, i) => (
              <tr key={i} className="border-gray-200 border-b  ">
                <th>
                  <img
                    className="my-10 pl-4 lg:pl-10 2xl:pl-20"
                    src={product?.image_url}
                    alt="shoe"
                  />
                </th>
                <th className="mt-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                  <p className=" text-base leading-4 text-gray-800">
                    {product?.book_name}
                  </p>
                </th>
                <th className="my-10  pl-6 lg:pl-20 2xl:pl-52">
                  <p className>{product?.resell_price}</p>
                </th>
                <th className="my-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                  <a
                    href="/"
                    className="hover:underline text-base font-medium leading-none  text-gray-800 focus:outline-none focus:underline"
                  >
                    View details
                  </a>
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
              My Products
            </p>
            <p className="text-base leading-4 text-gray-600 pb-1">
              {myproducts.length}
              <span>{myproducts.length === 1 ? " item" : " items"}</span>
            </p>
          </div>
          {myproducts.map((product, i) => (
            <div key={i} className="border-gray-200 border-b pb-10">
              <div className="px-4 flex flex-col justify-center items-start mt-10">
                <div>
                  <img src={product?.image_url} alt="shoe" />
                </div>
              </div>
              <div className="px-4 mt-6 flex justify-between w-full flex justify-center items-center">
                <div>
                  <p className="w-36 text-base leading-6 text-gray-800">
                    {product?.book_name}
                  </p>
                </div>
                <div>
                  <p className="text-base font-semibold leading-4 text-gray-800">
                    {product?.resell_price}
                  </p>
                </div>
              </div>
              <div className="px-4 mt-6 flex justify-between w-full flex justify-center items-center">
                <div>
                  <button className="bg-sky-600 focus:ring-sky-800 focus:ring-offset-2 focus:ring-2 transition duration-150 ease-in-out hover:bg-sky-700 rounded text-white px-6 py-2 font-medium text-sm">
                    ADVERTISE
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

export default SellerProducts;
