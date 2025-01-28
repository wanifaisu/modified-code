
import React, { useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { CalendarIcon, LoadingIcon } from '@/utils/Icons'
import { DatePicker } from "antd";

interface RowData {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  date: string;
  selected: boolean;
}

const ContactUsDropDownTable: React.FC = () => {
  const [data, setData] = useState<RowData[]>([
    { id: 1, name: "Jack", email: "abc@gmail.com", phone: "+1 45698745", message: "Some message", date: "02-03-2018", selected: false },
    { id: 2, name: "Jill", email: "xyz@gmail.com", phone: "+1 12345678", message: "Another message", date: "05-06-2020", selected: false },
    { id: 3, name: "John", email: "pqr@gmail.com", phone: "+1 78912345", message: "Yet another message", date: "01-01-2021", selected: false },
  ]);

  const [selectAll, setSelectAll] = useState(false);

  // Handle "Select All" toggle
  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setData(data.map((item) => ({ ...item, selected: newSelectAll })));
  };

  // Handle individual checkbox toggle
  const handleCheckboxChange = (id: number) => {
    setData(data.map((item) =>
      item.id === id ? { ...item, selected: !item.selected } : item
    ));
  };

  // Handle individual row removal
  const handleRemove = (id: number) => {
    setData(data.filter((item) => item.id !== id));
  };
  const onStartDate = (value: string) => {
    console.log(value)
  }
  const onEndDate = (value: any) => {
    console.log(value)
  }

  return (
    <div className="p-8">
      {/* Date Range Picker and Search */}
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

      {/* Table */}
      <div className="p-2">
        <table className="w-full shadow-lg text-left border-collapse">
          <thead>
            <tr className="bg-[#FFB200] text-black font-bold">
              <th className="p-3">No.</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone No</th>
              <th className="p-3">Message</th>
              <th className="p-3">Date</th>
              <th className="p-3 text-center">
                <button onClick={handleSelectAll}>📋</button>
              </th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} className={`${index % 2 === 0 ? "bg-[#FAEFD8]" : "bg-[#fff]"}`}>
                <td className="p-3 text-center text-black border-r">
                  <button className="bg-[#FFB200] px-3 py-1 square-half font-semibold">
                    {index + 1}
                  </button>
                </td>
                <td className="p-3 text-black border-r">{item.name}</td>
                <td className="p-3 text-black whitespace-nowrap border-r">{item.email}</td>
                <td className="p-3 text-black whitespace-nowrap border-r">{item.phone}</td>
                <td className="p-3 text-black text-sm border-r">{item.message}</td>
                <td className="p-3 text-black whitespace-nowrap border-r">{item.date}</td>
                <td className="p-3 text-center border-r">
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                </td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="flex items-center gap-1 bg-[#ff4c4c] text-black px-4 py-1 rounded-full font-semibold"
                  >
                    <RiDeleteBin6Line /> Delete
                  </button>
                </td>
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
  );
};

export default ContactUsDropDownTable;




