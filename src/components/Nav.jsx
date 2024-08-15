import React from 'react';
import logo from '../images/logo.svg';
import profile from '../images/profile.jpg';
import { IoNotificationsOutline } from "react-icons/io5";
import { TbCategoryPlus } from "react-icons/tb";
import { BsMoonStars } from "react-icons/bs";
import usa from '../images/usa.webp';
const Nav = () => {
  return (
    <div className='flex items-center justify-between px-6  '>
      <img src={logo} alt="logo-img" />
      <div className="nav-left flex justify-center items-center gap-[20px]">
        <div className="nav-profile relative cursor-pointer">
            <img src={profile} className='w-[30px] h-[30px] rounded-full' alt="" />
            <span className='absolute bg-[#28c76f] w-[10px] h-[10px] rounded-full right-0 bottom-0'></span>
        </div>
        <div className="nav-notifications relative cursor-pointer">
        <IoNotificationsOutline className='text-[22px]'/>
        <span className='bg-[#fc3d6c] w-[20px] h-[20px] absolute top-[-10px] right-[-5px] text-center text-white rounded-full leading-[20px] '>1</span>
        </div>
        <TbCategoryPlus className='text-[22px cursor-pointer]'/>
        <BsMoonStars className='text-[22px] cursor-pointer'/>
        <img src={usa} className='w-[30px] h-[30px] rounded-full' alt="usa-flag" />
      </div>
    </div>
  );
}

export default Nav;
