import Image from "next/image";
import React, { ReactNode } from "react";
interface CardDataStatsProps {
  name: string;
  number: string;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  name,
  number: total,
  children,
}) => {
  // const [activeTab, setActiveTab] = useState(
  // tabs[0].id
  // );

  // const handleTabClick = (tabId: number) => {
  //   setActiveTab(tabId);
  // };

  return (
    <div
      className={`rounded-xl border border-stroke bg-white px-6 py-4 shadow-default dark:border-strokedark dark:bg-boxdark ${
        name === "Total Users" ? "bg-[#FFB200]" : ""
      }`}
    >
      <h2 className="text-sm font-semibold text-[#231F20] dark:text-white font-inter">
        {name}
      </h2>
      <div className="mt-4 flex items-center justify-between">
        <h4 className="text-3xl font-bold text-[#231F20] dark:text-white font-inter">
          {total}
        </h4>
        <div className="flex flex-col gap-1">
          <div className="flex items-center">
            <span className="text-sm text-green-500 font-inter">+11.02%</span>
            <Image
              src={"/icons/arrow-up.png"}
              width={12.5}
              height={8}
              alt="trend-icon-up"
              className="ml-1 object-contain"
            />
          </div>
          <div className="flex items-center">
            <span className="text-sm text-red-500 font-inter">-11.02%</span>
            <Image
              src={"/icons/arrow-down.png"}
              width={12.5}
              height={8}
              alt="trend-icon-down"
              className="ml-1 object-contain bg-red-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDataStats;
