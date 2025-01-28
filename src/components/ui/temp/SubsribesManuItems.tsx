// import { Form, Input } from "antd";
// import React, { useState } from "react";
// import { BsTrash3 } from "react-icons/bs";
// import { RiSearch2Line } from "react-icons/ri";

// const emailData = [
//   "mr.jack@gmail.com",
//   "ms.jill@gmail.com",
//   "mr.john@gmail.com",
//   "ms.susan@gmail.com",
//   "mr.kevin@gmail.com",
//   "ms.nina@gmail.com",
//   "mr.david@gmail.com",
//   "ms.lisa@gmail.com",
//   "mr.paul@gmail.com",
//   "ms.rachel@gmail.com",
//   "mr.jason@gmail.com",
//   "ms.emily@gmail.com",
//   "mr.mike@gmail.com",
//   "ms.claire@gmail.com",
//   "mr.steve@gmail.com",
//   "ms.anna@gmail.com",
// ];

// const MAX_ROWS = 4;

// const SubscribesMenuItems = () => {
//   // Split data into groups for columns
//   const columns = [];
//   for (let i = 0; i < emailData.length; i += MAX_ROWS) {
//     columns.push(emailData.slice(i, i + MAX_ROWS));
//   }
//   const [searchText, setSearchText] = useState<string>("");
//     const [allChecked, setAllChecked] = useState<boolean>(false);



//   return (
//     <div className="p-4">
//       <div className="text-center my-5">
//          <Form className="max-w-md mx-auto w-full">
//            <Form.Item>
//              <Input
//                placeholder="Search"
//                value={searchText}
//                onChange={(e) => setSearchText(e.target.value)}
//                style={{ padding: "7px", borderRadius: "50px" }}
//                suffix={<RiSearch2Line size={20} />}
//              />
//            </Form.Item>
//          </Form>
//        </div>
//       <div className="overflow-x-auto rounded-md shadow-lg">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-[#FFB200] text-black font-semibold">
//               {columns.map((_, colIndex) => (
//                 <React.Fragment key={colIndex}>
//                   <th className="p-3">No.</th>
//                   <th className="p-3">Email</th>
//                   <th className="p-3">
//                     <BsTrash3 />
//                   </th>
//                   <th className="p-3">✔</th>
//                 </React.Fragment>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {/* Map rows */}
//             {Array.from({ length: MAX_ROWS }).map((_, rowIndex) => (
//               <tr key={rowIndex}>
//                 {columns.map((columnData, colIndex) => (
//                   <React.Fragment key={colIndex}>
//                     <td
//                       className={`p-3 text-center text-black ${
//                         rowIndex % 2 === 0 ? "bg-[#ffe5b4]" : "bg-[#ffd591]"
//                       }`}
//                     >
//                       {columnData[rowIndex] && (
//                         <button className="bg-[#FFB200] px-3 py-1 rounded font-semibold">
//                           {colIndex * MAX_ROWS + rowIndex + 1}
//                         </button>
//                       )}
//                     </td>
//                     <td
//                       className={`p-3 text-black ${
//                         rowIndex % 2 === 0 ? "bg-[#ffe5b4]" : "bg-[#ffd591]"
//                       }`}
//                     >
//                       {columnData[rowIndex] || ""}
//                     </td>
//                     <td
//                       className={`p-3 text-center ${
//                         rowIndex % 2 === 0 ? "bg-[#ffe5b4]" : "bg-[#ffd591]"
//                       }`}
//                     >
//                       {columnData[rowIndex] && <BsTrash3 color="red" />}
//                     </td>
//                     <td
//                       className={`p-3 text-center ${
//                         rowIndex % 2 === 0 ? "bg-[#ffe5b4]" : "bg-[#ffd591]"
//                       }`}
//                     >
//                       {columnData[rowIndex] && <input type="checkbox" />}
//                     </td>
//                   </React.Fragment>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };


// export default SubscribesMenuItems



import { Form, Input } from "antd";
import React, { useState } from "react";
import { BsTrash3 } from "react-icons/bs";
import { RiSearch2Line } from "react-icons/ri";
import { CalendarIcon, LoadingIcon } from '@/utils/Icons'
import { DatePicker } from "antd";

const emailData = [
  "mr.jack@gmail.com",
  "ms.jill@gmail.com",
  "mr.john@gmail.com",
  "ms.susan@gmail.com",
  "mr.kevin@gmail.com",
  "ms.nina@gmail.com",
  "mr.david@gmail.com",
  "ms.lisa@gmail.com",
  "mr.paul@gmail.com",
  "ms.rachel@gmail.com",
  "mr.jason@gmail.com",
  "ms.emily@gmail.com",
  "mr.mike@gmail.com",
  "ms.claire@gmail.com",
  "mr.steve@gmail.com",
  "ms.anna@gmail.com",
];

const MAX_ROWS = 4;

const SubscribesMenuItems: React.FC = () => {
  const [columns, setColumns] = useState<string[][]>(() => {
    const cols: string[][] = [];
    for (let i = 0; i < emailData.length; i += MAX_ROWS) {
      cols.push(emailData.slice(i, i + MAX_ROWS));
    }
    return cols;
  });

  const [selectedItems, setSelectedItems] = useState<{ [key: number]: string[] }>(
    {}
  );

  const handleRowSelect = (colIndex: number, isChecked: boolean) => {
    setSelectedItems((prev) => ({
      ...prev,
      [colIndex]: isChecked ? [...columns[colIndex]] : [],
    }));
  };

  const handleItemSelect = (colIndex: number, email: string) => {
    setSelectedItems((prev) => {
      const currentSelection = prev[colIndex] || [];
      const isSelected = currentSelection.includes(email);
      const updatedSelection = isSelected
        ? currentSelection.filter((item) => item !== email)
        : [...currentSelection, email];
      return { ...prev, [colIndex]: updatedSelection };
    });
  };

  const handleDeleteSelected = (colIndex: number) => {
    const remainingItems = columns[colIndex].filter(
      (item) => !(selectedItems[colIndex] || []).includes(item)
    );
    setColumns((prev) => {
      const updatedColumns = [...prev];
      updatedColumns[colIndex] = remainingItems;
      return updatedColumns;
    });
    setSelectedItems((prev) => ({ ...prev, [colIndex]: [] }));
  };

  const handleDeleteSingle = (colIndex: number, email: string) => {
    setColumns((prev) => {
      const updatedColumns = [...prev];
      updatedColumns[colIndex] = updatedColumns[colIndex].filter(
        (item) => item !== email
      );
      return updatedColumns;
    });
    setSelectedItems((prev) => ({
      ...prev,
      [colIndex]: (prev[colIndex] || []).filter((item) => item !== email),
    }));
  };

  const isRowSelected = (colIndex: number) =>
    (selectedItems[colIndex] || []).length === columns[colIndex].length;
  const onStartDate = (value: string) => {
    console.log(value)
  }
  const onEndDate = (value: any) => {
    console.log(value)
  }
  return (
    <div className="p-4">
      <div className="text-center my-5">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-4 mb-4">
            <DatePicker
              onChange={onStartDate}
              className='py-2 bg-white w-35 placeholder:text-black'
              placeholder='MM/DD/YYYY'
              suffixIcon={<CalendarIcon />}
              style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
            />
            <span className='text-black-4'>To</span>
            <DatePicker
              onChange={onEndDate}
              className='py-2 bg-white w-35 placeholder:text-black'
              placeholder='MM/DD/YYYY'
              suffixIcon={<CalendarIcon />}
              style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
            />
          </div>
        </div>
        <div className="overflow-x-auto rounded-md shadow-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#FFB200] text-black font-semibold">
                {columns.map((_, colIndex) => (
                  <React.Fragment key={colIndex}>
                    <th className="p-3 border-r border-l">No.</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">
                      <button onClick={() => handleDeleteSelected(colIndex)}>
                        <BsTrash3 />
                      </button>
                    </th>
                    <th className="p-3">
                      <input
                        type="checkbox"
                        checked={isRowSelected(colIndex)}
                        onChange={(e) => handleRowSelect(colIndex, e.target.checked)}
                      />
                    </th>
                  </React.Fragment>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: MAX_ROWS }).map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {columns.map((columnData, colIndex) => (
                    <React.Fragment key={colIndex}>
                      <td
                        className={`p-3 text-center text-black border-r border-l ${rowIndex % 2 === 0 ? "bg-[#FAEFD8]" : "bg-[#fff]"
                          }`}
                      >
                        {columnData[rowIndex] && (
                          <button className="bg-[#FFB200] px-3 py-1 rounded font-semibold">
                            {colIndex * MAX_ROWS + rowIndex + 1}
                          </button>
                        )}
                      </td>
                      <td
                        className={`p-3 text-black ${rowIndex % 2 === 0 ? "bg-[#FAEFD8]" : "bg-[#fff]"
                          }`}
                      >
                        {columnData[rowIndex] || ""}
                      </td>
                      <td
                        className={`p-3 text-center ${rowIndex % 2 === 0 ? "bg-[#FAEFD8]" : "bg-[#fff]"
                          }`}
                      >
                        {columnData[rowIndex] && (
                          <BsTrash3
                            color="red"
                            onClick={() =>
                              handleDeleteSingle(colIndex, columnData[rowIndex])
                            }
                          />
                        )}
                      </td>
                      <td
                        className={`p-3 text-center ${rowIndex % 2 === 0 ? "bg-[#FAEFD8]" : "bg-[#fff]"
                          }`}
                      >
                        {columnData[rowIndex] && (
                          <input
                            type="checkbox"
                            checked={
                              (selectedItems[colIndex] || []).includes(
                                columnData[rowIndex]
                              )
                            }
                            onChange={() =>
                              handleItemSelect(colIndex, columnData[rowIndex])
                            }
                          />
                        )}
                      </td>
                    </React.Fragment>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center mt-4">
          <p className="text-md mb-2 text-black font-bold">Showing 1 To 5 of 97 Results</p>
          <button className="px-4 py-2 border bg-[#FFB200] rounded-full text-black hover:bg-black hover:text-white transition-colors">
            More Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribesMenuItems;

