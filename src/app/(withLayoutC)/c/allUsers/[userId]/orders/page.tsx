"use client";

import Card from "@/components/Card/Card";
import Loader from "@/components/common/Loader";
import { OrdersData as orders } from "@/constants/orderData";
import { useState } from "react";

import { agencies } from "@/constants/agency";

import OrderTable from "./_components/OrderTable";

import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

function Page() {
  const [ordersData, setOrdersData] = useState<any>(orders);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>("");
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  const cardData = ordersData
    ? [
        { title: "Total Orders", value: ordersData.totalusers },
        { title: "Total Pending Orders", value: ordersData.totalPendingOrders },
        { title: "Total Payment Orders", value: ordersData.paymentOrders },
        { title: "Total Waiting Orders", value: ordersData.totalWaitingOrders },
        {
          title: "Total Pending Delete Account",
          value: ordersData.totalPendingDelete,
        },
        {
          title: "Total Complete Orders",
          value: ordersData.totalCompleteOrders,
        },
        {
          title: "Total Delivered Orders",
          value: ordersData.totalDeliveredOrders,
        },
        {
          title: "Total Cancel Orders",
          value: ordersData.totalCancelOrders,
        },
        {
          title: "Total Projects Amount",
          value: ordersData.totalProjectsAmount,
        },
        {
          title: "Total Paid Amount",
          value: ordersData.totalPaidAmount,
        },
        {
          title: "Total Amount Left",
          value: ordersData.totalAmountLeft,
        },
      ]
    : [];

  return (
    <div className="w-full p-4 md:p-6 2xl:p-10">
      {/* <Breadcrumb pageName="All Users"/> */}
      {loading ? (
        // Show the loading image or spinner
        <Loader />
      ) : (
        <>
          <div className="rounded-xl py-5 px-6">
            <div className="grid md:grid-cols-5 grid-cols-1 h-60 gap-5 mb-3">
              {cardData.map((card, i) => (
                <Card key={i} title={card.title} value={card.value} />
              ))}
            </div>
          </div>
          <div className="rounded-t-lg mt-4 overflow-hidden">
            <OrderTable agencies={agencies} />
            <div className="flex flex-col w-full items-center justify-center my-7 gap-5">
              <p className="font-inter font-semibold text-base leading-[19.36px] text-black-4">
                Showing 1 to 5 of 97 results
              </p>
              <div className="rounded-[10px] border-[0.89px] border-black bg-[#FFB200] text-[#231F20] font-inter font-semibold text-[13px] leading-[15.73px] py-2 px-4">
                More Results
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Page;
