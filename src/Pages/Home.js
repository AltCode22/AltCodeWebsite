import React from "react";
import { Link } from "react-router-dom";
import avatar from "../Assets/avatar.png";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home | AltCode</title>
      </Helmet>
      <div class="bg-white dark:bg-black p-8 h-screen">
        <section class="grid max-w-screen-xxl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-8">
            <h1 class="max-w-3xl mb-4 text-5xl font-google font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black dark:text-white">
              Hi👋, I'm AltCode 
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 dark:text-gray-200 lg:mb-8 md:text-xl lg:text-2xl">
              Software Developer, Technical Writer, YouTuber, and a
                passionate learner. I am currently writing various Technical
                Articles at
              <span className="bg-blue text-white px-1 rounded ml-2">
                AltCode
              </span>
            </p>
            <Link
              to="/about"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-sky-400 hover:text-white focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-sky-400 dark:focus:ring-gray-800"
            >
              About
            </Link>
          </div>
          <div class="lg:mt-0 lg:col-span-3 lg:flex w-96">
            {" "}
            {/* apply hidden to hdie image */}
            <img src={avatar} alt="avatar" className=" dark:drop-shadow-xl" />
          </div>
        </section>
      </div>
      {/* <div>
        <section>
        <div class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
            <a href="##" class="relative z-30 p-5 text-2xl text-white bg-sky-400 bg-opacity-60 dark:hover:drop-shadow-xl rounded-xl">
              <h1 className="text-3xl font-bold">YouTube</h1>
            </a>
            <video
              src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
              autoPlay={true}
              loop
              muted
              className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
            ></video>
          </div>
        </section>
      </div> */}
    </>
  );
}

export default Home;
