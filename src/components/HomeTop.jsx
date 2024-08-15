import React from 'react';
import HomeTopR from './HomeTopR';
import HomeTopL from './HomeTopL';

const HomeTop = () => {
  return (
    <div className='home-top mt-7'>
       <h2 className='font-bold text-xl'>لوحة التحكم</h2>
       <div className="home-top-flex flex justify-between gap-5  mt-5">
        <div className="home-top-right w-1/3 ">
         <HomeTopR/>
        </div>
        <div className="home-top-left  w-2/3">
            <HomeTopL/>
        </div>
       </div>
    </div>
  );
}

export default HomeTop;
