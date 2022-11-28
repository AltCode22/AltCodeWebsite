import React from "react";
import envelope from "../Assets/envelope.svg";
import { FaGlobeAsia } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="bg-gray-200 h-screen">
      <div className="">
        <h2 className="text-center text-3xl font-bold">HAVE SOME QUESTIONS?</h2>
        <div className=" flex justify-center gap-8 text-2xl items-center">
          <FaGlobeAsia />
          <p className="text-2xl ">INDIA: CONNAUGHT PLACE 110001 </p>
        </div>
      </div>
      <div className="flex lg:flex-row sm:flex-col max-w-6xl items-center m-9  ">
        <div className="w-2/4 items-center text-center sm:ml-12 ">
          <img className="w-3/4  " src={envelope} alt="" />
        </div>
        <div className="w-2/4 sm:w-3/4">
          <form className="  mt-10 " action="">
            <div className="flex flex-col ">
              <input
                className="  rounded-full p-4 "
                type="text"
                placeholder="Your name"
                name=""
                id=""
              />{" "}
              <br />
              <input
                className=" rounded-full p-4 "
                type="email"
                placeholder="Your email"
                name="email"
                id=""
              />{" "}
              <br />
              <input
                className=" rounded-full p-4"
                type="phone no."
                placeholder="Phone no."
                name="phone"
                id=""
              />{" "}
              <br />
              <input
                className="  rounded-xl p-4 h-32 "
                type="text"
                placeholder="Your question"
                name="paragraph"
                id=""
              />{" "}
              <br />
              <button
                type="button"
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-red-300 rounded-xl h-14 hover:from-purple-500 hover:via-red-500 hover:to-indigo-500"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
