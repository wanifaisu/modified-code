"use client";

import { agencies } from "@/constants/agency";
import { useState } from "react";

import Loader from "@/components/common/Loader";
import { DashboardData } from "@/constants/dashboardData";

import { Poppins } from "next/font/google";
import AgencyCard from "./_components/AgencyCard";
import AgencyTable from "./_components/AgencyTable";
import Date from "./_components/Date";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const AllUsers = () => {
  const [dashboardData, setDashboardData] = useState<any>(DashboardData);
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
        { title: "Total Agents", value: dashboardData.totalusers },
        {
          title: "Total InActive User",
          value: dashboardData.totalSuspendUsers,
        },
        { title: "Total Active User", value: dashboardData.totalactiveusers },
        {
          title: "Total Disolved Agents",
          value: dashboardData.totalblockusers,
        },
        {
          title: "Total Dormant Agents",
          value: dashboardData.totalPendingDelete,
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

  return (
    <div className="w-full p-4 md:p-6 2xl:p-10">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="rounded-xl py-5 px-6">
            <AgencyCard cardData={cardData} />
          </div>
          <Date />

          <div className="rounded-t-lg overflow-hidden">
            <AgencyTable agencies={agencies} poppins={poppins} />
          </div>

          {error && <p className="text-red-600">Error: {error}</p>}
          <div className="flex flex-col w-full items-center justify-center my-7 gap-5">
            <p className="font-inter font-semibold text-base leading-[19.36px] text-black-4">
              Showing 1 to 5 of 97 results
            </p>
            <div className="rounded-[10px] border-[0.89px] border-white bg-[#FFB200] text-[#231F20] font-inter font-semibold text-[13px] leading-[15.73px] py-2 px-4">
              More Results
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AllUsers;
