import React from "react";
import { Helmet } from "react-helmet";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | Tarun Singh</title>
      </Helmet>
      <div className="bg-white dark:bg-black">
        <div className="flex items-center justify-center">
          <h1 className="text-5xl font-bold text-blue">Contact me</h1>
        </div>
        <section class="bg-white dark:bg-black">
          <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              Have a Query? Contact me now.
            </p>
            <form action="#" class="space-y-8">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  class="shadow-sm bg-gray-50 border dark:drop-shadow-xl border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  for="subject"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  class="block p-3 w-full text-sm text-gray-900 dark:drop-shadow-xl  bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  class="block p-2.5 w-full text-sm text-gray-900 dark:drop-shadow-xl  bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <a
                type="submit"
                class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-sky-300 sm:w-fit hover:bg-sky-400 focus:ring-4 focus:outline-none focus:ring-sky-200 "
                href="mailto:tarunsinghwap7@gmail.com?subject={subject}&body={message}"
              >
                Send message
              </a>
            </form>
          </div>
          <h1 className="flex justify-center dark:text-white">Or</h1>
          <div className="flex justify-center mt-4">
            <h2 className="dark:text-white">
              Drop me an Email-{" "}
              <a
                href="mailto:tarunsinghwap7@gmail.com"
                className="text-xl font-bold cursor-pointer hover:underline hover:text-sky-400"
              >
                tarunsinghwap7@gmail.com
              </a>
            </h2>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
