import { CalendarIcon } from "@/utils/Icons";
import { DatePicker } from "antd";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});
const ActionBar = ({ onStartDate, onEndDate }) => {
  return (
    <div className="mb-10 flex flex-wrap justify-end gap-2 items-center my-10">
      {/* Buttons */}
      <div className="flex gap-1">
        <button
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          className="font-inter font-medium text-[10px] leading-[12.1px] px-2 bg-[#FFFFFF] text-black py-3 rounded-lg"
        >
          Security Deposit
        </button>
        <button
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          className="font-inter font-medium text-[10px] leading-[12.1px] px-2 bg-[#FFFFFF] text-black py-3 rounded-lg"
        >
          Accepted payment
        </button>
        <button
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          className="font-inter font-medium text-[10px] leading-[12.1px] px-2 bg-[#FFFFFF] text-black py-2 rounded-lg"
        >
          Sending Return{" "}
        </button>
      </div>

      <div className="flex items-center gap-2">
        <DatePicker
          onChange={onStartDate}
          className="py-2 bg-white w-35 placeholder:text-black"
          placeholder="MM/DD/YYYY"
          suffixIcon={<CalendarIcon />}
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
        />
        <span>To</span>
        <DatePicker
          onChange={onEndDate}
          className="py-2 bg-white w-35 placeholder:text-black"
          placeholder="MM/DD/YYYY"
          suffixIcon={<CalendarIcon />}
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
        />

        <select
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          defaultValue=""
          className={`${poppins.className} font-medium text-[10px] leading-[15.5px] text-center rounded-lg px-2 py-2 bg-white text-black`}
        >
          <option value="" disabled selected>
            Payment Method
          </option>
          <option value="sbi">SBI Bank</option>
          <option value="uk">UK Bank</option>
          <option value="venmo">Venmo</option>
          <option value="paypal">Paypal</option>
        </select>
      </div>
    </div>
  );
};

export default ActionBar;
