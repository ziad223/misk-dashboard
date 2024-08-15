import React from 'react';
import icon1 from '../images/home-cardIcon-1.svg';
import icon2 from '../images/home-cardIcon-2.svg';
import icon3 from '../images/home-cardIcon-3.svg';
import icon4 from '../images/home-cardIcon-4.svg';
import icon5 from '../images/home-cardIcon-5.svg';
import icon6 from '../images/home-cardIcon-6.svg';
import { FiArrowUpLeft } from "react-icons/fi";

const HomeTopL = () => {
  return (
    <div className='homeTop-cards flex  flex-wrap  gap-3'>
        <div className="homeTop-card shadow  rounded-md p-2 w-[31%] flex items-start gap-4">
        <img src={icon1} alt="home-icon"  className='w-[70px]'/>
        <div>
          <h2 className='font-bold text-xl'>500</h2>
          <h4 className='font-normal text-gray-500'>الموظفين</h4>
          <h6 className='mt-2 text-[#fec962] font-bold'>50%+ <FiArrowUpLeft className='inline-block'/></h6>

        </div>
        </div>
         <div className="homeTop-card shadow  rounded-md p-2 w-[31%] flex gap-4 items-start">
        <img src={icon2} alt="home-icon" className='w-[70px]' />
        <div>
          <h2 className='font-bold text-xl'>300</h2>
          <h4 className='font-normal text-gray-500'>المركبات</h4>
          <h6 className='mt-2 text-[#8feba9] font-bold'>50%+ <FiArrowUpLeft className='inline-block'/></h6>

        </div>
        </div>
        <div className="homeTop-card shadow  rounded-md p-2 w-[31%] flex gap-4 items-start">
        <img src={icon3} alt="home-icon" className='w-[70px]' />
        <div>
          <h2 className='font-bold text-xl'>5000</h2>
          <h4 className='font-normal mt-1 text-gray-500'>المحروقات</h4>
          <h6 className='mt-2 text-[#206387] font-bold'>50%+ <FiArrowUpLeft className='inline-block'/></h6>

        </div>
        </div>
        <div className="homeTop-card shadow  rounded-md p-2 w-[31%] flex gap-4 items-start">
        <img src={icon4} alt="home-icon" className='w-[70px]' />
        <div>
          <h2 className='font-bold text-xl'>1000</h2>
          <h4 className='font-normal text-gray-500'>طلبات الصيانة</h4>
          <h6 className='mt-2 text-[#7366ff] font-bold'>70%+ <FiArrowUpLeft className='inline-block'/></h6>

        </div>
        </div>
         <div className="homeTop-card shadow  rounded-md p-2 w-[31%] flex gap-4 items-start">
        <img src={icon5} alt="home-icon" className='w-[70px]' />
        <div>
          <h2 className='font-bold text-xl'>1000</h2>
          <h4 className='font-normal text-sm text-gray-500'>طلبات المحروقات</h4>
          <h6 className='mt-2 text-[#fec962] font-bold'>70%+ <FiArrowUpLeft className='inline-block'/></h6>

        </div>
        </div>
         <div className="homeTop-card shadow  rounded-md p-2 w-[31%] flex gap-4 items-start">
        <img src={icon6} alt="home-icon" className='w-[70px]' />
        <div>
          <h2 className='font-bold text-xl'>300</h2>
          <h4 className='font-normal text-sm text-gray-500'>مركبات في الصيانة</h4>
          <h6 className='mt-2 text-[#fec962] font-bold'>50%+ <FiArrowUpLeft className='inline-block'/></h6>

        </div>
        </div>
    </div>
  );
}

export default HomeTopL;
