import React, { useEffect, useState } from "react";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <div className="2xl:mx-auto 2xl:container">
        <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
          <h2 className="focus:outline-none text-center text-3xl lg:text-4xl font-extrabold lg:leading-9 tracking-wider text-gray-900">
            Books Categories {categories.length}
          </h2>
          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 lg:mt-16 md:mt-12 mt-8 items-center">
              {categories.map((category) => (
                <CategoriesCard
                  key={category._id}
                  category={category}
                ></CategoriesCard>
              ))}
              {/* <div className="relative flex flex-col">
                <img
                  src="https://i.ibb.co/cvN3gMZ/carousel-2.png"
                  alt="black guy"
                  className="w-full"
                />
                <img
                  src="https://i.ibb.co/Tb5CKHn/Rectangle-49.png"
                  alt="opacity bg"
                  className="absolute w-full top-0"
                />
                <div className="absolute m-6 bottom-0 z-30">
                  <p className="text-sm leading-none text-white">
                    Special collection
                  </p>
                  <h1 className="w-64 text-2xl font-semibold leading-8 mt-2 text-white">
                    New Monochrome Collection
                  </h1>
                  <p className="mt-4 text-base font-medium cursor-pointer leading-4 underline text-white">
                    Discover
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col">
                <img
                  src="https://i.ibb.co/4JJnHpc/carousel-3.png"
                  alt="black guy"
                  className="w-full"
                />
                <img
                  src="https://i.ibb.co/Tb5CKHn/Rectangle-49.png"
                  alt="opacity bg"
                  className="absolute w-full top-0"
                />
                <div className="absolute m-6 bottom-0 z-30">
                  <p className="text-sm leading-none text-white">
                    Special collection
                  </p>
                  <h1 className="w-64 text-2xl font-semibold leading-8 mt-2 text-white">
                    New Monochrome Collection
                  </h1>
                  <p className="mt-4 text-base font-medium cursor-pointer leading-4 underline text-white">
                    Discover
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
