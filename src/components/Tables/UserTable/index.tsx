import Image from "next/image";
import React from "react";
import Row from "./Row";

const UserTable = () => {
  return (
    <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-left text-sm text-slate-500 dark:text-slate-400 rtl:text-right">
        <thead className="bg-slate-50 text-xs uppercase text-slate-700 dark:bg-slate-700 dark:text-slate-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 bg-slate-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:ring-offset-slate-800 dark:focus:ring-blue-600 dark:focus:ring-offset-slate-800 "
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Position
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <Row />
          <Row />
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
