"use client";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export const CustomLineChart: React.FC = () => {
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    const data = {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
      ],
      datasets: [
        {
          label: "Total Users",
          data: [10000, 9000, 8000, 10000, 20000, 18000, 20000, 20000],
          borderColor: "#FFB700",
          backgroundColor: "rgba(255, 183, 0, 0.1)",
          borderWidth: 2,
          type: "line",
          tension: 0.4,
          fill: true,
          order: 1,
        },
        {
          label: "Total Projects",
          data: [8000, 10000, 12000, 11000, 14000, 16000, 18000, 19000],
          borderColor: "#4B9CD3",
          backgroundColor: "rgba(75, 156, 211, 0.1)",
          borderWidth: 2,
          type: "line",
          tension: 0.4,
          fill: true,
          order: 1,
        },
        {
          label: "New Visitors",
          data: [5000, 3000, 18000, 15000, 22000, 20000, 15000, 17000],
          borderColor: "#2ED47A",
          backgroundColor: "rgba(46, 212, 122, 0.1)",
          borderWidth: 2,
          type: "line",
          tension: 0.4,
          fill: true,
          order: 1,
        },
        {
          label: "Old Visitors",
          data: [0, 8000, 15000, 12000, 16000, 19000, 14000, 15000],
          borderColor: "#F7685B",
          backgroundColor: "rgba(247, 104, 91, 0.1)",
          borderWidth: 2,
          type: "line",
          tension: 0.4,
          fill: true,
          order: 1,
        },
        {
          label: "Last Month's Visitors",
          data: [5000, 10000, 18000, 5000, 8000, 22000, 25000, 28000],
          borderColor: "#000000",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          borderWidth: 2,
          type: "line",
          tension: 0.4,
          fill: false,
          order: 1,
          borderDash: [5, 5],
        },
        {
          label: "Average Visitors",
          data: [2000, 5000, 8000, 6000, 10000, 15000, 12000, 14000],
          borderColor: "#885AF8",
          backgroundColor: "rgba(136, 90, 248, 0.1)",
          borderWidth: 2,
          type: "line",
          tension: 0.4,
          fill: true,
          order: 1,
        },
      ],
    };

    const config = {
      type: "line",
      data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "top" as const,
            align: "start" as const,
            labels: {
              usePointStyle: true,
              pointStyle: "circle",
              padding: 20,
              boxWidth: 6,
              boxHeight: 6,
            },
          },
        },
        scales: {
          x: {
            display: true,
            grid: {
              display: false,
            },
            ticks: {
              padding: 10,
            },
          },
          y: {
            beginAtZero: true,
            max: 30000,
            min: 0,
            position: 'left' as const,
            grid: {
              display: false,
            },
            ticks: {
              callback: function(value: any) {
                return (value/1000) + 'K';
              },
              padding: 10,
              stepSize: 10000,
              max: 30000,
              min: 0,
            },
          },
        },
        elements: {
          point: {
            radius: 0,
          },
          line: {
            tension: 0.4,
          },
        },
      },
    };

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById("myChart") as HTMLCanvasElement;
    chartRef.current = new Chart(ctx, config as any);
  }, []);

  return (
    <div className="relative mx-auto h-[400px] w-full bg-[#ffffff] rounded-[20px] shadow-lg">
      <canvas id="myChart"></canvas>
    </div>
  );
};

export default CustomLineChart;

// "use client";
// import React, { useEffect, useRef } from "react";
// import Chart from "chart.js/auto";

// export const CustomLineChart: React.FC = () => {
//   const chartRef = useRef<Chart | null>(null);

//   useEffect(() => {
//     const data = {
//       labels: [
//         "",
//         "Jan 28",
//         "",
//         "Jan 29",
//         "",
//         "",
//         "Jan 30",
//         "",
//         "",
//         "Jan 31",
//         "",
//         "",
//         "Feb 1",
//         "",
//         "",
//       ],
//       datasets: [
//         {
//           label: "New Visitor",
//           data: [18, 12, 6, 9, 12, 3, 9, 14, 20, 8, 15, 10, 5, 14, 20],
//           backgroundColor: "rgba(255, 165, 0, 6)", // Light Orange
//           borderColor: "rgba(255, 165, 0, 3)", // Dark Orange
//           borderWidth: 1,
//           order: 1, // Ensure this dataset is drawn first
//         },
//         {
//           label: "Old Visitor",
//           data: [10, 8, 15, 12, 6, 9, 14, 20, 18, 5, 18, 10, 15, 8, 21],
//           backgroundColor: "rgba(255, 165, 0, 0.5)", // Light Red
//           borderColor: "rgba(255, 166, 0, 160)", // Dark Red
//           borderWidth: 1,
//           order: 1, // Ensure this dataset is drawn first
//         },
//         {
//           label: "Last Month Visitor",
//           data: [20, 25, 18, 14, 19, 16, 20, 15, 10, 10, 18, 12, 10, 24, 26],
//           borderColor: "rgba(0, 0, 255, 1)", // Blue color
//           borderWidth: 2,
//           fill: false,
//           type: "line",
//           order: 2, // Ensure this dataset is drawn last
//         },
//         {
//           label: "Average Visitor",
//           data: [5, 8, 12, 6, 10, 5, 10, 5, 10, 12, 6, 10, 15, 10, 12],
//           borderColor: "green", // Green color
//           borderWidth: 2,
//           fill: false,
//           type: "line",
//           order: 2, // Ensure this dataset is drawn last
//         },
//       ],
//     };

//     const config = {
//       type: "bar",
//       data,
//       options: {
//         scales: {
//           x: {
//             stacked: true,
//           },
//           y: {
//             beginAtZero: false,
//             stacked: true,
//             position: "left", // Align the first y-axis on the left
//           },
//           y1: {
//             beginAtZero: true,
//             position: "right", // Align the second y-axis on the right
//           },
//         },
//       },
//     };

//     if (chartRef.current) {
//       chartRef.current.destroy();
//     }

//     const ctx = document.getElementById("myChart") as HTMLCanvasElement;
//     chartRef.current = new Chart(ctx, config as any);
//   }, []);

//   return (
//     <div>
//       <div
//         style={{ width: "100%", padding: "20px", borderRadius: "20px" }}
//         className=""
//       >
//         <canvas id="myChart"></canvas>
//       </div>
//     </div>
//   );
// };

// export default CustomLineChart;
