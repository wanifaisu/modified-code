import { Poppins } from "next/font/google";
import Link from "next/link";
import ChatInterface from "../ChatInterface";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
const OrdersTable = ({ agencies }) => {
  return (
    <table className="table-auto w-full rounded border-collapse">
      <thead className="bg-[#FFB200] text-sm rounded-full dark:bg-boxdark ">
        <tr>
          <th
            className={`${poppins.className} text-[#231F20] font-semibold text-[10.85px] leading-[16.28px] p-2 dark:text-white font-inter`}
          >
            No.
          </th>
          <th
            className={`${poppins.className} text-[#231F20] font-medium text-[10.85px] leading-[16.28px] p-2 dark:text-white font-inter`}
          >
            Order ID
          </th>
          <th
            className={`${poppins.className} text-[#231F20] font-semibold text-[10.85px] leading-[16.28px] p-2 dark:text-white font-inter`}
          >
            Project Name
          </th>
          <th
            className={`${poppins.className} text-[#231F20] font-semibold text-[10.85px] leading-[16.28px] p-2 dark:text-white font-inter`}
          >
            Project Amount
          </th>
          <th
            className={`${poppins.className} text-[#231F20] font-semibold text-[10.85px] leading-[16.28px] p-2 dark:text-white font-inter`}
          >
            Paid Amount
          </th>
          <th
            className={`${poppins.className} text-[#231F20] font-semibold text-[10.85px] leading-[16.28px] p-2 dark:text-white font-inter`}
          >
            Left Amount
          </th>
          <th
            className={`${poppins.className} text-[#231F20] font-semibold text-[10.85px] leading-[16.28px] p-2 dark:text-white font-inter`}
          >
            Message
          </th>
          <th
            className={`${poppins.className} text-[#231F20] font-semibold text-[10.85px] leading-[16.28px] p-2 dark:text-white font-inter`}
          >
            Delivery Date
          </th>
          <th
            className={`${poppins.className} text-[#231F20] font-semibold text-[10.85px] leading-[16.28px] p-2 dark:text-white font-inter`}
          >
            Profits
          </th>
          <th
            className={`${poppins.className} text-[#231F20] font-semibold text-[10.85px] leading-[16.28px] p-2 dark:text-white font-inter`}
          >
            Status
          </th>
          <th
            className={`${poppins.className} text-[#231F20] font-semibold text-[10.85px] leading-[16.28px] p-2 dark:text-white font-inter`}
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody className="text-center text-black">
        {agencies.map((agency: IAgency, rowIndex: number) => (
          <tr
            key={rowIndex}
            className="odd:bg-[#FAEFD8] even:bg-white dark:text-white font-inter dark:bg-boxdark"
          >
            <td className="py-3 border-r border-r-[#FFB200] ">
              <div
                className={`${poppins.className} font-bold text-black text-[9.72px] leading-[22.58px] w-[22.48px] h-[22.28px] bg-[#FFB200] mx-auto`}
              >
                {rowIndex + 1}
              </div>
            </td>
            <td className="py-3 border-r border-r-[#FFB200]">{agency.AIN}</td>
            <td className="py-3 border-r border-r-[#FFB200]">
              {agency.AgentName}
            </td>
            <td className="py-3 border-r border-r-[#FFB200]">
              {agency.Project}
            </td>
            <td className="py-3 border-r border-r-[#FFB200]">
              {agency.Ranking}
            </td>
            <td className="py-3 border-r border-r-[#FFB200]">
              {agency.Ranking}
            </td>
            <td className=" border-r border-r-[#FFB200]">
              <div className="ml-3 ">
                <ChatInterface />
              </div>
            </td>
            <td className="py-3 border-r border-r-[#FFB200]">
              {agency.Renewal}
            </td>
            <td className="py-3 border-r border-r-[#FFB200]">
              {agency.Deposite}
            </td>
            <td className="py-3 border-r border-r-[#FFB200]">
              <div
                className={`${
                  poppins.className
                } font-bold text-black text-[10.22px] leading-[15.34px] w-22 h-4 ${
                  agency.Status === "DISSOLVED"
                    ? "bg-[#DE1D1D]"
                    : agency.Status === "INACTIVE"
                    ? "bg-[#FFB200]"
                    : agency.Status === "DORMANT"
                    ? "bg-[#FF3D00]"
                    : "bg-[#00EE0A]"
                } rounded-sm mx-auto`}
              >
                {agency.Status}
              </div>
            </td>
            <td className="py-3 dark:border-white">
              <Link
                className="rounded-md bg-[#FFB200] px-3 py-1 text-[14px] text-black transition-all hover:bg-black hover:text-white hover:shadow-md dark:bg-boxdark dark:text-white dark:border dark:border-white font-inter"
                href={`/c/orders/update`}
              >
                View
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrdersTable;
