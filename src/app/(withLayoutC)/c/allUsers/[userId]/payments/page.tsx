"use client";

import Card from "@/components/Card/Card";
import Loader from "@/components/common/Loader";
import {
  PaymentsData as payments,
  PaymentsData,
} from "@/constants/paymentData";
import { Poppins } from "next/font/google";
import { useState } from "react";
import PaymentTable from "./_components/PaymentTable";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

function Page() {
  const [paymentsData, setPaymentsData] = useState<any>(payments);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>("");
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  const cardData = paymentsData
    ? [
        { title: "Total Payments", value: paymentsData.totalPayments },
        { title: "Total Pay Amount", value: paymentsData.totalPayAmount },
        {
          title: "Total Pending Payment",
          value: paymentsData.totalPendingPayment,
        },
        {
          title: "Total Accepted Payment",
          value: paymentsData.totalAcceptedPayment,
        },
        {
          title: "Total Spam Payment",
          value: paymentsData.totalSpamPayment,
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

  const onStartDate = (value: string) => {
    console.log(value);
  };
  const onEndDate = (value: any) => {
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
          <div className="rounded-xl py-5 px-6">
            <div className="grid md:grid-cols-5 grid-cols-1 h-24 gap-5 mb-3">
              {cardData.map((card, i) => (
                <Card key={i} title={card.title} value={card.value} />
              ))}
            </div>
          </div>
          <div className="rounded-t-lg overflow-hidden">
            <PaymentTable PaymentsData={PaymentsData} />
          </div>

          <div className="flex flex-row justify-center w-full mt-6">
            <div className="flex flex-col justify-between items-center w-[221px] h-[70px] bg-transparent">
              <span className="text-black font-bold">
                Showing 1 to 5 of 50 Results
              </span>
              <div className="w-30 h-9 border-[0.89px] border-black bg-[#FFB200] rounded-[10px] flex flex-row justify-center items-center">
                <span className="text-[#231F20] font-inter font-semibold text-[13px] leading-[16px]">
                  More Results
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Page;
