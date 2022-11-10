import React from 'react'
import pro1 from "../Assets/pro1.png"
import pro2 from "../Assets/pro2.png"
import pro3 from "../Assets/pro3.png"
import pro4 from "../Assets/pro4.png"
import {Helmet} from "react-helmet"

const projects = [
  {
    item: 1,
    title: "Apollo Music Player",
    source: ""
  },
  {
    item: 2,
    title: "NewsXTimes",
    source: ""
  },
  {
    item: 3,
    title: "OneDevPlace",
    source: ""
  },
  {
    item: 4,
    title: "Google Search UI",
    source: ""
  },
]


function Projects() {
  return ( 
    <>
    <Helmet>
      <title>Project | Tarun Singh</title>
    </Helmet>
    <section className="bg-white dark:bg-black">
      <div className="flex items-center justify-center">
        <h1 className="text-5xl font-bold text-blue">Projects</h1>
      </div>
      <div className="flex flex-col flex-wrap justify-center md:flex-row gap-4 mt-10 sm:mx-12">
      <div href="##" className="bg-white overflow-hidden drop-shadow-md dark:drop-shadow-xl w-96 h-80 rounded-md items-center justify-center">
          <div className="w-full bg-cover">
              <img src={pro1} alt="" className="w-full h-56" />
          </div>
          <div class="flex pl-3.5 mt-4 space-x-44 md:mt-6 absolute bottom-3">
            <h3 className="inline-flex items-center font-bold text-2xl">Project 1</h3>
            <a href="##" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-sky-400 hover:bg-sky-300">Source</a>
          </div>  
        </div>
        <div href="##" className="bg-white overflow-hidden drop-shadow-md dark:drop-shadow-xl w-96 h-80 rounded-md items-center justify-center">
          <div className="w-full bg-cover">
              <img src={pro2} alt="" className="w-full h-56" />
          </div>
          <div class="flex pl-3.5 mt-4 space-x-44 md:mt-6 absolute bottom-3">
            <h3 className="inline-flex items-center font-bold text-2xl">Project 1</h3>
            <a href="##" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-sky-400 hover:bg-sky-300">Source</a>
          </div>
        </div>
        <div href="##" className="bg-white overflow-hidden drop-shadow-md dark:drop-shadow-xl w-96 h-80 rounded-md items-center justify-center">
          <div className="bg-cover">
              <img src={pro3} alt="" className="w-full h-56" />
          </div>
          <div class="flex pl-3.5 mt-4 space-x-44 md:mt-6 absolute bottom-3">
            <h3 className="inline-flex items-center font-bold text-2xl">Project 1</h3>
            <a href="##" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-sky-400 hover:bg-sky-300">Source</a>
          </div>
        </div>
        <div href="##" className="bg-white overflow-hidden drop-shadow-md dark:drop-shadow-xl w-96 h-80 rounded-md items-center justify-center">
          <div className="w-full bg-cover">
              <img src={pro4} alt="" className="w-full h-56" />
          </div>
          <div class="flex pl-3.5 mt-4 space-x-44 md:mt-6 absolute bottom-3">
            <h3 className="inline-flex items-center font-bold text-2xl">Project 1</h3>
            <a href="##" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-sky-400 hover:bg-sky-300">Source</a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Projects