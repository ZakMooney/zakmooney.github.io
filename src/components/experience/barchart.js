import React, { useRef, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { SkillYears } from '../../data/jobdetails';

import {
  useStoredTheme,
} from "../../app/store";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const { storedTheme } = useStoredTheme();
  const chartRef = useRef(null);

  let fontColour = 'rgba(255,255,255,0.6)';
  if (storedTheme === 'light') {
    fontColour = 'rgba(8, 9, 13, 0.6';
  }
  
  const options = {
    maintainAspectRatio: false,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {  
        border: {
          display: false,
        },
        grid: {
          drawBorder: false,
          color: "rgba(255,255,255,0.1)",
          borderColor: "rgba(255,255,255,0.1)",
        },  
        ticks: {
          color: fontColour, 
          font: {
            size: 12, 
          },
          stepSize: 1,
          beginAtZero: true
        }
      },
      x: { 
        border: {
          display: false,
        },
        grid: {
          display: false,
          color: "rgba(255,255,255,0.1)",
          borderColor: "rgba(255,255,255,0.1)",
        },  
        ticks: {
          color: fontColour, 
          font: {
            size: 12,
          },
          stepSize: 1,
          beginAtZero: true
        }
      },
    }
  };

  const labels = [
    'ReactJS',
    'Javascript',
    'HTML',
    'SCSS',
    'Web3',
    'React Native',
  ];

  const useData = SkillYears || [];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Years of Experience',
        data: useData,
        backgroundColor: [
          'rgba(44, 226, 230, 0.8)',
          'rgba(246, 0, 157, 0.8)',
          'rgba(173, 29, 235, 0.8)',
          'rgba(255, 108, 17, 0.8)',
          'rgba(0, 231, 137, 0.8)',
          'rgba(253, 224, 71, 0.8)',
        ],
        borderColor: [
          'rgba(44, 226, 230, 1)',
          'rgba(246, 0, 157, 1)',
          'rgba(173, 29, 235, 1)',
          'rgba(255, 108, 17, 1)',
          'rgba(0, 231, 137, 1)',
          'rgba(254, 240, 138, 0.8)',
        ],
        borderRadius: 4,
        // backgroundColor: (context) => {
        //   const ctx = context.chart.ctx;
        //   const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        //   gradient.addColorStop(0, "rgba(246, 0, 157, 1)");
        //   gradient.addColorStop(1, "rgba(246, 0, 157, 1)");
        //   return gradient;
        // },
      },
    ],
  };

  return (
    <div className="chart-wrap">
      <Bar ref={chartRef} options={options} data={data} />
      <div className="chart-glow">
        <Bar ref={chartRef} options={options} data={data} />
      </div>
    </div>
  );
}

export default BarChart;