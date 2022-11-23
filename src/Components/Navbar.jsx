import React from 'react'
import altcode from "../Assets/altcode.png"
import { Link } from 'react-router-dom'

import {MdLogin} from "react-icons/md"

const Navbar = () => {
  return (
    <nav className="nav bg-white dark:bg-black justify-center items-center">
        <div className="mx-auto max-w- px-2 sm:px-6 lg:px-8 p-2 justify-between text-black text-md flex flex-row">
            <Link to="/" className="div">
                <img src={altcode} alt="altcode_logo" className="w-56" />
            </Link>
            <ul className="flex flex-row gap-10 my-2">
                <li className="sm:text-md md:text-xl lg:text-2xl text-black font-semibold dark:text-white font-sans ">
                    <Link to="/about" >What we do</Link>
                </li>
                <li className="sm:text-md md:text-xl lg:text-2xl text-black font-semibold dark:text-white font-sans ">
                    <Link to="/about" >Who we are</Link>
                </li>
                <li className="sm:text-md md:text-xl lg:text-2xl text-black font-semibold dark:text-white font-sans ">
                    <Link to="/courses" >Courses</Link>
                </li>
                <li className="sm:text-md md:text-xl lg:text-2xl text-black font-semibold dark:text-white font-sans ">
                    <Link to="/blog" >Blog</Link>
                </li>
                
                <li className="sm:text-md md:text-xl lg:text-2xl text-black font-semibold dark:text-white font-sans ">
                    <Link to="/contact" >Contact</Link>
                </li>
            </ul>
            <div className="text-center hover:opacity-90 hover:cursor-pointer">
                <div className="bg-blue p-4 rounded-xl w-28 h-12 gap-1 flex justify-center items-center  text-white dark:text-black text-center">
                    <p>Log in</p>
                    <MdLogin color='white' size={20} />
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar