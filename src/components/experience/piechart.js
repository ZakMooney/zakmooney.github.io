import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { RoleYears } from '../../data/jobdetails';

import {
  useStoredTheme,
} from "../../app/store";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const { storedTheme } = useStoredTheme();

  let fontColour = 'rgba(255,255,255,0.6)';
  if (storedTheme === 'light') {
    fontColour = 'rgba(8, 9, 13, 0.6';
  }

  const options = {
    responsive: true,
    cutout: 60,
    plugins: {
      legend: {
        onClick: null,
        display: true,
        position: 'bottom',
        labels: {
          color: fontColour
        }
      },
      title: {
        display: false,
      },
    },
  };

  const labels = ['Web3 DApp', 'Frontend Dev', 'Mobile Apps'];
  const useData = RoleYears || [];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Years in Role',
        data: useData,
        backgroundColor: [
          'rgba(246, 0, 157, 0.8)',
          'rgba(173, 29, 235, 0.8)',
          'rgba(44, 226, 230, 0.8)',
          'rgba(255, 108, 17, 0.8)',
          'rgba(0, 231, 137, 0.8)',
        ],
        borderColor: [
          'rgba(246, 0, 157, 1)',
          'rgba(173, 29, 235, 1)',
          'rgba(44, 226, 230, 1)',
          'rgba(255, 108, 17, 1)',
          'rgba(0, 231, 137, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }
  return (
    <div className="chart-wrap">
      <Doughnut options={options} data={data} />
      <div className="chart-glow">
        <Doughnut options={options} data={data} />
      </div>
    </div>
  );
};

export default PieChart;