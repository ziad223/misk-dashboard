import { BarChart } from '@mui/x-charts/BarChart';
import { FaCalendarAlt } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";

const HomeChart1 = () => {
  const uData = [
    4000, 3000, 2000, 2780, 1890, 2390, 3490, 
    2100, 1800, 3600, 3100, 4500, 3900, 4200, 
    4900, 2300, 3100, 3200, 4700, 2000, 3000, 2780
  ];

  const xLabels = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', 
    '10', '11', '12', '13', '14', '15', '16', '17', 
    '18', '19', '20', '21', '22'
  ];

  return (
    <div>
      <div className='flex justify-between items-center mb-4 px-12'>
        <h6>الحركة</h6>
        <div className='flex gap-3 justify-around items-center'>
          <FaCalendarAlt className='chart-icon'/>
          <span>اليوم</span>
          <GoTriangleDown className='chart-icon'/>
        </div>
      </div>
      <BarChart
        width={700}
        height={300}
        series={[
          { data: uData, stack: 'stack1', color: '#28914f' },
        ]}
        xAxis={[{ data: xLabels, scaleType: 'band' }]}
        barWidth={5}  // Set the column width to 5px
      />
    </div>
  );
}

export default HomeChart1;
