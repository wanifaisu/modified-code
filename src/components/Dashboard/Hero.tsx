"use client";
import {
  ArcElement,
  Chart,
  DoughnutController,
  Legend,
  registerables,
  Tooltip,
} from "chart.js";
import React, { useEffect, useState } from "react";
Chart.register(...registerables);

import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["600"],
  subsets: ["latin"],
});

// Registering necessary components for doughnut chart
Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

import { DashboardData } from "@/constants/dashboardData";
import CardDataStats from "../CardDataStats";

import axios from "axios";
import LineChart from "../ui/CustomLineChart";

const ECommerce: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  useEffect(() => {
    let trafficByDeviceChart: Chart | null = null;
    let trafficByLocationChart: any | null = null;
    let marketingSeoChart: Chart | null = null;

    const ctx1 = document.getElementById(
      "trafficByDevice"
    ) as HTMLCanvasElement;

    if (ctx1 && !trafficByDeviceChart) {
      trafficByDeviceChart = new Chart(ctx1, {
        type: "bar",
        data: {
          labels: ["Linux", "Mac", "iOS", "Window", "Android", "Other"],
          datasets: [
            {
              label: "Traffic",
              data: [15000, 25000, 18000, 30000, 10000, 22000],
              backgroundColor: [
                "rgb(156, 163, 255)", // Linux - Purple
                "rgb(167, 243, 208)", // Mac - Light Green
                "rgb(198, 176, 255)", // iOS - Light Purple
                "rgb(147, 197, 253)", // Windows - Light Blue
                "rgb(209, 213, 219)", // Android - Gray
                "rgb(134, 239, 172)", // Other - Green
              ],
              borderRadius: 8,
              barThickness: 25,
              maxBarThickness: 30,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: true,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 30000,
              ticks: {
                stepSize: 10000,
                callback: function (value) {
                  return value === 0 ? "0" : value / 1000 + "K";
                },
                padding: 10,
                font: {
                  family: "Inter",
                  size: 12,
                },
              },
              grid: {
                display: false,
              },
              border: {
                display: false,
              },
            },
            x: {
              grid: {
                display: false,
              },
              border: {
                display: false,
              },
              ticks: {
                autoSkip: false,
                maxRotation: 0,
                minRotation: 0,
                padding: 10,
                font: {
                  family: "Inter",
                  size: 12,
                },
                color: "#6B7280", // Gray color for labels
              },
            },
          },
          layout: {
            padding: {
              top: 20,
              bottom: 20,
              left: 10,
              right: 10,
            },
          },
          maintainAspectRatio: false,
          barPercentage: 0.7,
          categoryPercentage: 0.9,
        },
      });
    }

    const ctx2 = document.getElementById(
      "trafficByLocation"
    ) as HTMLCanvasElement;
    if (ctx2 && !trafficByLocationChart) {
      trafficByLocationChart = new Chart(ctx2, {
        type: "doughnut",
        data: {
          labels: ["United States", "Canada", "Mexico", "Other"],
          datasets: [
            {
              label: "Location",
              data: [38.6, 22.5, 30.8, 8.1],
              backgroundColor: [
                "rgb(198, 176, 255)", // Light purple for US
                "rgb(147, 197, 253)", // Light blue for Canada
                "rgb(167, 243, 208)", // Light green for Mexico
                "rgb(209, 213, 219)", // Light gray for Other
              ],
              borderWidth: 0,
              spacing: 2,
            },
          ],
        },
        options: {
          responsive: true,
          cutout: "70%",
          plugins: {
            legend: {
              display: true,
              position: "right" as const,
              align: "center" as const,
              labels: {
                usePointStyle: true,
                pointStyle: "circle",
                padding: 15,
                font: {
                  family: "Inter",
                  size: 12,
                },
                generateLabels: function (chart) {
                  const data = chart.data;
                  if (data.labels?.length && data.datasets.length) {
                    return data.labels.map((label, i) => {
                      const value = data.datasets[0].data[i];
                      return {
                        text: `${label}     ${value}%`,
                        fillStyle: data.datasets[0].backgroundColor?.[i],
                        hidden: false,
                        lineCap: undefined,
                        lineDash: undefined,
                        lineDashOffset: undefined,
                        lineJoin: undefined,
                        lineWidth: 0,
                        strokeStyle: undefined,
                        pointStyle: "circle",
                        index: i,
                      };
                    });
                  }
                  return [];
                },
              },
            },
            tooltip: {
              enabled: true,
              callbacks: {
                label: function (context) {
                  return ` ${context.label}: ${context.raw}%`;
                },
              },
            },
          },
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 30,
              top: 10,
              bottom: 10,
            },
          },
        },
      });
    }

    const ctx3 = document.getElementById("marketingSeo") as HTMLCanvasElement;
    if (ctx3 && !marketingSeoChart) {
      marketingSeoChart = new Chart(ctx3, {
        type: "bar",
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Marketing & SEO",
              data: [
                12000, 25000, 17000, 28000, 8000, 22000, 12000, 25000, 17000,
                30000, 8000, 22000,
              ],
              backgroundColor: [
                "#A5B4FF", // Jan - purple
                "#98FB98", // Feb - light green
                "#B0A7E3", // Mar - light purple
                "#87CEEB", // Apr - light blue
                "#B0C4DE", // May - light grey-blue
                "#98FB98", // Jun - light green
                "#A5B4FF", // Jul - purple
                "#98FB98", // Aug - light green
                "#B0A7E3", // Sep - light purple
                "#87CEEB", // Oct - light blue
                "#B0C4DE", // Nov - light grey-blue
                "#98FB98", // Dec - light green
              ],
              borderRadius: 8,
              borderSkipped: false,
              barThickness: 24,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 30000,
              ticks: {
                stepSize: 10000,
                callback: function (value) {
                  return value / 1000 + "K";
                },
                font: {
                  size: 12,
                },
              },
              grid: {
                display: false,
              },
              border: {
                display: false,
              },
            },
            x: {
              grid: {
                display: false,
              },
              border: {
                display: false,
              },
              ticks: {
                font: {
                  size: 12,
                },
              },
            },
          },
        },
      });
    }

    return () => {
      if (trafficByDeviceChart) trafficByDeviceChart.destroy();
      if (trafficByLocationChart) trafficByLocationChart.destroy();
      if (marketingSeoChart) marketingSeoChart.destroy();
    };
  }, []);

  // Message Type
  interface Message {
    name: string;
    avatar: string;
    text: string;
    time: string;
  }

  // Order Type
  interface Order {
    name: string;
    avatar: string;
    task: string;
    time: string;
  }

  // Payment Type
  interface Payment {
    name: string;
    avatar: string;
    bank: string;
    balance: string;
    time: string;
  }

  // Withdraw Type
  interface Withdraw {
    name: string;
    avatar: string;
    bank: string;
    balance: string;
    time: string;
  }

  useEffect(() => {
    const fetchAllUsers = async () => {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await axios.get(
          "http://localhost:5001/api/admin/user/dashboard",
          config
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllUsers();
  }, []);

  // Sample Data
  const messages: Message[] = [
    {
      name: "Mr Jack",
      avatar: "/images/profile/Abstract04.png",
      text: "Tarzn",
      time: "2 Hours ago",
    },
    {
      name: "Ms Paris",
      avatar: "/images/profile/IconSet (1).png",
      text: "Tarzn",
      time: "14 Hours ago",
    },
    {
      name: "Mr Jams",
      avatar: "/images/profile/IconSet (2).png",
      text: "Tarzn",
      time: "3 hours ago",
    },
  ];

  const orders: Order[] = [
    {
      name: "Mr Jack",
      avatar: "/images/profile/Abstract04.png",
      task: "web dev",
      time: "1 Hour ago",
    },
    {
      name: "Ms Paris",
      avatar: "/images/profile/IconSet (1).png",
      task: "app dev",
      time: "59 minutes ago",
    },
    {
      name: "Ms Jams",
      avatar: "/images/profile/IconSet (1).png",
      task: "app dev",
      time: "59 minutes ago",
    },
  ];

  const payments: Payment[] = [
    {
      name: "Mr Jack",
      avatar: "/images/profile/Abstract04.png",
      bank: "sbi Bank",
      balance: "55 USD",
      time: "1 Hour ago",
    },
    {
      name: "Ms Paris",
      avatar: "/images/profile/IconSet (1).png",
      bank: "tas Bank",
      balance: "45 EUR",
      time: "59 minutes ago",
    },
    {
      name: "Ms Paris",
      avatar: "/images/profile/IconSet (1).png",
      bank: "tas Bank",
      balance: "45 EUR",
      time: "59 minutes ago",
    },
  ];

  const withdrawals: Withdraw[] = [
    {
      name: "Mr Jack",
      avatar: "/images/profile/Abstract04.png",
      bank: "sbi Bank",
      balance: "55 USD",
      time: "1 Hour ago",
    },
    {
      name: "Ms Paris",
      avatar: "/images/profile/IconSet (1).png",
      bank: "tas Bank",
      balance: "45 EUR",
      time: "59 minutes ago",
    },
    {
      name: "Ms Paris",
      avatar: "/images/profile/IconSet (1).png",
      bank: "tas Bank",
      balance: "45 EUR",
      time: "59 minutes ago",
    },
  ];

  const handleSeeMore = () => {
    setVisibleCount(DashboardData.length);
  };
  return (
    <div className="flex">
      <div className="flex-1 w-full">
        <div>
          {/* Cards Layout */}
          <div className="px-2 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-4 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4 2xl:gap-4">
            {DashboardData.slice(0, visibleCount).map((data, index) => (
              <CardDataStats key={index} name={data.name} number={data.number}>
                <data.icon />
              </CardDataStats>
            ))}
          </div>

          {/* Line Chart */}
          <div className="col-span-12 xl:col-span-8 px-4 mx-auto mt-8 ">
            <LineChart />
          </div>

          {/* Traffic by Device and Location */}
          <div className="items-center min-h-screen p-6">
            <div className="flex flex-col lg:flex-row justify-between gap-4">
              {/* Traffic by Device */}
              <div className="bg-white rounded-[20px] shadow-lg p-6 w-full lg:w-1/2 mb-8">
                <h2
                  className={`${inter.className} text-black text-base font-semibold mb-4`}
                >
                  Traffic by Device
                </h2>
                <div className="h-[300px]">
                  <canvas id="trafficByDevice"></canvas>
                </div>
              </div>

              {/* Traffic by Location */}
              <div className="bg-white rounded-[20px] shadow-lg p-6 w-full lg:w-1/2 mb-8">
                <h2
                  className={`${inter.className} text-black text-base font-semibold mb-4`}
                >
                  Traffic Location
                </h2>
                <div className="h-[300px]">
                  <canvas id="trafficByLocation"></canvas>
                </div>
              </div>
            </div>

            {/* Marketing & SEO */}
            <div className="bg-[#FFF] rounded-2xl p-6 lg:p-8 w-full max-w-full h-auto lg:h-[500px] shadow-lg mt-8">
              <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
                <h2 className="text-[14px] lg:text-[16px] text-black font-semibold">
                  Marketing & SEO
                </h2>
                <div className="flex items-center gap-2 mt-4 lg:mt-0">
                  <input
                    type="text"
                    placeholder="MM/DD/YYYY"
                    className="border rounded px-2 py-1 text-sm w-24 lg:w-32"
                  />
                  <span className="text-sm">To</span>
                  <input
                    type="text"
                    placeholder="MM/DD/YYYY"
                    className="border rounded px-2 py-1 text-sm w-24 lg:w-32"
                  />
                </div>
              </div>
              <div className="h-[300px] lg:h-[350px]">
                <canvas id="marketingSeo"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* chat column */}
      <div className="mx-auto pl-3">
        <div className="order-section bg-white rounded-2xl shadow-md p-3 w-[300px] max-w-4xl mb-8">
          <div className="flex flex-row justify-between  mb-2">
            <h2 className="header font-medium text-[#000000] text-sm font-inter">
              New Orders
            </h2>
            <h2 className="header font-medium text-[#000000] text-sm font-inter">
              New 2569
            </h2>
          </div>
          <ul className="space-y-4">
            {orders.map((order, index) => (
              <li
                key={index}
                className="flex items-center space-x-3 border-[0.5px] border-[#00000030] rounded-xl px-2 py-2"
              >
                {/* Name and role */}
                <div className="flex-1">
                  <p className="font-inter font-normal text-black">
                    {order.name}
                  </p>
                  <p className="text-sm text-gray-600">{order.task}</p>
                </div>

                <div className="flex-1">
                  <p className="font-inter font-light text-black">
                    {order.name}
                  </p>
                  <p className="text-sm text-gray-500">{order.time}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-row justify-end mt-2">
            <span className="w-[116px] text-center text-[12px] leading-[18px] rounded-md font-normal border border-[#FFB20033] py-2">
              see all orders
            </span>
          </div>
        </div>
        <div className="chat-section whitespace-nowrap bg-white rounded-2xl shadow-md p-3 w-full max-w-4xl mb-8">
          <div className="flex flex-row justify-between  mb-2">
            <h2 className="header font-medium text-[#000000] text-sm font-inter">
              Agency
            </h2>
            <h2 className="header font-medium text-[#000000] text-sm font-inter">
              New 2569
            </h2>
          </div>
          <ul className="space-y-4 ">
            {messages.map((message, index) => (
              <li
                key={index}
                className="flex items-center space-x-3 border-[0.5px] border-[#00000030] rounded-xl px-2 py-2"
              >
                {/* Name and role */}
                <div className="flex-1">
                  <p className="font-inter font-normal text-black">
                    {message.name}
                  </p>
                  <p className="text-sm text-gray-600">{message.text}</p>
                </div>

                <div className="flex-1">
                  <p className="font-inter font-light text-black">
                    {message.name}
                  </p>
                  <p className="text-sm text-gray-500">{message.time}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-row justify-end mt-2">
            <span className="w-[116px] text-center text-[12px] leading-[18px] rounded-md font-normal border border-[#FFB20033] py-2">
              see all messages
            </span>
          </div>
        </div>
        <div className="payment-section bg-white rounded-2xl shadow-md p-3 w-full max-w-4xl mb-8">
          <div className="flex flex-row justify-between  mb-2">
            <h2 className="header font-medium text-[#000000] text-sm font-inter">
              Payments
            </h2>
            <h2 className="header font-medium text-[#000000] text-sm font-inter">
              New 59
            </h2>
          </div>
          {/* <h2 className='header font-bold border-b-2 border-gray-4 mb-2'>
            Payments
          </h2> */}
          <ul className="space-y-4">
            {payments.map((payment, index) => (
              <li
                key={index}
                className="flex items-center space-x-3 border-[0.5px] border-[#00000030] rounded-xl px-2 py-2"
              >
                {/* Name and role */}
                <div className="flex-1">
                  <p className="font-inter font-normal text-black">
                    {payment.name}
                  </p>
                  <p className="text-sm text-gray-600">{payment.bank}</p>
                </div>

                <div className="flex-1">
                  <p className="font-inter font-light text-black">
                    {payment.balance}
                  </p>
                  <p className="text-sm text-gray-500">{payment.time}</p>
                </div>
              </li>
              // <li key={index} className='flex items-center space-x-3'>
              //   {/* Name and role */}
              //   <div className='flex-1'>
              //     <p className='font-semibold text-gray-800'>{payment.name}</p>
              //     <p className='text-sm text-gray-600'>{payment.bank}</p>
              //   </div>
              //   <div className='flex-1'>
              //     <p className='font-semibold text-gray-800'>
              //       {payment.balance}
              //     </p>
              //     <p className='text-sm text-gray-500'>{payment.time}</p>
              //   </div>
              // </li>
            ))}
          </ul>
          <div className="flex flex-row justify-end mt-2">
            <span className="w-[116px] text-center text-[12px] leading-[18px] rounded-md font-normal border border-[#FFB20033] py-2">
              see all payments
            </span>
          </div>
        </div>
        <div className="payment-section bg-white rounded-2xl shadow-md p-3 w-full max-w-4xl mb-8">
          <div className="flex flex-row justify-between  mb-2">
            <h2 className="header font-medium text-[#000000] text-sm font-inter">
              Returns
            </h2>
            <h2 className="header font-medium text-[#000000] text-sm font-inter">
              New 59
            </h2>
          </div>
          {/* <h2 className='header font-bold border-b-2 border-gray-4 mb-2'>
            Payments
          </h2> */}
          <ul className="space-y-4">
            {withdrawals.map((withdraw, index) => (
              <li
                key={index}
                className="flex items-center space-x-3 border-[0.5px] border-[#00000030] rounded-xl px-2 py-2"
              >
                {/* Name and role */}
                <div className="flex-1">
                  <p className="font-inter font-normal text-black">
                    {withdraw.name}
                  </p>
                  <p className="text-sm text-gray-600">{withdraw.bank}</p>
                </div>

                <div className="flex-1">
                  <p className="font-inter font-light text-black">
                    {withdraw.balance}
                  </p>
                  <p className="text-sm text-gray-500">{withdraw.time}</p>
                </div>
              </li>
              // <li key={index} className='flex items-center space-x-3'>
              //   {/* Name and role */}
              //   <div className='flex-1'>
              //     <p className='font-semibold text-gray-800'>{payment.name}</p>
              //     <p className='text-sm text-gray-600'>{payment.bank}</p>
              //   </div>
              //   <div className='flex-1'>
              //     <p className='font-semibold text-gray-800'>
              //       {payment.balance}
              //     </p>
              //     <p className='text-sm text-gray-500'>{payment.time}</p>
              //   </div>
              // </li>
            ))}
          </ul>
          <div className="flex flex-row justify-end mt-2">
            <span className="w-[116px] text-center text-[12px] leading-[18px] rounded-md font-normal border border-[#FFB20033] py-2">
              see all payments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECommerce;
