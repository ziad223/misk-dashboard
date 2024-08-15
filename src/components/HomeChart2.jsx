import { BarChart } from '@mui/x-charts/BarChart';

const HomeChart2 = () => {
  const requestData = [100, 150, 200, 180, 220, 250, 270, 230]; // الطلبات
  const fuelData = [-100, -120, -180, -140, -190, -220, -260, -240]; // المحروقات

  const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];

  return (
    <div className='chart3 p-3 shadow-md'>
      <div className='flex justify-between items-center px-3'>
        <h6>المحروقات</h6>
        <div className='flex gap-3 justify-around items-center'>
          <span className='legend'>
            <span style={{ color: '#ffc107' }}>●</span> المحروقات
          </span>
          <span className='legend'>
            <span style={{ color: '#28914f' }}>●</span> الطلبات
          </span>
        </div>
      </div>
      <BarChart
        height={233}
        series={[
          { data: fuelData, color: '#ffc107', stack: 'stack1' }, // Yellow color for fuel
          { data: requestData, color: '#28914f', stack: 'stack1' }, // Green color for requests
        ]}
        xAxis={[{ data: xLabels, scaleType: 'band' }]}
        yAxis={[{ scaleType: 'linear', label: 'Volume' }]}
        barWidth={10} // Adjust width as needed
      />
    </div>
  );
};

export default HomeChart2;
