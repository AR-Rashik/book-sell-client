import React, { useState } from "react";

const Blog = () => {
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [box3, setBox3] = useState(false);
  const [box4, setBox4] = useState(false);

  return (
    <div>
      <div>
        <img
          src="https://i.ibb.co/DQ4FZhL/pattern-bg.png"
          alt="blue pattern background"
          className="absolute w-full h-64 md:h-96 object-center object-fit z-0"
        />
        <div className="relative flex flex-col items-center justify-center sm:px-0 px-6 z-20 pb-32">
          <div className="md:py-36 py-20">
            <h1
              // role="heading"
              className="xl:text-6xl md:text-5xl text-xl font-bold leading-10 text-white"
            >
              Blog section
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-8/12 sm:w-9/12 w-full">
            <div className="bg-white shadow rounded p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold leading-none text-gray-800">
                    What are the different ways to manage a state in a React
                    application?
                  </h2>
                </div>
                <button
                  onClick={() => setBox1(!box1)}
                  className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                >
                  {box1 ? (
                    <svg
                      role="button"
                      aria-label="close dropdown"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L5 1L9 5"
                        stroke="#4B5563"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="10"
                      role="button"
                      aria-label="open dropdown"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="#4B5563"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {box1 && (
                <ul className="">
                  <li>
                    <p className="text-lg text-left leading-normal text-gray-600 mt-10">
                      Managing state in your React apps isn’t as simple as using
                      useState or useReducer. Not only are there are a lot of
                      different kinds of state, but there often dozens of ways
                      of managing each kind. Which should you choose? In this
                      guide, we will uncover the several kinds of state in your
                      React apps that you might not be aware of, plus how to
                      manage them in the most effective way. <br />
                      When we talk about state in our applications, it’s
                      important to be clear about what types of state actually
                      matter. <br />
                      There are four main types of state you need to properly
                      manage in your React apps: <br />
                      1.Local state <br />
                      2.Global state <br />
                      3.Server state <br />
                      4.URL state <br />
                      At first, it seems you just need to fetch data and display
                      it in the page. But then you need to display a loading
                      spinner while you are waiting for the data. Then you need
                      to handle errors and display them to the user as they
                      arise.
                    </p>
                  </li>
                </ul>
              )}
            </div>
            <div className="bg-white shadow rounded p-8 mt-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold leading-none text-gray-800">
                    How does prototypical inheritance work?
                  </h2>
                </div>
                <button
                  onClick={() => {
                    setBox2(!box2);
                  }}
                  data-menu
                  className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                >
                  {box2 ? (
                    <svg
                      role="button"
                      aria-label="close dropdown"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L5 1L9 5"
                        stroke="#4B5563"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="10"
                      role="button"
                      aria-label="open dropdown"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="#4B5563"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {box2 && (
                <ul>
                  <li>
                    <p className="text-lg leading-normal text-gray-600 mt-10 text-left">
                      In programming, we often want to take something and extend
                      it. <br />
                      For instance, we have a user object with its properties
                      and methods, and want to make admin and guest as slightly
                      modified variants of it. We’d like to reuse what we have
                      in user, not copy/reimplement its methods, just build a
                      new object on top of it. <br />
                      Prototypal inheritance is a language feature that helps in
                      that. <br />
                      [[Prototype]] <br />
                      In JavaScript, objects have a special hidden property
                      [[Prototype]] (as named in the specification), that is
                      either null or references another object. That object is
                      called “a prototype”: <br />
                      When we read a property from object, and it’s missing,
                      JavaScript automatically takes it from the prototype. In
                      programming, this is called “prototypal inheritance”. And
                      soon we’ll study many examples of such inheritance, as
                      well as cooler language features built upon it. <br />
                      The property [[Prototype]] is internal and hidden, but
                      there are many ways to set it. <br />
                      One of them is to use the special name __proto__, like
                      this. <br />
                    </p>
                  </li>
                </ul>
              )}
            </div>
            <div className="bg-white shadow rounded p-8 mt-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold leading-none text-gray-800">
                    What is a unit test? Why should we write unit tests?
                  </h2>
                </div>
                <button
                  onClick={() => {
                    setBox3(!box3);
                  }}
                  data-menu
                  className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                >
                  {box3 ? (
                    <svg
                      role="button"
                      aria-label="close dropdown"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L5 1L9 5"
                        stroke="#4B5563"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="10"
                      role="button"
                      aria-label="open dropdown"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="#4B5563"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {box3 && (
                <ul>
                  <li>
                    <p className="text-lg leading-normal text-gray-600 mt-10 text-left">
                      In the world of testing, checking a single functionality
                      is quite different from testing a whole application
                      end-to-end. While both are equally important, testing each
                      functionality (also known as a unit) is necessary to
                      ensure that every single function in the application
                      performs as expected. This is where unit testing comes in.{" "}
                      <br />
                      Since JavaScript is a popular programming language used
                      for the development of web applications, it becomes
                      necessary to learn how one can perform unit testing in
                      JavaScript. This article will explore how to perform these
                      tests, where exactly these tests should run, and why.{" "}
                      <br />
                      What is a Unit Test? A unit test verifies the behavior of
                      a unit of software in the system. It verifies whether a
                      small and isolated piece of the codebase called “unit”
                      behaves as the developer intended. <br />
                      Unit tests verify the smallest parts or components of an
                      application by comparing their actual behavior with the
                      expected behavior in complete isolation. Here, “complete
                      isolation” means that, during unit testing, devs do not
                      connect the application with external dependencies such as
                      databases, the filesystem, or HTTP services. This allows
                      unit tests to be fast and stable since they won’t fail due
                      to problems integrating with those external services.{" "}
                      <br />
                      Usually, developers write unit tests first, then write the
                      software code. This approach is known as test-driven
                      development (TDD). In TDD, the requirements are turned
                      into specific test cases, then the software is improved to
                      pass the new tests. In the case of unit tests, it allows
                      for the modification of code without affecting the
                      functionality of other units or the software in its
                      entirety. This makes the job easier for developers as the
                      bugs are easy to locate at this stage, which saves time
                      and money. <br />
                      Also, within unit test environments, the individual
                      modules of a product become isolated from one another and
                      have their own area of responsibility. In this scenario,
                      tests are more reliable because they are run in a
                      contained environment. The code too, because of said
                      reliability, becomes reliable. <br />
                      Along with the above facts, let’s explore the various
                      benefits of unit tests. <br />
                    </p>
                  </li>
                </ul>
              )}
            </div>
            <div className="bg-white shadow rounded p-8 mt-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold leading-none text-gray-800">
                    React vs. Angular vs. Vue?
                  </h2>
                </div>
                <button
                  onClick={() => setBox4(!box4)}
                  data-menu
                  className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                >
                  {box4 ? (
                    <svg
                      role="button"
                      aria-label="close dropdown"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L5 1L9 5"
                        stroke="#4B5563"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="10"
                      role="button"
                      aria-label="open dropdown"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="#4B5563"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {box4 && (
                <ul>
                  <li>
                    <p className="text-lg leading-normal text-gray-600 mt-10 text-left">
                      This post is a comprehensive guide on which is perhaps the
                      right solution for you: Angular vs React vs Vue. <br />
                      Just a couple of years ago, developers were mainly
                      debating whether they should be using Angular vs React for
                      their projects. But over the course of the last couple of
                      years, we’ve seen a growth of interest in a third player
                      called Vue.js. <br />
                      If you are a developer starting out on a project and
                      cannot decide on which JavaScript framework to use, this
                      guide should help you make a decision. <br />
                      Angular, developed by Google, was first released in 2010,
                      making it the oldest of the lot. It is a TypeScript-based
                      JavaScript framework. A substantial shift occurred in 2016
                      on the release of Angular 2 (and the dropping of the “JS”
                      from the original name – AngularJS). Angular 2+ is known
                      as just Angular. Although AngularJS (version 1) still gets
                      updates, we will focus the discussion on Angular. <br />
                      Vue, also known as Vue.js, is the youngest member of the
                      group. It was developed by ex-Google employee Evan You in
                      2014. Over the last several years, Vue has seen a
                      substantial shift in popularity, even though it doesn’t
                      have the backing of a large company. The most current
                      version is always announced on the official Vue website on
                      their releases page. Contributors for Vue are supported by
                      Patreon. It should be noted that Vue also has its own
                      GitHub repo, and functions using TypeScript. Further
                      reading: Vue.js Tutorial for Beginner Developers. <br />
                      React, developed by Facebook, was initially released in
                      2013. Facebook uses React extensively in their products
                      (Facebook, Instagram, and WhatsApp). Similar to Vue, the
                      React developers also announce their newest version on the
                      blog section of the React website.
                    </p>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
