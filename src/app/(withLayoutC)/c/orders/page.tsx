"use client";
import React, { useState } from "react";

import { Input } from "antd";
import Card from "../../../../components/Card/Card";

import Loader from "@/components/common/Loader";

import { agencies } from "@/constants/agency";

import { Poppins } from "next/font/google";
import ActionBar from "./_components/ActionBar";
import OrdersTable from "./_components/OrdersTable";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface OrderModalProps {
  isVisible: boolean;
  onClose: () => void;
  paymentId: string;
}

const Chats = [
  {
    role: "sender",
    message: "Hello",
  },
  {
    role: "you",
    message: "Hi",
  },
  {
    role: "sender",
    message: "How are you?",
  },
  {
    role: "you",
    message: "Good",
  },
  {
    role: "sender",
    message: "Okey",
  },
];

const { Search } = Input;

const AllOrders: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [currentOrderId, setCurrentOrderId] = useState<string | null>(null);
  const [currentOrder, setCurrentOrder] = useState<any>(null);
  const [currency, setCurrency] = useState("");
  const [type, setType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [service, setService] = useState("");
  const [status, setStatus] = useState("");
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  // Handle view button click based on status

  const statusColors: { [key: string]: string } = {
    Pending: "bg-[#FFB200]",
    Payment: "bg-[#896024]",
    Waiting: "bg-[#FF3D00]",
    Working: "bg-[#4402FF]",
    Complete: "bg-[#00EE0A]",
    Delivery: "bg-[#001A72]",
    Cancel: "bg-[#DE1D1D]",
  };

  const onPaginationChange = (page: number, pageSize: number) => {
    // console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  // Start Order data
  const [dashboardData, setDashboardData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const cardData = dashboardData
    ? [
        { title: "Total Orders", value: dashboardData.totalorders },
        {
          title: "Total Pending Orders",
          value: dashboardData.totalpendingorders,
        },
        {
          title: "Total Payment Orders",
          value: dashboardData.totalpaymentorders,
        },
        {
          title: "Total Waiting Orders",
          value: dashboardData.totalwaitingorders,
        },
        {
          title: "Total Working Orders",
          value: dashboardData.totalworkingorders,
        },
        {
          title: "Total Complete Orders",
          value: dashboardData.totalcompleteorders,
        },
        {
          title: "Total Delivery Orders",
          value: dashboardData.totaldeliveryorders,
        },
        {
          title: "Total Cancel Orders",
          value: dashboardData.totalcancelorders,
        },
        {
          title: "Total project amount",
          value: dashboardData.totalprojectamount,
        },
        { title: "Total paid amount", value: dashboardData.totalpaidamount },
        { title: "Total  Left Amount", value: dashboardData.totalleftamount },
      ]
    : [];

  const onSearch = (value: any) => {
    console.log(value);
  };
  const onStartDate = (value: any) => {
    setStartDate(value);
    console.log(value);
  };
  const onEndDate = (value: any) => {
    setEndDate(value);
    console.log(value);
  };
  const props = {
    className: "bg-blue-500 w-full",
    placeholder: "Search Blogs",
    loading: false,
    onSearch: onSearch,
    enterButton: true,
  };
  return (
    <div className="z-0 w-full p-4 md:p-6 2xl:p-10 ">
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* <Breadcrumb pageName="All Orders" /> */}
          <div className="rounded-xl py-5 px-6">
            <div className="grid md:grid-cols-5 grid-cols-1 h-24 gap-5 mb-3">
              {cardData.map((card, i) => (
                <Card key={i} title={card.title} value={card.value} />
              ))}
            </div>
          </div>
          <div className="w-full flex items-center justify-end gap-3 py-4">
            <ActionBar setType={setType} type={type} service={service} />
          </div>
          <div className="rounded-t-lg overflow-hidden">
            <OrdersTable agencies={agencies} />
            <div className="flex flex-col w-full items-center justify-center my-7 gap-5">
              <p className="font-inter font-semibold text-base leading-[19.36px] text-black-4">
                Showing 1 to 5 of 97 results
              </p>
              <div className="rounded-[10px] border-[0.89px] border-white bg-[#FFB200] text-[#231F20] font-inter font-semibold text-[13px] leading-[15.73px] py-2 px-4">
                More Results
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AllOrders;
