// src\app\(withLayoutC)\c\bankAccount\page.tsx
"use client";
import ICTable from "@/components/ui/ICTable";
import { removeBank, statusChange } from "@/redux/fetures/bank/bankSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { IBank } from "@/types/bank";
import { Button, Image, Select, Switch, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

import AddBank from "./_components/AddBank";
import Date from "./_components/Date";
import UpdateBank from "./_components/UpdateBank";

const { Option } = Select;

const BankListPage = () => {
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const dispatch = useAppDispatch();
  const bankDatas = useAppSelector((state) => state.bank);
  const handleStatusChange = (id: string, active: boolean) => {
    dispatch(statusChange({ id, active }));
  };

  const handleDeleteBank = (id: string) => {
    dispatch(removeBank({ id }));
    message.open({
      type: "success",
      content: "Admin deleted successfully",
    });
  };
  let columns = [
    { title: "No.", dataIndex: "sl" },
    { title: "Bank and Wallet Name", dataIndex: "bankName" },
    {
      title: "Bank and Wallet Logo",
      dataIndex: "bankLogo",
      render: (text: string) => (
        <Image
          src={text}
          alt="Bank Logo"
          width={50}
          height={50}
          style={{ objectFit: "contain" }}
        />
      ),
    },
    {
      title: "Bank and Wallet QR Code",
      dataIndex: "qrCode",
      render: (text: string) => (
        <Image
          src={text}
          alt="QR Code"
          width={50}
          height={50}
          style={{ objectFit: "contain" }}
        />
      ),
    },
    { title: "Bank and Wallet Account Info", dataIndex: "accountInfo" }, // Corrected dataIndex
    { title: "Tax Rate", dataIndex: "taxInfo" },
    { title: "Currency Support", dataIndex: "currency" },
    {
      title: "See",
      render: (data: IBank) => {
        return (
          <div className="flex w-[120px] items-center justify-between">
            <Switch
              style={{ background: "#172554" }}
              size="small"
              checked={data.see}
              onChange={(checked) => handleStatusChange(data.sl, checked)}
            />
            <UpdateBank updateData={data} />
            <RiDeleteBin5Line
              size={24}
              color="red"
              onClick={() => handleDeleteBank(data.sl)}
            />
          </div>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  return (
    <div className="w-full p-4 md:p-6 2xl:p-10">
      <div className="flex item-center dark:text-white mb-3 text-black justify-between gap-3">
        <Date />
        <Link href={"/c/createAdmin"}>
          <Button
            size={"middle"}
            className="text-black bg-transparent border border-[#ffb200] dark:text-white"
          >
            Admin
          </Button>
        </Link>
        <AddBank />
      </div>

      <ICTable
        loading={false}
        columns={columns}
        dataSource={bankDatas}
        pageSize={size}
      />
      <div className="text-center mt-4">
        <p className="text-md mb-2 text-black font-bold">
          Showing 1 To 5 of 97 Results
        </p>
        <button className="px-4 py-2 border bg-[#FFB200] rounded-full text-black hover:bg-black hover:text-white transition-colors">
          More Results
        </button>
      </div>
    </div>
  );
};

export default BankListPage;
