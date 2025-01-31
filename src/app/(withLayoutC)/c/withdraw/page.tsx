"use client";

import { CalendarIcon } from "@/utils/Icons";
import { DatePicker, Table } from "antd";
import Link from "next/link";
import { useState } from "react";
import Card from "../../../../components/Card/Card";
import "./PaymentTable.css";

const cardTitles = [
  "Total Security Deposit",
  "Total Deposit Amount",
  "Total Return Amount",
  "Total Sending Return",
  "Total Ineligible Return",
  "Total Sending Return Amount",
];

const statusColors = {
  INELIGIBLE: "bg-[#FC450E]",
  PENDING: "bg-[#FFB200]",
  SENDING: "bg-[#0059FF]",
};

const WithdrawData = [
  {
    sl: 1,
    refundId: "R0001",
    agencyName: "Tarzan",
    account: "SBI Bank",
    refundAmount: "110 usd",
    refundDay: "UTC-03-02-25, 02:05 PM",
    status: "INELIGIBLE",
  },
  {
    sl: 2,
    refundId: "R0001",
    agencyName: "Tarzan",
    account: "SBI Bank",
    refundAmount: "110 usd",
    refundDay: "UTC-03-02-25, 02:05 PM",
    status: "PENDING",
  },
  {
    sl: 3,
    refundId: "R0001",
    agencyName: "Tarzan",
    account: "BSD Bank",
    refundAmount: "120 usd",
    refundDay: "UTC-03-02-25, 02:05 PM",
    status: "PENDING",
  },
  {
    sl: 4,
    refundId: "R0001",
    agencyName: "Tarzan",
    account: "US Bank",
    refundAmount: "140 usd",
    refundDay: "UTC-03-02-25, 02:05 PM",
    status: "INELIGIBLE",
  },
  {
    sl: 5,
    refundId: "R0001",
    agencyName: "Tarzan",
    account: "UK Bank",
    refundAmount: "140 usd",
    refundDay: "UTC-03-02-25, 02:05 PM",
    status: "SENDING",
  },
];

const OnlinePaymentChecking = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentPaymentId, setCurrentPaymentId] = useState(null);

  const columns = [
    {
      title: "No.",
      dataIndex: "sl",
      render: (no) => (
        <span className="inline-block w-6 h-6 leading-6 text-center font-bold rounded text-black bg-[#FFB200]">
          {no}
        </span>
      ),
    },
    {
      title: "Return ID",
      dataIndex: "refundId",
      className: "font-normal",
    },
    {
      title: "Agency Name",
      dataIndex: "agencyName",
      className: "font-normal",
    },
    {
      title: "Account",
      dataIndex: "account",
      className: "font-normal",
    },
    {
      title: "Amount",
      dataIndex: "refundAmount",
      className: "font-normal",
    },
    {
      title: "Day",
      dataIndex: "refundDay",
      className: "font-normal",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <span
          className={`px-3 py-1 rounded text-white ${statusColors[status]}`}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Action",
      render: (record) => (
        <Link
          className="rounded-md bg-[#FFB200] px-3 py-1 text-[14px] text-black transition-all hover:bg-black hover:text-white hover:shadow-md dark:bg-boxdark dark:text-white dark:border dark:border-white font-inter"
          href={`/c/withdraw/view/payment`}
        >
          View
        </Link>
      ),
    },
  ];

  const onStartDate = (value: string) => {
    console.log(value);
  };
  const onEndDate = (value: any) => {
    console.log(value);
  };

  return (
    <div className="w-full p-4 md:p-6 2xl:p-10 bg-[#D0C2FF]">
      <div className="rounded-xl py-5 px-6">
        <div className="grid md:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-3 mb-3">
          {cardTitles.map((title, i) => (
            <Card title={title} key={i} />
          ))}
        </div>
      </div>
      <div className="w-full flex items-center justify-between gap-3 py-4">
        <div className="invisible" />
        <div className="flex items-center justify-end gap-5 ">
          <select
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
            defaultValue=""
            className="rounded-lg px-2 py-2 bg-white text-black dark:text-white font-inter dark:bg-boxdark"
          >
            <option value="" disabled selected>
              Currency
            </option>
            <option value="all">All</option>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
          </select>
          <DatePicker
            onChange={onStartDate}
            className="py-2 bg-white w-35 placeholder:text-black dark:text-white font-inter dark:bg-boxdark"
            placeholder="MM/DD/YYYY"
            suffixIcon={<CalendarIcon />}
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          />
          <span className="text-black-4">To</span>
          <DatePicker
            onChange={onEndDate}
            className="py-2 bg-white w-35 placeholder:text-black dark:text-white font-inter dark:bg-boxdark"
            placeholder="MM/DD/YYYY"
            suffixIcon={<CalendarIcon />}
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          />
          {/* <CustomSelect options={statusOptions} placeholder="Status" /> */}
          <select
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
            defaultValue=""
            className="rounded-lg px-2 py-2 bg-white text-black dark:text-white font-inter dark:bg-boxdark"
          >
            <option value="" disabled selected>
              Status
            </option>
            <option value="all">All</option>
            <option value="inactive">InActive</option>
            <option value="active">Active</option>
            <option value="dormant">Dormant</option>
            <option value="dissolved">Dissolved</option>
          </select>
        </div>
      </div>
      <Table
        dataSource={WithdrawData}
        columns={columns}
        pagination={{
          total: 97,
          pageSize: 5,
          current: 1,
          showSizeChanger: false,
        }}
        className="payment-table"
      />
      <div className="text-center mt-4">
        <p className="text-md mb-2 text-black font-bold ">
          Showing 1 To 5 of 97 Results
        </p>
        <button className="px-4 py-2 border bg-[#FFB200] rounded-full text-black hover:bg-black hover:text-white transition-colors dark:text-white font-inter dark:bg-boxdark">
          More Results
        </button>
      </div>
    </div>
  );
};

export default OnlinePaymentChecking;
