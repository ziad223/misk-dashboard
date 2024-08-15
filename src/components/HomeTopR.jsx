import React from 'react';
import img from '../images/card-img.png';

const HomeTopR = () => {
  return (
    <div className='card bg-primary p-5 rounded-md flex gap-7 items-start'>
       <img src={img} className='object-contain' alt="" />
       <div>
        <h2 className='text-xl text-white'>مرحبا أحمد مصطفي</h2>
        <h4 className='text-gray-300 mt-3 text-[16px'>وريم أبسيوم (Lorem Ipsum) هو ببساطة نص شكلي بعني أن الغاية</h4>
        <button className='float-left border p-2 mt-6 border-1 border-white rounded-md text-white hover:bg-green-700 hover:text-white transtion duration-300'>عرض الصفحة الشخصية</button>
       </div>
    </div>
  );
}

export default HomeTopR;
