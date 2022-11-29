<div>
  <form>
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
            <h3 className="text-center text-gray-800 dark:text-gray-100 font-lg font-bold tracking-normal leading-tight mb-8">
              Enter your information
            </h3>
            {/* <div className="w-full flex justify-center text-green-400 mb-4">
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
                        </div> */}
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
            {/* <h3 className="text-center text-gray-800 dark:text-gray-100 font-lg font-bold tracking-normal leading-tight mb-4">
                          Payment Processing Successful
                        </h3>
                        <p className="mb-5 text-sm text-gray-600 dark:text-gray-400 text-center font-normal">
                          Thank you for your payment. An automated payment
                          receipt will be sent to your email. Check the action
                          below for more details.
                        </p> */}
            <div className="flex items-center justify-center w-full">
              <input
                type="submit"
                className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"
              >
                Submit
              </input>
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
      <button
        className="focus:outline-none mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"
        onClick={() => setShow(!show)}
      >
        Open Modal
      </button>
    </div>
    {/* Modal End */}
  </form>
</div>;
<form className="text-center mt-8">
  <h2 className="focus:outline-none text-center text-3xl lg:text-4xl font-extrabold lg:leading-9 tracking-wider text-gray-900">
    Add a product
  </h2>
  <p className="text-center mt-4 text-gray-600">
    Want to add a new product? Please fill those requirements.
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
      placeholder="Enter book image url"
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
    <input
      required
      type="text"
      name="postedTime"
      defaultValue={currentDate}
      readOnly
      className="md:w-[643px] w-full resize-none focus:outline-none border border-gray-300 px-3 py-3 mb-4"
    />
    <select
      required
      name="CategoryId"
      className="md:w-[643px] w-full resize-none focus:outline-none border border-gray-300 px-3 py-3 mb-4"
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <select
      required
      name="CategoryName"
      className="md:w-[643px] w-full resize-none focus:outline-none border border-gray-300 px-3 py-3 mb-4"
    >
      <option value="Action & Adventure">Action & Adventure</option>
      <option value="Comics & Fantasy">Comics & Fantasy</option>
      <option value="Literary Fiction.">Literary Fiction.</option>
    </select>
    <input
      required
      type="number"
      name="used"
      placeholder="Used for"
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
      onClick={handleAddProduct}
      type="submit"
      value="Submit"
      className="bg-gray-800 hover:bg-gray-700 transition duration-300 ease-out lg:max-w-[187px] w-full text-white py-3 font-medium text-base"
    />
  </div>
</form>;
