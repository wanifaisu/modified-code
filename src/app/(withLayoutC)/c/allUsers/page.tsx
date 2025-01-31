"use client";

import React, { useState } from "react";
import Card from "../../../../components/Card/Card";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

import Loader from "@/components/common/Loader";
import { users } from "@/constants/userData";
import ActionBar from "./_components/ActionBar";
import UsersTable from "./_components/UsersTable";

const AllUsers: React.FC = () => {
  const [dashboardData, setDashboardData] = useState<any>(users);
  const [isModalOpen, setModalOpen] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const statusColors: { [key: string]: string } = {
    Block: "bg-[#921313]",
    Active: "bg-[#00850D]",
    Suspend: "bg-[#00C0CC]",
  };

  const cardData = dashboardData
    ? [
        { title: "Total User", value: dashboardData.totalusers },
        { title: "Total Active User", value: dashboardData.totalactiveusers },
        { title: "Total Suspend User", value: dashboardData.totalSuspendUsers },
        { title: "Total Block User", value: dashboardData.totalblockusers },
        {
          title: "Total Pending Delete Account",
          value: dashboardData.totalPendingDelete,
        },
        {
          title: "Total Complete Deleted Account",
          value: dashboardData.totalCompleteDeleted,
        },
      ]
    : [];

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const onSearch = (value: string) => {
    console.log(value);
  };

  return (
    <div className="w-full p-4 md:p-6 2xl:p-10">
      {/* <Breadcrumb pageName="All Users"/> */}
      {loading ? (
        // Show the loading image or spinner
        <Loader />
      ) : (
        <>
          <div className="rounded-xl pt-1 pb-[4%]">
            <div className="grid md:grid-cols-5 grid-cols-1 h-24 gap-5 mb-3">
              {cardData.map((card, i) => (
                <Card key={i} title={card.title} value={card.value} />
              ))}
            </div>
          </div>
          <div className="w-full flex items-center justify-between gap-3 py-4">
            <div className="flex"></div>
            {/* <CustomSearch onSearch={onSearch} /> */}
            <ActionBar />
          </div>
          <UsersTable users={users} />

          <div className="flex flex-row justify-center w-full mt-6">
            <div className="flex flex-col justify-between items-center w-[221px] h-[70px] bg-transparent">
              <span className="text-black font-bold">
                Showing 1 to 5 of 50 Results
              </span>
              <div className="w-30 h-9  border bg-[#FFB200] rounded-[10px] flex flex-row justify-center items-center dark:bg-boxdark  ">
                <span className="text-[#231F20] font-inter font-semibold text-[13px] leading-[16px] font-inter dark:text-white">
                  More Results
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AllUsers;
