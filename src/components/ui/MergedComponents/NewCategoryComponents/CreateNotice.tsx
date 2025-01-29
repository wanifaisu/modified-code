import noticeData from "@/constants/noticeData";
import { Button, Input, Select } from "antd";
import { Poppins } from "next/font/google";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { BsArrowDown, BsTrash3, BsTrashFill } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { FaCloudUploadAlt, FaRegFilePdf } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { RxSwitch } from "react-icons/rx";
import { TiArrowUnsorted } from "react-icons/ti";
import DateTimeSearch from "./DateTimeSearch";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const { Option } = Select;

interface Notice {
  title?: string;
  updatedDate: string;
  status: string;
  documents: string[];
  visible: boolean;
}

const CreateNotice: React.FC = () => {
  const [notices, setNotices] = useState<Notice[]>(noticeData);
  const [newNotice, setNewNotice] = useState<Notice>({
    title: "",
    updatedDate: "",
    status: "ongoing",
    documents: [],
    visible: true,
  });
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editModal, setEditModal] = useState<any>(null);
  const [editingRow, setEditingRow] = useState<number | null>(null);
  const [modalTitle, setModalTitle] = useState<any>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
  const [previewImage, setPreviewImage] = useState<File | null>(null);
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [formData, setFormData] = useState<any>([]);
  const [rows, setRows] = useState<any>({});
  const hiddenIconInput = useRef<HTMLInputElement>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormData((prev: any) => ({ ...prev, icon: file }));
    }
  };

  const handleOpenModal = (title: string) => {
    setModalTitle(title);
    setIsModalVisible(true);
  };

  const handleIconImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files && files[0]) {
      setPreviewImage(files[0]); // Set the first uploaded image for preview
    }
  };

  const handleDeleteIconPreview = () => {
    setPreviewImage(null); // Remove the preview image
  };

  const handleSaveIconImage = () => {
    if (previewImage) {
      setUploadedImages((prev) => [...prev, previewImage]);
      setPreviewImage(null); // Clear the preview image after saving
    }
  };

  const handleDeleteIconImage = (index: number) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleCloseModal = () => {
    setModalTitle(null);
    setIsModalVisible(false);
    setFormData({
      id: Math.random(),
      icon: null,
      name: "",
      title: "",
      tag: "",
      uploadDate: new Date().toISOString().split("T")[0],
      visible: true,
    });
    setEditingRow(null);
  };

  const handleSaveOrEdit = (): void => {
    // Validate required fields
    if (!formData.title || !formData.tag || !formData.icon) {
      alert("Please fill in all required fields, including an image.");
      return;
    }

    if (editingRow !== null) {
      // Update the row in edit mode
      setRows((prev: any) =>
        prev.map((row: any, index: any) =>
          index === editingRow ? { ...formData } : row
        )
      );
    } else {
      // Add a new row
      setRows((prev: any) => [...prev, { ...formData, id: Math.random() }]);
    }

    handleCloseModal();
  };

  const handleEditRow = (index: number): void => {
    setEditingRow(index);
    // setEditModal(templatesDataArray[index]);
    handleOpenModal("Edit Blog");
  };

  const handleDeleteRow = (id: number): void => {
    setRows((prev: any) => prev.filter((_: any, index: any) => index !== id));
  };

  const handleToggleVisibility = (index: number): void => {
    setRows((prev: any) =>
      prev.map((row: any, i: any) =>
        i === index ? { ...row, visible: !row.visible } : row
      )
    );
  };

  const handleReorder = () => {
    const sortedRows = [...rows];
    if (sortOrder === "asc") {
      sortedRows.sort((a, b) => b.title.localeCompare(a.title));
      setSortOrder("desc");
    } else {
      sortedRows.sort((a, b) => a.title.localeCompare(b.title));
      setSortOrder("asc");
    }
    setRows(sortedRows);
  };

  const handleIconClick = () => hiddenIconInput.current?.click();

  const handleAddOrEditNotice = () => {
    if (editIndex !== null) {
      // Edit existing notice
      setNotices((prev) =>
        prev.map((notice, index) =>
          index === editIndex ? { ...newNotice } : notice
        )
      );
    } else {
      // Add new notice
      setNotices((prev) => [...prev, { ...newNotice, id: Date.now() }]);
    }
    setNewNotice({
      title: "",
      updatedDate: "",
      status: "ongoing",
      documents: [],
      visible: true,
    });
    setEditIndex(null);
  };

  const handleDelete = (id: number) => {
    setNotices((prev) => prev.filter((notice, index) => index !== id));
  };

  const handleSortRows = (id: number): void => {
    setNotices((prev) => [...prev].reverse());
  };

  const handleEdit = (index: number) => {
    setNewNotice({ ...notices[index] });
    setEditIndex(index);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const filePreviews = files.map((file) => URL.createObjectURL(file));
    setNewNotice({ ...newNotice, documents: filePreviews });
  };

  return (
    <>
      <div className="p-1 mt-[-4rem]">
        <div className="p-3 rounded-md overflow-x-auto">
          <span>Banner</span>
          <div className="flex flex-row justify-between items-center gap-4">
            {/* Upload Preview Area */}
            <div className="flex flex-row justify-evenly items-center mb-8">
              <div
                className="relative flex items-center justify-center w-[89px] h-[65px] bg-white rounded cursor-pointer"
                onClick={!previewImage ? handleIconClick : undefined}
              >
                {previewImage ? (
                  <>
                    <Image
                      src={URL.createObjectURL(previewImage)}
                      alt="Preview"
                      className="rounded-lg object-cover"
                      width={47}
                      height={47}
                    />
                    <button
                      onClick={handleDeleteIconPreview}
                      className="absolute top-1 right-[2px] bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center"
                    >
                      <BsTrashFill color="red" />
                    </button>
                  </>
                ) : (
                  <FaCloudUploadAlt size={40} className="" />
                )}
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  style={{ display: "none" }}
                  ref={hiddenIconInput}
                  onChange={handleIconImageUpload}
                />
              </div>

              {/* Save Button */}
              <Button
                className={`w-[95px] h-12 bg-[#ffb200]  border border-[#FFB200] text-black rounded-lg px-4 ml-8`}
                onClick={handleSaveIconImage}
              >
                Save
              </Button>
              <div
                ref={scrollContainerRef}
                className="flex items-center gap-2 overflow-x-hidden ml-12"
                style={{ scrollBehavior: "smooth" }}
              >
                {uploadedImages.map((image, index) => (
                  <div key={index} className="relative w-[50px] h-[65px]">
                    <Image
                      src={URL.createObjectURL(image)}
                      alt={`Uploaded ${index}`}
                      className="rounded object-cover mt-2"
                      width={48.7}
                      height={47.2}
                    />
                    <button
                      onClick={() => handleDeleteIconImage(index)}
                      className="absolute -top-3 -right-3 overflow-visible bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center"
                    >
                      <IoMdCloseCircle color="red" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <DateTimeSearch onOpenModal={handleOpenModal} />
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="bg-[#FFB200] text-black font-semibold">
                <th
                  className={`p-3 text-center border-r border-black border-opacity-50 ${poppins.className} font-semibold text-[15px] leading-[22.5px] text-[#000000]`}
                >
                  No
                </th>
                <th
                  className={`p-3 text-center border-r border-black border-opacity-50 ${poppins.className} font-semibold text-[15px] leading-[22.5px] text-[#000000]`}
                >
                  Notice Title
                </th>
                <th
                  className={`p-3 text-center border-r border-black border-opacity-50 whitespace-nowrap ${poppins.className} font-semibold text-[15px] leading-[22.5px] text-[#000000]`}
                >
                  Updated Date
                </th>
                <th
                  className={`p-3 text-center border-r border-black border-opacity-50 whitespace-nowrap ${poppins.className} font-semibold text-[15px] leading-[22.5px] text-[#000000]`}
                >
                  Status
                </th>
                <th
                  className={`p-3 text-center border-r border-black border-opacity-50 whitespace-nowrap ${poppins.className} font-semibold text-[15px] leading-[22.5px] text-[#000000]`}
                >
                  Documents
                </th>
                <th
                  className={`p-3 text-center whitespace-nowrap ${poppins.className} font-semibold text-[15px] leading-[22.5px] text-[#000000]`}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#ffe5b4]">
                <td className="p-3 border-r border-black border-opacity-50"></td>
                <td className="p-3 border-r border-black border-opacity-50">
                  <Input
                    placeholder="Title"
                    value={newNotice.title}
                    onChange={(e) =>
                      setNewNotice({ ...newNotice, title: e.target.value })
                    }
                    className="text-center placeholder-black"
                  />
                </td>
                <td className="p-3 border-r border-black border-opacity-50">
                  <input
                    type="date"
                    value={newNotice.updatedDate}
                    onChange={(e) =>
                      setNewNotice({
                        ...newNotice,
                        updatedDate: e.target.value,
                      })
                    }
                    className="px-4 py-2 rounded border border-gray-300 bg-white text-center w-full"
                    placeholder="MM / DD / YYYY"
                  />
                </td>
                <td className="p-3 border-r border-black border-opacity-50">
                  <Select
                    value={newNotice.status}
                    onChange={(value) =>
                      setNewNotice({ ...newNotice, status: value })
                    }
                    className={`w-full text-center rounded ${
                      newNotice.status === "ongoing"
                        ? "text-green-500 border-green-500"
                        : newNotice.status === "expired"
                        ? "text-red-500 border-red-500"
                        : "text-blue-500 border-blue-500"
                    }`}
                    suffixIcon={<BsArrowDown />}
                  >
                    <Option value="ongoing" className="text-green-500">
                      Ongoing
                    </Option>
                    <Option value="expired" className="text-red-500">
                      Expired
                    </Option>
                    <Option value="coming soon" className="text-blue-500">
                      Coming Soon
                    </Option>
                  </Select>
                </td>
                <td className="p-3 border-r border-black border-opacity-50">
                  <div className="flex items-center justify-center">
                    {newNotice.documents.length ? (
                      newNotice.documents.map((doc, i) => (
                        <Image
                          key={i}
                          src={doc}
                          alt="preview"
                          width={30}
                          height={30}
                          className="object-cover mx-1"
                        />
                      ))
                    ) : (
                      <label className="cursor-pointer">
                        <FaCloudUploadAlt size={30} color={"black"} />
                        <input
                          type="file"
                          multiple
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                </td>
                <td className="p-3">
                  <button
                    className="bg-orange-500 text-black text-center rounded-[5px] w-22 h-6 mt-3"
                    onClick={handleAddOrEditNotice}
                  >
                    {editIndex !== null ? "Edit" : "Add"}
                  </button>
                </td>
              </tr>
              {notices.map((notice, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-[#fff]" : "bg-[#FAEFD8]"
                  } md:text-base text-sm`}
                >
                  <td className="p-3 text-center border-r border-black border-opacity-50">
                    <div className="w-[33.36px] h-[26.1px] bg-[#FFB200] mx-auto">
                      <span
                        className={`${poppins.className} font-bold text-[13.43px] leading-[20.15px] text-[#000000]`}
                      >
                        {index + 1}
                      </span>
                    </div>
                  </td>
                  <td
                    className={`p-3 text-center border-r border-black border-opacity-50 ${poppins.className} font-normal text-[14.13px] leading-[21.2px] text-[#000000]`}
                  >
                    {notice.visible ? notice.title : "*****"}
                  </td>
                  <td
                    className={`p-3 text-center border-r border-black border-opacity-50 ${poppins.className} font-normal text-[14.13px] leading-[21.2px] text-[#000000]`}
                  >
                    {notice.updatedDate}
                  </td>
                  <td className="p-3 border-r border-black border-opacity-50">
                    <button
                      className={`border-[2px] w-[155px] h-[23px] rounded-[5px] pb-[1.5rem] ${
                        notice.status.toLowerCase() === "ongoing"
                          ? "border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                          : notice.status.toLowerCase() === "expired"
                          ? "border-red text-red hover:bg-red hover:text-white"
                          : "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                      }`}
                    >
                      {notice.visible ? notice.status : "*****"}
                    </button>
                  </td>
                  <td className="p-3 border-r border-black border-opacity-50">
                    <div className="flex justify-center gap-2">
                      {notice.documents.map((doc: any, i) => (
                        <FaRegFilePdf color="red" size={33} key={doc?.id} />
                      ))}
                    </div>
                  </td>
                  <td className="p-3 border-r border-black border-opacity-50">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleSortRows(index)}
                        className="flex items-center justify-center rounded-full w-8 h-8"
                      >
                        <TiArrowUnsorted />
                      </button>

                      <button
                        onClick={() => handleToggleVisibility(index)}
                        className="flex items-center justify-center rounded-full w-8 h-8"
                      >
                        <RxSwitch />
                      </button>

                      <button
                        onClick={() => handleEdit(index)}
                        className="flex items-center justify-center rounded-full w-8 h-8"
                      >
                        <CiEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="flex items-center justify-center rounded-full w-8 h-8"
                      >
                        <BsTrash3 color="red" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col w-full items-center justify-center my-7 gap-5">
          <p className="font-inter font-semibold text-base leading-[19.36px] text-black-4">
            Showing 1 to 5 of 97 results
          </p>
          <div className="rounded-[10px] border-[0.89px] border-white bg-[#FFB200] text-[#231F20] font-inter font-semibold text-[13px] leading-[15.73px] py-2 px-4">
            More Results
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNotice;
