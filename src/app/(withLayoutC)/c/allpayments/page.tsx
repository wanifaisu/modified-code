"use client";
import { useState } from "react";
import Card from "../../../../components/Card/Card";

import Loader from "@/components/common/Loader";
import { PaymentsData } from "@/constants/paymentData";

import { Poppins } from "next/font/google";
import ActionBar from "./_components/ActionBar";
import PaymentTable from "./_components/PaymentTable";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

interface DashboardData {
  totalpayment: number;
  totalspamordersamount: number;
  totalpendingpayment: number;
  totalacceptedpayment: number;
  totalspampayment: number;
  totalpayamount: number;
  totalspampayamount: number;
  userpayments: Array<any>;
}

const statusColors: { [key: string]: string } = {
  Pending: "bg-[#FFB200]",
  Spam: "bg-[#DE1D1D]",
  Accepted: "bg-[#00EE0A]",
};

const ALLPayments = () => {
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [currentPayment, setCurrentPayment] = useState<any>(null);

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const cardData = [
    { title: "Total payment", value: data?.totalpayment || 0 },
    { title: "Total Pending Payment", value: data?.totalpendingpayment || 0 },
    { title: "Total Accepted Payment", value: data?.totalacceptedpayment || 0 },
    { title: "Total Spam Payment", value: data?.totalspampayment || 0 },
    { title: "Total Pay Amount", value: data?.totalpayamount || 0 },
    { title: "Total spam pay amount", value: data?.totalspampayamount || 0 },
  ];

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
      {/* <Breadcrumb pageName="All Payments" /> */}
      {loading ? (
        // Show the loading image or spinner
        <Loader />
      ) : (
        <>
          <div className="rounded-xl py-5 px-3">
            <div className="grid md:grid-cols-5 grid-cols-1 h-fit gap-3 mb-3">
              {cardData.map((card, i) => (
                <Card key={i} title={card.title} value={card.value} />
              ))}
            </div>
          </div>
          <div className="w-full flex items-center justify-end gap-3 py-4">
            <ActionBar />
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <div className="rounded-t-lg overflow-hidden">
            <PaymentTable PaymentsData={PaymentsData} />
          </div>

          <div className="flex flex-row justify-center w-full mt-6">
            <div className="flex flex-col justify-between items-center w-[221px] h-[70px] bg-transparent">
              <span className="text-black font-bold">
                Showing 1 to 5 of 50 Results
              </span>
              <div className="w-30 h-9 border-[0.89px] border-[#fff] bg-[#FFB200] rounded-[10px] flex flex-row justify-center items-center  dark:bg-boxdark">
                <span className="text-[#231F20] font-inter font-semibold text-[13px] leading-[16px] dark:text-white font-inter">
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

export default ALLPayments;
