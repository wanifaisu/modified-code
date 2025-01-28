"use client";
import CustomForm from "@/components/Form/Form";
import { addAdmin } from "@/redux/fetures/admin/adminSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { CloudUploadOutlined } from "@ant-design/icons";
import { Button, Image, Modal, Upload } from "antd";
import { useState } from "react";
import FullHeightTreeSelect from "../CustomTree";
import treeData from "./data";

const AddSubAdminModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileList, setFileList] = useState<any[]>([]);
  const [signUpCode, setSignUpCode] = useState("");
  const dispatch = useAppDispatch();
  const adminDatas = useAppSelector((state) => state.admin);

  const generateSignUpURL = () => {
    const baseURL = "https://example.com/signup";
    const uniqueCode = Math.random().toString(36).substring(2, 15);
    return `${baseURL}?code=${uniqueCode}`;
  };

  const onSubmit = async (data: any) => {
    const { password, rePassword, ...remainingData } = data;
    const lastAdminData = adminDatas.at(-1);
    const lastAdminId: string = lastAdminData?.sl as string;
    const string = parseInt(lastAdminId.replace(/\D/g, ""));
    const addAdminData = {
      id: `admin${Number(string) + 1}`,
      ...remainingData,
      active: false,
    };
    dispatch(addAdmin(addAdminData));
    closeModal();
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleUploadChange = ({ fileList }: any) => {
    setFileList(fileList);
  };

  return (
    <div>
      <Button
        onClick={showModal}
        style={{ background: "#ffb200", color: "black", fontWeight: "400" }}
        type="primary"
        size={"middle"}
        className="dark:text-white"
      >
        Add Sub-Admin
      </Button>
      <Modal
        open={isModalOpen}
        onCancel={closeModal}
        footer={null}
        width={600}
        centered
        bodyStyle={{ backgroundColor: "#ccccff", borderRadius: "8px" }}
        className="bg-[#ccccff]"
      >
        <CustomForm className="w-full bg-[#ccccff]" onSubmit={onSubmit}>
          <div className="p-6">
            <p className="mb-5 text-center text-xl font-semibold">
              Add Sub Admin
            </p>
            <div className="grid grid-cols-1 gap-4">
              {/* Photo Upload */}
              {/* <div className="flex items-center">
                  <div className="bg-yellow-500 text-black w-[30%] p-2 text-center rounded-l-md">Photo</div>
                  <div className="flex-grow p-2 rounded-r-md flex items-center justify-start space-x-4">
                    <Upload
                      listType="picture"
                      fileList={fileList}
                      onChange={handleUploadChange}
                      beforeUpload={() => false} // Prevent auto-upload
                    >
                      <CloudUploadOutlined style={{ fontSize: 20, cursor: "pointer" }} >
                    </Upload>
                    <UserOutlined style={{ fontSize: 20, color: "red" }} />
                  </div>
                </div> */}

              <div className="flex items-center">
                <div className="bg-[#FFB200] text-black w-[30%] p-2 text-center rounded-l-xl">
                  Photo
                </div>
                <div className="flex-grow p-2 rounded-r-xl flex flex-col items-start space-y-2">
                  <div className="flex items-center space-x-4">
                    <Upload
                      listType="picture-card"
                      fileList={fileList}
                      onChange={handleUploadChange}
                      beforeUpload={() => false}
                      showUploadList={false}
                    >
                      <CloudUploadOutlined
                        style={{ fontSize: 20, cursor: "pointer" }}
                      />
                    </Upload>
                    {fileList.length > 0 && (
                      <Image
                        src={URL.createObjectURL(fileList[0].originFileObj)}
                        width={50}
                        height={50}
                        alt="Uploaded"
                        className="w-12 h-12 rounded-full"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Input Fields */}
              {[
                { label: "Name", type: "text", name: "name" },
                { label: "Username", type: "text", name: "username" },
                { label: "Gmail", type: "email", name: "email" },
                { label: "PIN Code", type: "password", name: "pin" },
                { label: "Password", type: "password", name: "password" },
              ].map((field) => (
                <div key={field.name} className="flex items-center">
                  <div className="bg-[#FFB200] text-black w-[30%] p-2 text-center rounded-l-xl">
                    {field.label}
                  </div>
                  <input
                    type={field.type}
                    name={field.name}
                    className="bg-white flex-grow p-2 rounded-r-xl outline-none"
                  />
                </div>
              ))}

              {/* Login URL */}
              <div className="flex items-center">
                <div className="bg-[#FFB200] text-black w-[30%] p-2 text-center rounded-l-xl">
                  Login URL
                </div>
                <div className="bg-white flex-grow p-2 rounded-r-xl flex items-center justify-between">
                  <input
                    type="text"
                    name="signUpCode"
                    value={signUpCode}
                    onChange={(e) => setSignUpCode(e.target.value)}
                    className="flex-grow outline-none"
                  />
                  <Button
                    size="small"
                    onClick={() => setSignUpCode(generateSignUpURL())}
                    className="ml-2 bg-[#FFB200]"
                  >
                    URL Generate
                  </Button>
                </div>
              </div>

              {/* Access */}
              <div className="flex items-center">
                <div className="bg-[#FFB200] text-black w-[30%] h-[3rem] p-3 text-center rounded-l-2xl">
                  Access
                </div>
                <div className="flex-grow p-2 rounded-r-2xl bg-white h-[3rem]">
                  <FullHeightTreeSelect treeData={treeData} />
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex justify-center mt-4 p-1">
                <Button
                  className="mr-4 w-[40%]  h-[110%] rounded-xl"
                  onClick={closeModal}
                >
                  Cancel
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-[40%] bg-[#FFB200] h-[110%] rounded-xl"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </CustomForm>
      </Modal>
    </div>
  );
};

export default AddSubAdminModal;
