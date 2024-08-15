import React from 'react';
import HomeTop from '../components/HomeTop';
import HomeChart1 from '../components/HomeChart1';
import HomeReports from '../components/HomeReports';
import HomeTable from '../components/HomeTable';
import HomeChart2 from '../components/HomeChart2';

const Home = () => {
  return (
    <>
    <HomeTop/>
    <div className='flex mt-10 shadow-md p-3 ml-6 gap-3 rounded-md'>
     <div className='w-2/3'>
      <HomeChart1/>
     </div>
    <div className='w-1/3'>
       <HomeReports/>
    </div>
    </div>
    <div className="flex mt-10 gap-3 mb-3">
      <div className="w-1/2">
      <HomeTable/>
      </div>
       <div className="w-1/2 me-5">
      <HomeChart2/>
      </div>
    </div>
    </>
  );
}

export default Home;
