import React from 'react'
import Logo from "./img/logo.png"
import {BsCart4} from "react-icons/bs"
import Avatar from "./img/avatar.png"
import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <div className=" z-50 w-screen bg-slate-300 p-6 px-16">
      <div className="hidden md:flex w-full h-full item-center justify-between ">
        <Link to={"/"} className='flex items-center gap-2'>
          <img src={Logo} className='w-10 object-cover' alt="logo" />
          <p className='text-headingColor text-xl font-bold'>City</p>
        </Link>
        <div className='flex item-center gap-8'>
        <ul className='flex items-center gap-8'>
          <Link to={"/restaurant"} className="text-bse text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out cursor-pointer">
            Restaurant
          </Link>
          <li className="text-bse text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out cursor-pointer">
            Contact us</li>
          <Link to={"/login"}className="text-bse text-textColor hover:bg-gray-200 rounded py-2 px-4 bg-white hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out cursor-pointer">
            Sign In</Link>
          <Link to={"/signup"} className="text-bse text-textColor hover:bg-gray-200 rounded py-2 px-4 bg-white hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out cursor-pointer">
            Sign Up</Link>
        </ul>

        <div className='relative flex items-center justify-center'>
            <BsCart4 className='text-textColor text-2xl ml-8 cursor-pointer'/>
            <div className='absolute -top-0 -right-0 w-4 h-4 rounded-full bg-cartNumBg flex item-center justify-center'>
                <p className=' -top-1 text-xs text-white font-semi-bold '>2</p>
            </div>
            </div>
            <motion.img whileTap={{scale:0.8}}
            src={Avatar} className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl cursor-pointer rounded-full" alt="userprofile" />
            </div>
            <div className='w-40 bg-primary shadow-xl rounded-lg flex  flex-col absolute '>
              <p>New Item</p>
              <p>Logout</p>
            </div>
      </div>

      <div className="flex md:hidden w-full h-full "></div>
    </div>
  )
}

export default Header