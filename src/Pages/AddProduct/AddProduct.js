import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // currentDate
  const currentDate = new Date().toDateString();

  const handleAddService = (event) => {
    event.preventDefault();

    const form = event.target;

    const book_name = form.bookName.value;
    const image_url = form.image_url.value;
    const original_price = form.originalPrice.value;
    const resell_price = form.resellPrice.value;
    const category_name = form.categoryName.value;
    const category_id = form.categoryId.value;
    const seller_name = user?.displayName;
    const seller_email = user?.email;
    const posted_time = form.postedTime.value;
    const used = form.used.value;
    const location = form.location.value;
    const product_condition = form.productCondition.value;

    const product = {
      category_id,
      original_price,
      resell_price,
      used,
      posted_time,
      category_name,
      location,
      seller_name,
      seller_email,
      book_name,
      image_url,
      product_condition,
    };

    // console.log(product);

    fetch("http://localhost:5000/addproduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setShow(!show);

        if (data.acknowledged) {
          toast.success("New product added");
          form.reset();
          navigate("/myproducts");
        }
      })
      .catch((error) => console.error("Item post errors: ", error));
  };

  return (
    <form onSubmit={handleAddService} className="text-center mt-8">
      <p className="lg:text-4xl md:text-3xl text-3xl text-center font-semibold text-gray-800">
        Add an item
      </p>
      <p className="text-center mt-4 text-gray-600">
        Want to add a new item? Please fill those requirements.
      </p>
      <div className="mt-8 px-4 flex flex-col justify-center items-center">
        <input
          required
          type="text"
          name="bookName"
          placeholder="Enter book name"
          className="md:w-[643px] w-full resize-none focus:outline-none border border-gray-300 px-3 py-3 mb-4"
        />
        <input
          required
          type="text"
          name="image_url"
          placeholder="Enter item image url"
          className="md:w-[643px] w-full resize-none focus:outline-none border border-gray-300 px-3 py-3 mb-4"
        />
        <input
          required
          type="text"
          name="postedTime"
          defaultValue={currentDate}
          readOnly
          className="md:w-[643px] w-full resize-none focus:outline-none border border-gray-300 px-3 py-3 mb-4"
        />
        <input
          required
          type="number"
          name="originalPrice"
          placeholder="Original Price"
          className="md:w-[643px] w-full resize-none focus:outline-none border border-gray-300 px-3 py-3 mb-4"
        />

        <input
          required
          type="number"
          name="resellPrice"
          placeholder="Resell Price"
          className="md:w-[643px] w-full resize-none focus:outline-none border border-gray-300 px-3 py-3 mb-4"
        />
        <select
          name="productCondition"
          className="md:w-[643px] w-full resize-none focus:outline-none border border-gray-300 px-3 py-3 mb-4"
        >
          <option value="excellent">excellent</option>
          <option value="good">good</option>
          <option value="fair">fair</option>
        </select>
        <select
          name="categoryId"
          className="md:w-[643px] w-full resize-none focus:outline-none border border-gray-300 px-3 py-3 mb-4"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <select
          name="categoryName"
          className="md:w-[643px] w-full resize-none focus:outline-none border border-gray-300 px-3 py-3 mb-4"
        >
          <option value="Action & Adventure">Action & Adventure</option>
          <option value="Comics & Fantasy">Comics & Fantasy</option>
          <option value="Literary Fiction">Literary Fiction</option>
        </select>
        <input
          required
          type="number"
          name="used"
          placeholder="Used for (years)"
          className="md:w-[643px] w-full resize-none focus:outline-none border border-gray-300 px-3 py-3 mb-4"
        />
        <input
          required
          type="text"
          name="location"
          placeholder="Location"
          className="md:w-[643px] w-full resize-none focus:outline-none border border-gray-300 px-3 py-3 mb-4"
        />
      </div>
      <div className="lg:flex justify-center gap-8 text-center lg:mt-6 md:mt-8 mt-8">
        <input
          type="submit"
          value="Submit"
          className="bg-gray-800 hover:bg-gray-700 transition duration-300 ease-out lg:max-w-[187px] w-full text-white py-3 font-medium text-base"
        />
      </div>
    </form>
  );
};

export default AddProduct;
