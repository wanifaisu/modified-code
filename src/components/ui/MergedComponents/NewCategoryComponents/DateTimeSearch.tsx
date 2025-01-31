import { CalendarIcon } from "@/utils/Icons";
import { Button, DatePicker } from "antd";
import { Poppins } from "next/font/google";
import React from "react";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});
interface buttonTitleProp {
  title?: string;
  onOpenModal: (title: string) => void;
}
const onStartDate = (value: string) => {
  console.log(value);
};
const onEndDate = (value: any) => {
  console.log(value);
};

const DateTimeSearch: React.FC<buttonTitleProp> = ({ title, onOpenModal }) => {
  return (
    <div>
      {/* Date Range Picker and Search */}
      <div className="flex w-full flex-row items-center justify-between mb-4 ">
        <div className="flex item-center gap-2">
          <DatePicker
            onChange={onStartDate}
            className="py-2 bg-white w-35 text-black dark:text-white font-inter dark:bg-boxdark"
            placeholder="MM/DD/YYYY"
            suffixIcon={<CalendarIcon />}
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          />
          <span className="text-black-4 mt-2">To</span>
          <DatePicker
            onChange={onEndDate}
            className="py-2 bg-white w-35 placeholder:text-black dark:text-white font-inter dark:bg-boxdark"
            placeholder="MM/DD/YYYY"
            suffixIcon={<CalendarIcon />}
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          />
        </div>

        {title && title !== "Create Employee" && (
          <Button
            className={`dark:text-white font-inter dark:bg-boxdark bg-[#FFB200] h-[45px] px-3 ${poppins.className} font-medium text-base text-center text-[#000000] rounded-lg`}
            onClick={() => onOpenModal(title)}
          >
            {title}
          </Button>
        )}
      </div>
    </div>
  );
};

export default DateTimeSearch;
