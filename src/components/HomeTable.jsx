import { FaCalendarAlt } from 'react-icons/fa';
import { GoTriangleDown } from 'react-icons/go';

const HomeTable = () => {
  return (
    <div className='chart2 p-3 shadow-md'>
     <div className='flex justify-between items-center mb-7  px-3'>
        <h6>الطلبات</h6>
        <div className='flex gap-3 justif-around items-center'>
          <FaCalendarAlt className='chart-icon'/>
          <span>اليوم</span>
          <GoTriangleDown className='chart-icon'/>
        </div>
        </div>
       <div className="p">
      <table className="min-w-full bg-white ">
        <thead>
          <tr className='bg-[#f5f6f9] mb-5'>
            <th className="py-2 px-4 ">اسم الطلب</th>
            <th className="py-2 px-4 ">الاداره</th>
            <th className="py-2 px-4 ">التاريخ</th>
            <th className="py-2 px-4 ">الحاله</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-4 px-4">طلب سياره</td>
            <td className="py-4 px-4 text-sm ">الموارد البشريه</td>
            <td className="py-4 px-4 ">20-01-2023</td>
             <td className="py-4 px-4 text-sm ">
               <span className="text-white bg-green-400 py-1 px-3 rounded-full">
                تم الموافقه
              </span>
            </td>
          </tr>
          <tr>
            <td className="py-4 px-4 ">طلب صيانه</td>
            <td className="py-4 px-4 text-sm ">الموارد البشريه</td>
            <td className="py-4 px-4 ">20-01-2023</td>
            <td className="py-4 px-4 ">
              <span className="text-white bg-red-400 py-1 px-3 rounded-full">
                تم الرفض
              </span>
            </td>
          </tr>
          <tr>
            <td className="py-4 px-4 text-sm ">طلب محروقات</td>
            <td className="py-4 px-4 text-sm ">الموارد البشريه</td>
            <td className="py-4 px-4 text-sm ">20-01-2023</td>
            <td className="py-4 px-4 text-sm ">
              <span className="text-white bg-green-400 py-1 px-3 rounded-full">
                تم الموافقه
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default HomeTable;
