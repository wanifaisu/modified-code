import { CalendarIcon } from "@/utils/Icons";
import { DatePicker } from "antd";

const Date = ({ onStartDate, onEndDate }) => {
  return (
    <div className="w-full flex items-center justify-between gap-3 py-4">
      <div className="invisible" />
      <div className="flex items-center justify-end gap-5 ">
        <select
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          defaultValue=""
          className="rounded-lg px-2 py-2 bg-white text-black dark:text-white font-inter dark:bg-boxdark"
        >
          <option value="" disabled selected>
            Currency
          </option>
          <option value="all">All</option>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
        </select>
        <DatePicker
          onChange={onStartDate}
          className="py-2 bg-white w-35 placeholder:text-black dark:text-white font-inter dark:bg-boxdark"
          placeholder="MM/DD/YYYY"
          suffixIcon={<CalendarIcon />}
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
        />
        <span className="text-black-4">To</span>
        <DatePicker
          onChange={onEndDate}
          className="py-2 bg-white w-35 placeholder:text-black dark:text-white font-inter dark:bg-boxdark"
          placeholder="MM/DD/YYYY"
          suffixIcon={<CalendarIcon />}
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
        />
        {/* <CustomSelect options={statusOptions} placeholder="Status" /> */}
        <select
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          defaultValue=""
          className="rounded-lg px-2 py-2 bg-white text-black dark:text-white font-inter dark:bg-boxdark"
        >
          <option value="" disabled selected>
            Status
          </option>
          <option value="all">All</option>
          <option value="inactive">InActive</option>
          <option value="active">Active</option>
          <option value="dormant">Dormant</option>
          <option value="dissolved">Dissolved</option>
        </select>
      </div>
    </div>
  );
};

export default Date;
