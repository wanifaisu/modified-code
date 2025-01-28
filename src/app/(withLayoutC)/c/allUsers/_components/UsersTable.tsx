import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const UsersTable = ({ users }) => {
  return (
    <div className="rounded-t-lg overflow-hidden">
      <table className="table-auto w-full rounded border-collapse">
        <thead className="bg-[#FFB200] text-sm rounded-full">
          <tr>
            <th
              className={`${poppins.className} text-[#231F20] font-semibold text-[10.85px] leading-[16.28px] p-2`}
            >
              No.
            </th>
            <th
              className={`${poppins.className} text-[#231F20] font-medium text-[10.85px] leading-[16.28px] p-2 border-r`}
            >
              User ID
            </th>
            <th
              className={`${poppins.className} text-[#231F20] font-semibold text-[10.85px] leading-[16.28px] p-2 border-r`}
            >
              Total Order
            </th>
            <th
              className={`${poppins.className} text-[#231F20] font-semibold text-[10.85px] leading-[16.28px] p-2 border-r`}
            >
              Total Amount
            </th>
            <th
              className={`${poppins.className} text-[#231F20] font-semibold text-[10.85px] leading-[16.28px] p-2 border-r`}
            >
              Paid Amount
            </th>
            <th
              className={`${poppins.className} text-[#231F20] font-semibold text-[10.85px] leading-[16.28px] p-2 border-r`}
            >
              Left Amount
            </th>
            <th
              className={`${poppins.className} text-[#231F20] font-semibold text-[10.85px] leading-[16.28px] p-2 border-r`}
            >
              Profit
            </th>
            <th
              className={`${poppins.className} max-w-10 text-[#231F20] font-semibold text-[10.85px] leading-[16.28px] p-2 border-r`}
            >
              Suspend
            </th>
            <th
              className={`${poppins.className} text-[#231F20] font-semibold text-[10.85px] leading-[16.28px] p-2 border-r`}
            >
              Status
            </th>
            <th
              className={`${poppins.className} text-[#231F20] font-semibold text-[10.85px] leading-[16.28px] p-2`}
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-center shadow-lg text-black">
          {users.slice(0, 5).map((item, rowIndex) => (
            <tr key={rowIndex} className="odd:bg-[#FAEFD8] even:bg-white">
              <td className="py-3 border-r border-r-[#FFB200] ">
                <div
                  className={`${poppins.className} font-bold text-[9.72px] leading-[22.58px] w-[22.48px] h-[22.28px] bg-[#FFB200] mx-auto`}
                >
                  {rowIndex + 1}
                </div>
              </td>
              {/* Currency ISO */}
              <td className="py-3 border-r border-r-black">{item._id}</td>
              <td className="py-3 border-r border-r-black">
                {item.finance.total_order}
              </td>
              <td className="py-3 border-r border-r-black">
                {item.finance.total_amount}
              </td>
              <td className="py-3 border-r border-r-black">
                {item.finance.total_paid}
              </td>
              <td className="py-3 border-r border-r-black">
                {item.finance.money_left}
              </td>
              <td className="py-3 border-r border-r-black">
                {item.finance.profit}
              </td>
              <td className="py-3 border-r border-r-black">
                <div
                  className={`${poppins.className} font-bold text-white text-[9.72px] leading-[22.58px] w-[22.48px] h-[22.28px] bg-[#322488] mx-auto`}
                >
                  {item.suspend}
                </div>
              </td>
              <td className="py-3 border-r border-r-black">
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
              <td className="py-3">
                <Link
                  className="rounded-md bg-[#FFB200] px-3 py-1 text-[14px] text-black transition-all hover:bg-black hover:text-white hover:shadow-md"
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
