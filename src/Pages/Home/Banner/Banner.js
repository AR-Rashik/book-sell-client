import React, { useState } from "react";

const Banner = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div>
      <div>
        <section>
          <div className="w-full relative pb-10 px-6 xl:px-0">
            <img
              className="absolute w-full inset-0 h-full object-cover object-center"
              src="https://cdn.tuk.dev/assets/templates/weCare/hero2-bg.png"
              alt="we care family"
            />
            <div className="lg:p-20 pt-32 lg:flex items-center relative z-10 container mx-auto">
              <div className="w-5/6 lg:w-1/2 h-full lg:pr-10 xl:pr-0">
                <img
                  tabIndex="0"
                  role="img"
                  aria-label="people smiling"
                  className="mx-auto"
                  alt=""
                  src="https://images.pexels.com/photos/1926987/pexels-photo-1926987.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                />
              </div>
              <div role="contentinfo" className="w-full lg:w-1/2 h-full">
                <p
                  tabIndex="0"
                  className="text-indigo-700 uppercase text-2xl mb-4"
                >
                  SECOND HAND BOOK SELL
                </p>
                <h1
                  tabIndex="0"
                  className="text-indigo-700 text-4xl lg:text-6xl font-black mb-8"
                >
                  All Kinds of Books
                </h1>
                <p tabIndex="0" className="text-gray-800 font-regular mb-8">
                  Best selling books on social media & society, IT &
                  cybersecurity, art & music, fun & game. Seminal book on
                  Counter terrorism and Cybersecurity: Total Information
                  Awareness. Nonprofit Organization. Lasting Peace. Create A
                  Better World. Universal Rights.
                </p>
              </div>
            </div>
          </div>
        </section>

        <style>
          {`
            /* Top menu */
            .top-100 {
                animation: slideDown 0.5s ease-in-out;
            }
            @keyframes slideDown {
                0% {
                    top: -50%;
                }
                100% {
                    top: 0;
                }
            }
            * {
                outline: none !important;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                -webkit-tap-highlight-color: transparent;
            }`}
        </style>
      </div>
    </div>
  );
};

export default Banner;
