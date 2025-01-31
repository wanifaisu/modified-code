"use client";

import CreateArchitecture from "@/components/ui/MergedComponents/NewCategoryComponents/CreateArchitecture";
import CreateBlog from "@/components/ui/MergedComponents/NewCategoryComponents/CreateBlog";
import CreateEmployee from "@/components/ui/MergedComponents/NewCategoryComponents/CreateEmployee";
import CreateNotice from "@/components/ui/MergedComponents/NewCategoryComponents/CreateNotice";
import CreateOrder from "@/components/ui/MergedComponents/NewCategoryComponents/CreateOrder";
import CreateService from "@/components/ui/MergedComponents/NewCategoryComponents/CreateService";
import CreateTemplate from "@/components/ui/MergedComponents/NewCategoryComponents/CreateTemplate";
import { useState } from "react";

const NewCategory: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>("tab1");

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };

  return (
    <section className="w-full">
      {/* Topbar */}
      <div className="bg-gray-100 w-full p-4 md:p-6 2xl:p-10 ml-[1rem]">
        <div className="flex flex-wrap items-center justify-start gap-5 max-w-5xl">
          <button
            className={`${
              currentTab === "tab1" ? "bg-[#FFB200]" : "bg-white"
            } rounded-lg shadow-lg border-[#ffb200] px-4 py-2 text-sm text-black font-semibold hover:bg-[#ffb200] dark:text-white font-inter dark:bg-boxdark`}
            onClick={() => handleTabChange("tab1")}
          >
            Create Software
          </button>
          <button
            className={`${
              currentTab === "tab2" ? "bg-[#FFB200]" : "bg-white"
            } rounded-lg shadow-lg border-[#ffb200] px-4 py-2 text-sm text-black font-semibold hover:bg-[#ffb200] dark:text-white font-inter dark:bg-boxdark`}
            onClick={() => handleTabChange("tab2")}
          >
            Create Real Estate
          </button>
          <button
            className={`${
              currentTab === "tab3" ? "bg-[#FFB200]" : "bg-white"
            } rounded-lg shadow-lg border-[#ffb200] px-4 py-2 text-sm text-black font-semibold hover:bg-[#ffb200] dark:text-white font-inter dark:bg-boxdark`}
            onClick={() => handleTabChange("tab3")}
          >
            Create Service
          </button>
          <button
            className={`${
              currentTab === "tab4" ? "bg-[#FFB200]" : "bg-white"
            } rounded-lg shadow-lg border-[#ffb200] px-4 py-2 text-sm text-black font-semibold hover:bg-[#ffb200] dark:text-white font-inter dark:bg-boxdark`}
            onClick={() => handleTabChange("tab4")}
          >
            Create Notice
          </button>
          <button
            className={`${
              currentTab === "tab5" ? "bg-[#FFB200]" : "bg-white"
            } rounded-lg shadow-lg border-[#ffb200] px-4 py-2 text-sm text-black font-semibold hover:bg-[#ffb200] dark:text-white font-inter dark:bg-boxdark`}
            onClick={() => handleTabChange("tab5")}
          >
            Create Order
          </button>
          <button
            className={`${
              currentTab === "tab6" ? "bg-[#FFB200]" : "bg-white"
            } rounded-lg shadow-lg border-[#ffb200] px-4 py-2 text-sm text-black font-semibold hover:bg-[#ffb200] dark:text-white font-inter dark:bg-boxdark`}
            onClick={() => handleTabChange("tab6")}
          >
            Create Employee
          </button>
          <button
            className={`${
              currentTab === "tab7" ? "bg-[#FFB200]" : "bg-white"
            } rounded-lg shadow-lg border-[#ffb200] px-4 py-2 text-sm text-black font-semibold hover:bg-[#ffb200] dark:text-white font-inter dark:bg-boxdark`}
            onClick={() => handleTabChange("tab7")}
          >
            Create Blog
          </button>
        </div>
      </div>
      {/* Main Content */}
      <div className="p-4 md:p-2 2xl:p-10 min-h-screen">
        {currentTab === "tab1" && <CreateTemplate />}
        {currentTab === "tab2" && <CreateArchitecture />}
        {currentTab === "tab3" && <CreateService />}
        {currentTab === "tab4" && <CreateNotice />}
        {currentTab === "tab5" && <CreateOrder />}
        {currentTab === "tab6" && <CreateEmployee />}
        {currentTab === "tab7" && <CreateBlog />}
      </div>
    </section>
  );
};

export default NewCategory;
