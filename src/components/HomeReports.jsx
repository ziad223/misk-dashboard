import React from 'react';
import icon from '../images/move-icon.svg';

const HomeReports = () => {
  return (
    <div className='w-[100%] '>
      <div className='move-report-one bg-primary text-center text-xl p-3 text-white rounded-md'>
        <h6>تقرير الحركة</h6>
       </div>
       <div className="move-report-part flex  items-center justify-between mt-4 rounded-md bg-[#f5f6f9] p-3">
         <div className='flex items-center gap-4'>
            <img src={icon} alt="move-icon" className='bg-white p-3 rounded-3' />
            <span>المركبات</span>
         </div>
          <h6 className='font-bold'>2000</h6>
       </div>
        <div className="move-report-part flex  items-center justify-between mt-4 rounded-md bg-[#f5f6f9] p-3">
         <div className='flex items-center gap-4'>
            <img src={icon} alt="move-icon" className='bg-white p-3 rounded-3' />
            <span>  المسلمه المركبات</span>
         </div>
          <h6 className='font-bold'>2000</h6>
       </div>
       <div className="move-report-part flex  items-center justify-between mt-4 rounded-md bg-[#f5f6f9] p-3">
         <div className='flex items-center gap-4'>
            <img src={icon} alt="move-icon" className='bg-white p-3 rounded-3' />
            <span>مركبات الصيانه</span>
         </div>
          <h6 className='font-bold'>2000</h6>
       </div>
    </div>
  );
}

export default HomeReports;
