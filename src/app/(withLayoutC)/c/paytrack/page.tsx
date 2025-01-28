"use client";
import React, { useState } from "react";

import { Poppins } from "next/font/google";
import ActionBar from "./_components/ActionBar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

interface CurrencyData {
  id: number;
  currencyISO: string;
  amount: number;
}

// Example dataset for the table.
const currencyData: CurrencyData[] = [
  { id: 1, currencyISO: "SSL", amount: 456 },
  { id: 2, currencyISO: "MKS", amount: 46496 },
  { id: 3, currencyISO: "USD", amount: 46449 },
  { id: 4, currencyISO: "EUR", amount: 4949 },
  { id: 5, currencyISO: "PKG", amount: 89 },
  { id: 6, currencyISO: "SSL", amount: 456 },
  { id: 7, currencyISO: "MKS", amount: 46496 },
  { id: 8, currencyISO: "USD", amount: 46449 },
  { id: 9, currencyISO: "EUR", amount: 4949 },
  { id: 10, currencyISO: "PKG", amount: 89 },
  { id: 11, currencyISO: "SSL", amount: 456 },
  { id: 12, currencyISO: "MKS", amount: 46496 },
  { id: 13, currencyISO: "USD", amount: 46449 },
  { id: 14, currencyISO: "EUR", amount: 4949 },
  { id: 15, currencyISO: "PKG", amount: 89 },
  { id: 16, currencyISO: "SSL", amount: 456 },
  { id: 17, currencyISO: "MKS", amount: 46496 },
  { id: 18, currencyISO: "USD", amount: 46449 },
  { id: 19, currencyISO: "EUR", amount: 4949 },
  { id: 20, currencyISO: "PKG", amount: 89 },
  { id: 21, currencyISO: "SSL", amount: 456 },
  { id: 22, currencyISO: "MKS", amount: 9999 },
  { id: 23, currencyISO: "USD", amount: 46449 },
  { id: 24, currencyISO: "EUR", amount: 4949 },
  { id: 25, currencyISO: "PKG", amount: 89 },
  // Add more rows as needed
];

const paymentMethod = [
  {
    value: "All",
    label: "All",
  },
  {
    value: "PayPal",
    label: "PayPal",
  },
  {
    value: "Venmo",
    label: "Venmo",
  },
  {
    value: "Google Pay",
    label: "Google Pay",
  },
];

const onStartDate = (value: any) => {
  console.log(value);
};
const onEndDate = (value: any) => {
  console.log(value);
};

export const PayTrackTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = currencyData.filter((item) =>
    item.currencyISO.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Helper function to chunk data for row grouping
  const chunkData = (arr: CurrencyData[], chunkSize: number) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  const chunkedData = chunkData(filteredData, 5); // Divide data into sets of 5

  return (
    <>
      <div className="w-full h-screen container mx-auto p-4 text-black bg-transparent">
        {/* Header */}
        {/* <h1 className="text-2xl font-bold mb-4">Monthly Pay Track</h1> */}

        {/* Search and Filter Section */}
        <ActionBar onStartDate={onStartDate} onEndDate={onEndDate} />

        {/* Data Table */}

        <div className="rounded-t-lg overflow-hidden">
          <table className="table-auto w-full rounded border-collapse">
            <thead className="bg-[#FFB200] text-sm rounded-full">
              <tr>
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <React.Fragment key={i}>
                      <th
                        className={`${poppins.className} text-[#231F20] font-semibold text-[10.85px] leading-[16.28px] p-2`}
                      >
                        No.
                      </th>
                      <th
                        className={`${poppins.className} text-[#231F20] font-medium text-[10.85px] leading-[16.28px] p-2`}
                      >
                        Currency ISO
                      </th>
                      <th
                        className={`${poppins.className} text-[#231F20] font-semibold text-[10.85px] leading-[16.28px] p-2`}
                      >
                        Amount
                      </th>
                    </React.Fragment>
                  ))}
              </tr>
            </thead>
            <tbody className="text-center border border-[#FFB200]">
              {Array.from({ length: 5 }).map((_, rowIndex) => (
                <tr key={rowIndex} className="odd:bg-[#FAEFD8] even:bg-white">
                  {/* Render 5 items per row with their serial numbers, Currency ISO, and Amount */}
                  {chunkedData.map((chunk, chunkIndex) => {
                    const rowData = chunk[rowIndex];
                    return (
                      <>
                        {/* Serial Number */}
                        <td className="py-3 border-r border-r-[#FFB200] ">
                          <div
                            className={`${poppins.className} font-bold text-black text-[9.72px] leading-[22.58px] w-[22.48px] h-[22.28px] bg-[#FFB200] mx-auto`}
                          >
                            {rowData ? rowIndex + 1 + chunkIndex * 5 : ""}
                          </div>
                        </td>
                        {/* Currency ISO */}
                        <td className="py-3 border-r border-r-[#FFB200]">
                          {rowData ? rowData.currencyISO : ""}
                        </td>
                        {/* Amount */}
                        <td className="py-3 border-r border-r-[#FFB200]">
                          {rowData ? rowData.amount : ""}
                        </td>
                      </>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PayTrackTable;
