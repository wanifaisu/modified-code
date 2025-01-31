import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const UsersTable = ({ users }: any) => {
  return (
    <div className="rounded-t-lg overflow-hidden">
      <table className="table-auto w-full rounded border-collapse dark:bg-boxdark">
        <thead className="bg-[#FFB200] text-sm rounded-full dark:bg-boxdark">
          <tr>
            <th
              className={`${poppins.className} text-[#231F20] font-semibold text-[10.85px] leading-[16.28px] p-2 dark:text-white font-inter`}
            >
              No.
            </th>
            <th
              className={`${poppins.className} text-[#231F20] font-medium text-[10.85px] leading-[16.28px] p-2 border-r dark:text-white font-inter`}
            >
              User ID
            </th>
            <th
              className={`${poppins.className} text-[#231F20] font-semibold text-[10.85px] leading-[16.28px] p-2 border-r dark:text-white font-inter`}
            >
              Total Order
            </th>
            <th
              className={`${poppins.className} text-[#231F20] font-semibold text-[10.85px] leading-[16.28px] p-2 border-r dark:text-white font-inter`}
            >
              Total Amount
            </th>
            <th
              className={`${poppins.className} text-[#231F20] font-semibold text-[10.85px] leading-[16.28px] p-2 border-r dark:text-white font-inter`}
            >
              Paid Amount
            </th>
            <th
              className={`${poppins.className} text-[#231F20] font-semibold text-[10.85px] leading-[16.28px] p-2 border-r dark:text-white font-inter`}
            >
              Left Amount
            </th>
            <th
              className={`${poppins.className} text-[#231F20] font-semibold text-[10.85px] leading-[16.28px] p-2 border-rdark:text-white font-inter`}
            >
              Profit
            </th>
            <th
              className={`${poppins.className} max-w-10 text-[#231F20] font-semibold text-[10.85px] leading-[16.28px] p-2 border-r dark:text-white font-inter`}
            >
              Suspend
            </th>
            <th
              className={`${poppins.className} text-[#231F20] font-semibold text-[10.85px] leading-[16.28px] p-2 border-r dark:text-white font-inter`}
            >
              Status
            </th>
            <th
              className={`${poppins.className} text-[#231F20] font-semibold text-[10.85px] leading-[16.28px] p-2 dark:text-white `}
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-center shadow-lg text-black ">
          {users.slice(0, 5).map((item, rowIndex) => (
            <tr
              key={rowIndex}
              className="odd:bg-[#FAEFD8] even:bg-white dark:bg-boxdark"
            >
              <td className="py-3 border-r border-r-[#FFB200] ">
                <div
                  className={`${poppins.className} font-bold text-[9.72px] leading-[22.58px] w-[22.48px] h-[22.28px] bg-[#FFB200] mx-auto `}
                >
                  {rowIndex + 1}
                </div>
              </td>
              {/* Currency ISO */}
              <td className="py-3 border-r border-r-black dark:text-white font-inter">
                {item._id}
              </td>
              <td className="py-3 border-r border-r-black dark:text-white font-inter">
                {item.finance.total_order}
              </td>
              <td className="py-3 border-r border-r-black dark:text-white font-inter">
                {item.finance.total_amount}
              </td>
              <td className="py-3 border-r border-r-black dark:text-white font-inter">
                {item.finance.total_paid}
              </td>
              <td className="py-3 border-r border-r-black dark:text-white font-inter">
                {item.finance.money_left}
              </td>
              <td className="py-3 border-r border-r-black dark:text-white font-inter">
                {item.finance.profit}
              </td>
              <td className="py-3 border-r border-r-black dark:text-white font-inter">
                <div
                  className={`${poppins.className} font-bold text-white text-[9.72px] leading-[22.58px] w-[22.48px] h-[22.28px] bg-[#322488] mx-auto dark:text-white font-inter`}
                >
                  {item.suspend}
                </div>
              </td>
              <td className="py-3 border-r border-r-black dark:text-white font-inter">
                <div
                  className={`${
                    poppins.className
                  } font-bold text-white text-[10.22px] leading-[15.34px] w-22 h-4 ${
                    item.status === "Block"
                      ? "bg-[#DE1D1D]"
                      : item.status === "Active"
                      ? "bg-[#00850D]"
                      : "bg-[#FF3D00E3]"
                  } rounded-sm mx-auto`}
                >
                  {item.status}
                </div>
              </td>
              <td className="py-3 dark:text-white font-inter">
                <Link
                  className="rounded-md bg-[#FFB200] px-3 py-1 text-[14px] text-black transition-all hover:bg-black hover:text-white hover:shadow-md dark:bg-boxdark dark:text-white dark:border dark:border-white font-inter"
                  href={`/c/allUsers/${item._id}/profile`}
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
