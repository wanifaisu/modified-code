"use client";

import { DatePicker } from "antd";

import { CalendarIcon } from "@/utils/Icons";

import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const projectStatusOption = [
  {
    value: "All",
    label: "All",
  },
  {
    value: "Pending",
    label: "Pending",
  },
  {
    value: "Payment",
    label: "Payment",
  },
  {
    value: "Waiting",
    label: "Waiting",
  },
  {
    value: "Working",
    label: "Working",
  },
  {
    value: "Completed",
    label: "Completed",
  },
  {
    value: "Delivery",
    label: "Delivery",
  },
  {
    value: "Cancel",
    label: "Cancel",
  },
];
const statusValues = [
  {
    value: "All",
    label: "All",
  },
  {
    value: "normal",
    label: "normal",
  },
  {
    value: "medium",
    label: "medium",
  },
  {
    value: "emergency",
    label: "emergency",
  },
];

const projectName = [
  {
    value: "All",
    label: "All",
  },
  {
    value: "web dev",
    label: "web dev",
  },
  {
    value: "app dev",
    label: "app dev",
  },
];

const ActionBar = ({ type, setType, service }: any) => {
  return (
    <div className="flex items-center justify-end gap-5 ">
      <div className="ml-4 dark:text-white font-inter">
        <select
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          defaultValue=""
          className="rounded-lg px-2 py-2 bg-white text-black dark:bg-boxdark dark:text-white font-inter"
        >
          <option value="" disabled selected>
            Currency
          </option>
          <option value="All">All</option>
          <option value="USA">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
      <select
        defaultValue=""
        value={type}
        onChange={(e) => setType(e.target.value)}
        style={{ boxShadow: "0px 4px 4px #00000040" }}
        className="rounded-lg px-2 py-2 bg-white text-black dark:bg-boxdark dark:text-white font-inter"
      >
        <option value="" disabled selected>
          Type
        </option>
        {statusValues.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <DatePicker
        className="py-2 bg-white w-35 placeholder:text-black dark:bg-boxdark dark:text-white font-inter"
        placeholder="MM/DD/YYYY"
        suffixIcon={<CalendarIcon />}
        style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
      />
      <span className="text-black-4">To</span>
      <DatePicker
        className="py-2 bg-white w-35 placeholder:text-black dark:bg-boxdark dark:text-white font-inter"
        placeholder="MM/DD/YYYY"
        suffixIcon={<CalendarIcon />}
        style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
      />
      {/* <CustomSelect options={statusOptions} placeholder="Status" /> */}
      <select
        style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
        defaultValue=""
        value={service}
        onChange={(e) => setService(e.target.value)}
        className="rounded-lg px-2 py-2 bg-white text-black dark:bg-boxdark dark:text-white font-inter"
      >
        <option value="" disabled selected>
          Service
        </option>
        {projectName.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <select
        style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
        defaultValue=""
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="rounded-lg  px-2 py-2 bg-white text-black dark:bg-boxdark dark:text-white font-inter"
      >
        <option value="" disabled selected>
          Status
        </option>
        {projectStatusOption.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ActionBar;
