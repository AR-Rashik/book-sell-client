import React from "react";
import { useLoaderData } from "react-router-dom";
import CollectionCard from "./CollectionCard";

const CategoryCollection = () => {
  const items = useLoaderData();

  return (
    <div className="2xl:mx-auto 2xl:container">
      <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8 ">
        <h2 className="focus:outline-none text-center text-3xl lg:text-4xl font-extrabold lg:leading-9 tracking-wider text-gray-900">
          Select your preferred books
        </h2>
        <h3 className="text-xl text-center mt-3">Total: {items.length}</h3>
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 lg:mt-16 md:mt-12 mt-8 items-center">
            {items.map((item) => (
              <CollectionCard item={item} key={item._id}></CollectionCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCollection;
