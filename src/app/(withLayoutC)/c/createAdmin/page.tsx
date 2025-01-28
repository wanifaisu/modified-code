"use client";
import ICTable from "@/components/ui/ICTable";
import { removeAdmin, statusChange } from "@/redux/fetures/admin/adminSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { IAdmin } from "@/types/admin";
import { Button, Image, Switch, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import AddSubAdminModal from "./_components/AddSubAdmin";
import Date from "./_components/Date";
import UpdateAdminModal from "./_components/UpdateSubAdmin";

const AdminListPage = () => {
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [hideSensitive, setHideSensitive] = useState<boolean>(false);
  // New state for toggling sensitive data
  const dispatch = useAppDispatch();
  const adminDatas = useAppSelector((state) => state.admin);

  const handleStatusChange = (id: string, active: boolean) => {
    dispatch(statusChange({ id, active }));
  };

  const handleDeleteAdmin = (id: string) => {
    dispatch(removeAdmin({ id }));
    message.open({
      type: "success",
      content: "Admin deleted successfully",
    });
  };

  let columns = [
    { title: "No", dataIndex: "sl" },
    {
      title: "Photo",
      dataIndex: "photo",
      render: (text: string) => (
        <Image
          src={text}
          alt="admin photo"
          width={50}
          height={50}
          style={{ objectFit: "contain" }}
        />
      ),
    },
    { title: "Name", dataIndex: "name" },
    { title: "User Name", dataIndex: "userName" },
    {
      title: "G-mail",
      dataIndex: "email",
      render: (text: string) => (hideSensitive ? "*****@*****.com" : text),
    },
    {
      title: "Login URL",
      dataIndex: "url",
      render: (text: string) => (hideSensitive ? "***" : text),
    },
    {
      title: "Password",
      dataIndex: "password",
      render: (text: string) => (hideSensitive ? "*****" : text),
    },
    {
      title: "Access",
      dataIndex: "accessList",
    },
    {
      title: "Action",
      render: (data: IAdmin) => {
        return (
          <div className="flex items-center justify-start">
            <Switch
              style={{
                background: data?.active ? "green" : "gray",
                marginRight: "2px",
              }}
              size="small"
              checked={data.active}
              onChange={(checked) => handleStatusChange(data.sl, checked)}
            />
            <UpdateAdminModal updateData={data} />
            <RiDeleteBin5Line
              size={18}
              color="red"
              onClick={() => handleDeleteAdmin(data.sl)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="w-full p-4 md:p-6 2xl:p-10">
      <div className="flex item-center dark:text-white mb-3 text-black justify-between gap-3">
        <Date />

        <Link href={"/c/bankAccount"}>
          <Button
            size={"large"}
            className="text-black bg-transparent border border-[#ffb200] dark:text-white font-medium"
          >
            Bank & Wallet
          </Button>
        </Link>

        <AddSubAdminModal />
      </div>

      <ICTable loading={false} columns={columns} dataSource={adminDatas} />
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

export default AdminListPage;
