import React from 'react';
import { Chart } from 'react-google-charts';
import 'tailwindcss/tailwind.css';

const chartData = [
  ['Class', 'Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
  ['Maths', 0, 0, 0, 0, 0],
  ['Chem', 0, 0, 0, 0, 0],
  ['Phy', 0, 0, 0, 0, 0],
  ['DP', 0, 0, 0, 0, 0],
];

const LineChart = () => {
  return (
    <div className="flex justify-center items-center  bg-gray-200">
      <div className="bg-white rounded">
        <Chart
          width={'340px'}
          height={'350px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={chartData}
          options={{
            // title: 'Students\' Attendance in Classes',
            curveType: 'function',
            legend: { position: 'bottom' },
            pointSize: 4, // Set the size of notable dots
            series: {
              0: { color: '#2196F3' }, // Set line color to blue
            },
            areaOpacity: 0.1, // Set transparency for the gradient area
            // hAxis: {
            //   title: 'Classes',
            // },
            // vAxis: {
            //   title: 'Attendance Percentage',
            // },
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    </div>
  );
};

export default LineChart;
