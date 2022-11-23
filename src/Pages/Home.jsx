import React from "react";
import hero from "../Assets/hero.png";

const Home = () => {
  return (
    <section className="bg-white dark:bg-black h-screen">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-8xl dark:text-white">
            Welcome to <span className="text-blue">Alt Code</span>
          </h1>
          <p class="max-w-2xl mb-6 text-gray-500 lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400">
            #Aar mai
          </p>
          <a
            href="#dd"
            class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            <span className="text-white">Our Courses</span>
            <svg
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="ddd"
            class="w-40 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-blue rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Videos
          </a>
        </div>
        <div class="lg:mt-0 lg:col-span-5 lg:flex">
          <img src={hero} alt="hero" width={800} />
        </div>
      </div>
      <div className="relative bottom-44">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#38b6ff" fill-opacity="1" d="M0,288L80,250.7C160,213,320,139,480,138.7C640,139,800,213,960,224C1120,235,1280,181,1360,154.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </div>
    </section>
  );
};

export default Home;
