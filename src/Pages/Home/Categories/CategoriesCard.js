import React from "react";

const CategoriesCard = ({ category }) => {
  const { category_id, category_name, image_url } = category;

  return (
    <div className="relative flex flex-col">
      <img src={image_url} alt="two girls" className="w-full" />
      {/* <img
        src="https://i.ibb.co/Tb5CKHn/Rectangle-49.png"
        alt="opacity bg"
        className="absolute w-full top-0"
      /> */}
      <div className="absolute bottom-0 p-6 z-30 bg-zinc-800 bg-opacity-40 w-full">
        <p className="text-sm leading-none text-white">Special collection</p>
        <h1 className="w-64 mx-auto text-2xl font-bold leading-8 mt-2 text-white">
          {category_name}
        </h1>
      </div>
    </div>
  );
};

export default CategoriesCard;
