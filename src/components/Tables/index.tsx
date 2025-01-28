import React from "react";

type TableProps = {
  loading?: boolean;
  columns: any;
  dataSource: any;
  pageSize?: number;
  totalPages?: number;
  showPagination?: boolean;
};

const Table = ({
  loading = false,
  columns,
  dataSource,
  pageSize,
  totalPages,

  showPagination = true,
}: TableProps) => {
  return (
    <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-left text-sm text-slate-500 dark:text-slate-400 rtl:text-right">
        <thead className="bg-slate-50 text-xs uppercase text-slate-700 dark:bg-slate-700 dark:text-slate-400">
          <tr>
            {columns?.map((item: any) => (
              <th scope="col" className="p-4 text-center" key={item?.dataIndex}>
                {item?.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* <Row />
            <Row /> */}

          {dataSource?.map((dataItem: any, i: any) => {
            return (
              <tr
                key={i}
                className="dark:border-gray-700 border-b bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-600"
              >
                {columns?.map((columnItem: any) => {
                  return (
                    <td
                      scope="col"
                      className="w-4 p-4 text-center"
                      key={dataItem.dataIndex}
                    >
                      {columnItem?.render
                        ? columnItem.render(dataItem)
                        : dataItem[columnItem?.dataIndex]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
