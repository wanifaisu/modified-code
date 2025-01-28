import { CalendarIcon } from "@/utils/Icons";
import { DatePicker } from "antd";

const ActionBar = () => {
  return (
    <div className="flex items-center justify-end gap-5">
      <div className="ml-4">
        <select
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          defaultValue=""
          className="rounded-lg px-2 py-2 bg-white text-black"
        >
          <option value="" disabled selected>
            Country
          </option>
          <option value="All">All</option>
          <option value="Japan">Japan</option>
          <option value="London">London</option>
        </select>
      </div>
      <div className="">
        <select
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          defaultValue=""
          className="rounded-lg px-2 py-2 bg-white text-black"
        >
          <option value="" disabled selected>
            Currency
          </option>
          <option value="all">All</option>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
        </select>
      </div>

      <DatePicker
        className="py-2 bg-white w-35 placeholder:text-black"
        placeholder="MM/DD/YYYY"
        suffixIcon={<CalendarIcon />}
        style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
      />
      <span className="text-black-4">To</span>
      <DatePicker
        className="py-2 bg-white w-35 placeholder:text-black"
        placeholder="MM/DD/YYYY"
        suffixIcon={<CalendarIcon />}
        style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
      />
      {/* <CustomSelect options={statusOptions} placeholder="Status" /> */}
      <select
        style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
        defaultValue=""
        className="rounded-lg bg-white px-2 py-2 text-black"
      >
        <option value="" disabled selected>
          Payment Method
        </option>
        <option value="sbi">SBI Bank</option>
        <option value="uk">UK Bank</option>
        <option value="venmo">Venmo</option>
        <option value="paypal">Paypal</option>
      </select>
      <select
        style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
        defaultValue=""
        className="rounded-lg px-2 py-2 bg-white text-black"
      >
        <option value="" disabled selected>
          Status
        </option>
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="Accepted">Accepted</option>
        <option value="Spam">Spam</option>
      </select>
    </div>
  );
};

export default ActionBar;
