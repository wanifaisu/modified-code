import { customUTCFormat } from "@/lib/formatDate";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const PaymentTable = ({ PaymentsData }) => {
  return (
    <table className="table-auto w-full rounded border-collapse">
      <thead className="bg-[#FFB200] text-sm rounded-full  dark:bg-boxdark">
        <tr>
          <th
            className={`${poppins.className} text-[#231F20] font-bold text-[13.85px] leading-[16.28px] p-2 dark:text-white font-inter`}
          >
            No.
          </th>
          <th
            className={`${poppins.className} text-[#231F20] font-bold text-[13.85px] leading-[16.28px] p-2 dark:text-white font-inter`}
          >
            Payment ID
          </th>
          <th
            className={`${poppins.className} text-[#231F20] font-bold text-[13.85px] leading-[16.28px] p-2 dark:text-white font-inter`}
          >
            Payment Method
          </th>
          <th
            className={`flex flex-col ${poppins.className} text-[#231F20] font-bold text-[13.85px] leading-[16.28px] p-2 dark:text-white font-inter`}
          >
            Account Name
            <span className="text-red">Bank/Wallet</span>
          </th>
          <th
            className={`${poppins.className} text-[#231F20] font-bold text-[13.85px] leading-[16.28px] p-2 dark:text-white font-inter`}
          >
            Account Number
          </th>
          <th
            className={`${poppins.className} text-[#231F20] font-bold text-[13.85px] leading-[16.28px] p-2 dark:text-white font-inter`}
          >
            Amount
          </th>
          <th
            className={`${poppins.className} text-[#231F20] font-bold text-[13.85px] leading-[16.28px] p-2 dark:text-white font-inter`}
          >
            Payment Day
          </th>
          <th
            className={`${poppins.className} text-[#231F20] font-bold text-[13.85px] leading-[16.28px] p-2 dark:text-white font-inter`}
          >
            Status
          </th>
          <th
            className={`${poppins.className} text-[#231F20] font-bold text-[13.85px] leading-[16.28px] p-2 dark:text-white font-inter`}
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody className="text-center text-black shadow-lg">
        {PaymentsData.map((item: any, rowIndex: any) => (
          <tr
            key={rowIndex}
            className="odd:bg-[#FAEFD8] even:bg-white dark:text-white font-inter dark:bg-boxdark"
          >
            <td className="py-3 border-r border-r-[#FFB200] ">
              <div
                className={`${poppins.className} font-bold text-[9.72px] leading-[22.58px] w-[22.48px] h-[22.28px] bg-[#FFB200] mx-auto`}
              >
                {rowIndex + 1}
              </div>
            </td>
            {/* Currency ISO */}
            <td className="py-3 border-r border-r-[#FFB200]">{item.id}</td>
            <td className="py-3 border-r border-r-[#FFB200]">
              {item.paymentMethod}
            </td>
            <td className="py-3 border-r border-r-[#FFB200]">
              {item.accountName}
            </td>
            <td className="py-3 border-r border-r-[#FFB200]">
              {item.accountNumber}
            </td>
            <td className="py-3 border-r border-r-[#FFB200]">
              {item.payAmount}
            </td>
            <td className="py-3 border-r border-r-[#FFB200]">
              {customUTCFormat(item.paymentDay)}
            </td>

            <td className="py-3 border-r border-r-[#FFB200]">
              <div
                className={`${
                  poppins.className
                } font-bold text-white text-[10.22px] leading-[15.34px] w-22 h-4 ${
                  item.status === "spam"
                    ? "bg-[#DE1D1D]"
                    : item.status === "pending"
                    ? "bg-[#FFB200]"
                    : item.status === "accepted"
                    ? "bg-[#00EE0A]"
                    : "bg-orange-600"
                } rounded-sm mx-auto`}
              >
                {item.status}
              </div>
            </td>
            <td className="py-3">
              <Link
                className="rounded-md bg-[#FFB200] px-3 py-1 text-[14px] text-black transition-all hover:bg-black hover:text-white hover:shadow-md dark:bg-boxdark dark:text-white dark:border dark:border-white font-inter"
                href={`/payment/${item.id}`}
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

export default PaymentTable;
