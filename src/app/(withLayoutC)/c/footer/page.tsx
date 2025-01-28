"use client";

import CreateGlobalLocations from "@/components/ui/MergedComponents/CreateGlobalLocations";
import OfficeAddress from "@/components/ui/MergedComponents/officeaddres/OfficeAddress";
import CompanyTab from "@/components/ui/temp/CompanyTab";
import ContactUsDropDownTable from "@/components/ui/temp/ContactUsDropDownTable";
import Hiring from "@/components/ui/temp/Hiring";
import SocialSharePayment from "@/components/ui/temp/SocialSharePayment";
import SubsribesManuItems from "@/components/ui/temp/SubsribesManuItems";

import { useState } from "react";

const CompanyTabPage = () => {
  const [currentTab, setCurrentTab] = useState("tab1");

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };

  return (
    <section className="w-full">
      {/* Header */}
      <div className="bg-gray-100 w-full p-4 md:p-6 2xl:p-10">
        <div className="flex flex-wrap items-center justify-start gap-5">
          <button
            className={`${
              currentTab === "tab1" ? "bg-[#ffb200] text-black" : "bg-white"
            } rounded-lg shadow-lg border-[#ffb200] px-4 py-2 text-sm whitespace-nowrap text-black font-semibold hover:bg[#ffb200]`}
            onClick={() => handleTabChange("tab1")}
          >
            Office Address
          </button>

          <button
            className={`${
              currentTab === "tab2" ? "bg-[#ffb200] text-black" : "bg-white"
            } rounded-lg shadow-lg border-[#ffb200] px-4 py-2 text-sm text-black whitespace-nowrap font-semibold hover:bg[#ffb200]`}
            onClick={() => handleTabChange("tab2")}
          >
            Global Location
          </button>

          <button
            className={`${
              currentTab === "tab3" ? "bg-[#ffb200] text-black" : "bg-white"
            } rounded-lg shadow-lg border-[#ffb200] px-4 py-2 text-sm text-black whitespace-nowrap font-semibold hover:bg[#ffb200]`}
            onClick={() => handleTabChange("tab3")}
          >
            Contact Us
          </button>

          <button
            className={`${
              currentTab === "tab4" ? "bg-[#ffb200] text-black" : "bg-white"
            } rounded-lg shadow-lg border-[#ffb200] px-4 py-2 text-sm text-black whitespace-nowrap font-semibold hover:bg[#ffb200]`}
            onClick={() => handleTabChange("tab4")}
          >
            Subscribes
          </button>

          <button
            className={`${
              currentTab === "company" ? "bg-[#ffb200] text-black" : "bg-white"
            } rounded-lg shadow-lg border-[#ffb200] px-4 py-2 text-sm text-black font-semibold hover:bg[#ffb200] whitespace-nowrap`}
            onClick={() => handleTabChange("company")}
          >
            Company
          </button>

          <button
            className={`${
              currentTab === "tab7" ? "bg-[#ffb200] text-black" : "bg-white"
            } rounded-lg shadow-lg border-[#ffb200] px-4 py-2 text-sm text-black font-semibold hover:bg-[#ffb200] whitespace-nowrap`}
            onClick={() => handleTabChange("tab7")}
          >
            Best IT & Business Solution
          </button>
          <button
            className={`${
              currentTab === "tab8" ? "bg-[#ffb200] text-black" : "bg-white"
            } rounded-lg shadow-lg border-[#ffb200] px-4 py-2 text-sm text-black font-semibold hover:bg-[#ffb200] whitespace-nowrap`}
            onClick={() => handleTabChange("tab8")}
          >
            Hiring
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 2xl:p-10 min-h-screen">
        {currentTab === "tab1" && <OfficeAddress />}
        {currentTab === "tab2" && <CreateGlobalLocations />}
        {currentTab === "tab3" && <ContactUsDropDownTable />}
        {currentTab === "tab4" && <SubsribesManuItems />}
        {currentTab === "company" && <CompanyTab />}
        {currentTab === "tab7" && <SocialSharePayment />}
        {currentTab === "tab8" && <Hiring />}
      </div>
    </section>
  );
};

export default CompanyTabPage;
