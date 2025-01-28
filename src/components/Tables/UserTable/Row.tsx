import Image from "next/image";
import React from "react";

const Row = () => {
  return (
    <tr className="dark:border-gray-700 border-b bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-600">
      <td className="w-4 p-4">
        <div className="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            className="border-gray-300 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 dark:border-gray-600 h-4 w-4 rounded bg-slate-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:focus:ring-blue-600"
          />
          <label htmlFor="checkbox-table-search-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <th
        scope="row"
        className="text-gray-900 flex items-center whitespace-nowrap px-6 py-4 dark:text-white"
      >
        <Image
          height={40}
          width={40}
          className="h-10 w-10 rounded-full"
          src="/docs/images/people/profile-picture-1.jpg"
          alt="Jese image"
        />
        <div className="ps-3">
          <div className="text-base font-semibold">Neil Sims</div>
          <div className="text-gray-500 font-normal">
            neil.sims@flowbite.com
          </div>
        </div>
      </th>
      <td className="px-6 py-4">React Developer</td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <div className="me-2 h-2.5 w-2.5 rounded-full bg-green-500"></div>{" "}
          Online
        </div>
      </td>
      <td className="px-6 py-4">
        <a
          href="#"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Edit user
        </a>
      </td>
    </tr>
  );
};

export default Row;
