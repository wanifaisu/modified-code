"use client";

import Image from "next/image";
import { useState } from "react";
import BannerLogoPage from "../BannerLogoPage ";
import CardFourUpdate from "../CardFourUpdate";
import CardThreeUpdate from "../CardThreeUpdate ";
import PhotoVideoUpdate from "../PhotoVideoUpdate";
import SecurityPage from "../SecurityPage";
import SupportIcon from "../SupportIcon";
const ServiceTab = () => {
  const [currentTab, setCurrentTab] = useState("logo");

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };

  return (
    <section className="container flex flex-row">
      {currentTab === "photoVideo" && (
        <div className="min-w-[322px] min-h-screen bg-[#F8F6F0] mt-[-2rem] rounded-br-2xl">
          <div className="flex flex-col">
            <div className="flex max-w-[282px] self-center flex-row w-full justify-center rounded-[5px] mt-6 border border-[#000000]">
              <input
                type="text"
                placeholder="Name"
                className="font-inter font-light text-[14px] leading-[12.1px] text-[#000000] w-[182px] px-2 h-[55px] bg-[#EDEDED] rounded-l-[5px]"
              />{" "}
              <button className="w-25 h-[55px] bg-[#172554] rounded-r-[5px] text-white">
                Add
              </button>
            </div>
            <div className="flex max-w-[282px] self-center flex-row bg-[#EDEDED] w-full justify-around rounded-[5px] mt-6 border border-[#000000]">
              <input
                type="text"
                placeholder="hh"
                className="w-[182px] h-[41px] bg-[#EDEDED] border-none border-[0px] focus:outline-none"
              />
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer border-none"
                />
                <div
                  className={`relative w-11 h-6 bg-[#C8C8C8] peer-focus:outline-none rounded-full peer 
                     dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
                      peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
                      after:start-[2px] after:bg-white peer-checked:after:bg-green-500 after:border-gray-300 after:border after:rounded-full 
                      after:h-5 after:w-5 after:transition-all dark:border-gray-600 `}
                />
              </label>
              <Image
                src={"/icons/trash.png"}
                width={16}
                height={16}
                className="object-contain"
                alt="delete"
              />
            </div>
          </div>
        </div>
      )}
      <div className="w-full">
        <div className="bg-gray-100 py-4">
          <div className="flex flex-wrap lg:flex-nowrap gap-5 max-w-5xl justify-start ml-8">
            <button
              className={`${
                currentTab === "logo"
                  ? "bg-[#ffb200] text-black-4"
                  : "bg-white text-[#00000080]"
              } rounded-[10px] shadow-lg px-3 py-4 text-sm text-black border-[0.5px] border-[#00000080] font-semibold whitespace-nowrap hover:bg-[#ffb200] hover:border-none dark:text-white font-inter dark:bg-boxdark`}
              onClick={() => handleTabChange("logo")}
            >
              Banner
            </button>
            <button
              className={`${
                currentTab === "threeCard"
                  ? "bg-[#ffb200] text-black-4"
                  : "bg-white text-[#00000080]"
              } rounded-[10px] shadow-lg px-3 py-4 text-sm text-black border-[0.5px] border-[#00000080] font-semibold whitespace-nowrap hover:bg-[#ffb200] hover:border-none dark:text-white font-inter dark:bg-boxdark`}
              onClick={() => handleTabChange("threeCard")}
            >
              3 Card
            </button>

            <button
              className={`${
                currentTab === "fourCard"
                  ? "bg-[#ffb200] text-black-4"
                  : "bg-white text-[#00000080]"
              } rounded-[10px] shadow-lg px-3 py-4 text-sm text-black border-[0.5px] border-[#00000080] font-semibold whitespace-nowrap hover:bg-[#ffb200] hover:border-none dark:text-white font-inter dark:bg-boxdark`}
              onClick={() => handleTabChange("fourCard")}
            >
              4 Card
            </button>

            <button
              className={`${
                currentTab === "security"
                  ? "bg-[#ffb200] text-black-4"
                  : "bg-white text-[#00000080]"
              } rounded-[10px] shadow-lg px-3 py-4 text-sm text-black border-[0.5px] border-[#00000080] font-semibold whitespace-nowrap hover:bg-[#ffb200] hover:border-none dark:text-white font-inter dark:bg-boxdark`}
              onClick={() => handleTabChange("security")}
            >
              Security
            </button>

            <button
              className={`${
                currentTab === "photoVideo"
                  ? "bg-[#ffb200] text-black-4"
                  : "bg-white text-[#00000080]"
              } rounded-[10px] shadow-lg px-3 py-4 text-sm text-black border-[0.5px] border-[#00000080] font-semibold whitespace-nowrap hover:bg-[#ffb200] hover:border-none dark:text-white font-inter dark:bg-boxdark`}
              onClick={() => handleTabChange("photoVideo")}
            >
              Service Gallery
            </button>

            <button
              className={`${
                currentTab === "paymentIcon"
                  ? "bg-[#ffb200] text-black-4"
                  : "bg-white text-[#00000080]"
              } rounded-[10px] shadow-lg px-3 py-4 text-sm text-black border-[0.5px] border-[#00000080] font-semibold whitespace-nowrap hover:bg-[#ffb200] hover:border-none dark:text-white font-inter dark:bg-boxdark`}
              onClick={() => handleTabChange("paymentIcon")}
            >
              Support Icon & Support Logo
            </button>
          </div>
        </div>

        {/* Content */}
        <div className=" min-h-screen">
          {currentTab === "logo" && <BannerLogoPage />}
          {currentTab === "threeCard" && <CardThreeUpdate />}
          {currentTab === "fourCard" && <CardFourUpdate />}
          {currentTab === "security" && <SecurityPage />}
          {currentTab === "photoVideo" && <PhotoVideoUpdate />}
          {currentTab === "paymentIcon" && <SupportIcon />}
        </div>
      </div>
    </section>
  );
};

export default ServiceTab;
