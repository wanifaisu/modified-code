"use client";
import blogsData from "@/constants/blogs";
import Blog from "@/types/blogs";
import dynamic from "next/dynamic";
import { Poppins } from "next/font/google";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { BsTrash3 } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { RxSwitch } from "react-icons/rx";
import { TiArrowUnsorted } from "react-icons/ti";
import DateTimeSearch from "./DateTimeSearch";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

import { Button } from "antd";
import { BsTrashFill } from "react-icons/bs";
import {
  FaCloudUploadAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import { IoMdCloseCircle } from "react-icons/io";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

interface RowData {
  id: number;
  photo: File | null;
  name: string;
  title: string;
  tag: string;
  uploadDate: string;
  visible: boolean;
}

const CreateBlog = () => {
  const [editModal, setEditModal] = useState<Blog>(blogsData[0]);
  const editorRef = useRef(null);
  const [rows, setRows] = useState<RowData[]>([]);
  const [formData, setFormData] = useState<any>({
    id: Math.random(),
    photo: null,
    name: "",
    title: "",
    tag: "",
    uploadDate: new Date().toISOString().split("T")[0],
    visible: true,
  });
  const [modalTitle, setModalTitle] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [blogsDataArr, setBlogsDataArr] = useState(blogsData);
  const [editingRow, setEditingRow] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
  const [previewImage, setPreviewImage] = useState<File | null>(null);
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const hiddenIconInput = useRef<HTMLInputElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setFormData((prev: any) => ({ ...prev, thumbnail: fileUrl }));
    }
  };
  const handleIconClick = () => hiddenIconInput.current?.click();

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

  const handleDeleteRow = (id: number): void => {
    const filteredOrder = blogsDataArr.filter((_: any, i: number) => i !== id);
    setBlogsDataArr(filteredOrder);
    setRows((prev) => prev.filter((row) => row.id !== id));
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

  const availableIcons: { name: string; icon: JSX.Element }[] = [
    { name: "Facebook", icon: <FaFacebook /> },
    { name: "Twitter", icon: <FaTwitter /> },
    { name: "Instagram", icon: <FaInstagram /> },
    { name: "LinkedIn", icon: <FaLinkedin /> },
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setFormData((prev: any) => ({ ...prev, photo: fileUrl }));
    }
  };
  const handleShowModal = (title: string) => {
    setModalTitle(title);
    setIsModalVisible(true);
  };

  const handleOpenModal = (title: string) => {
    setModalTitle(title);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalTitle(null);
    setIsModalVisible(false);
    setFormData({
      id: Math.random(),
      photo: null,
      name: "",
      title: "",
      tag: "",
      uploadDate: new Date().toISOString().split("T")[0],
      visible: true,
    });
    setEditingRow(null);
  };

  const handleSaveOrEdit = (): void => {
    if (!formData.title || !formData.tag || !formData.thumbnail) {
      alert("Please fill in all required fields, including an image.");
      return;
    }

    if (editingRow !== null) {
      setBlogsDataArr((prev) =>
        prev.map((row, index) => (index === editingRow ? { ...formData } : row))
      );
      // Update the row in edit mode
      setRows((prev) =>
        prev.map((row, index) => (index === editingRow ? { ...formData } : row))
      );
    } else {
      setBlogsDataArr((prev) => [...prev, { ...formData, id: Math.random() }]);
      // Add a new row
      setRows((prev) => [...prev, { ...formData, id: Math.random() }]);
    }

    handleCloseModal();
  };

  const handleEditRow = (index: number): void => {
    setEditingRow(index);
    const row = blogsDataArr[index];
    setFormData(row);
    handleOpenModal("Edit Blog");
  };

  const handleToggleVisibility = (index: number): void => {
    setRows((prev) =>
      prev.map((row, i) =>
        i === index ? { ...row, visible: !row.visible } : row
      )
    );
  };
  return (
    <div className="overflow-x-auto mt-[-3rem]">
      <div className="p-6 rounded-md overflow-x-auto">
        <span>Banner</span>
        <div className="flex flex-row justify-between items-center gap-4">
          {/* Upload Preview Area */}
          <div className="flex flex-row justify-evenly items-center mb-8 mt-2">
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
                    // onClick={() => handleDeleteIconImage(index)}
                    className="absolute -top-3 -right-3 overflow-visible bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center"
                  >
                    <IoMdCloseCircle color="red" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <DateTimeSearch title="Create Blog" onOpenModal={handleOpenModal} />
        <table className="w-full text-center border-collapse rounded-t-[11.78px]">
          <thead className="rounded-t-[11.78px]">
            <tr className="bg-[#FFB200] text-black font-semibold rounded-t-[11.78px]">
              <th
                className={`p-3 text-center border-l-[#D5D6EA] ${poppins.className} font-semibold text-[15px] leading-[22.5px] text-[#000000]`}
              >
                No.
              </th>
              <th
                className={`p-3 text-center border-l-[#D5D6EA] ${poppins.className} font-semibold text-[15px] leading-[22.5px] text-[#000000]`}
              >
                Photo
              </th>
              <th
                className={`p-3 text-center border-l-[#D5D6EA] ${poppins.className} font-semibold text-[15px] leading-[22.5px] text-[#000000]`}
              >
                Title
              </th>
              <th
                className={`p-3 text-center border-l-[#D5D6EA] ${poppins.className} font-semibold text-[15px] leading-[22.5px] text-[#000000]`}
              >
                Tag
              </th>
              <th
                className={`p-3 text-center border-l-[#D5D6EA] ${poppins.className} font-semibold text-[15px] leading-[22.5px] text-[#000000]`}
              >
                Upload Date
              </th>
              <th
                className={`p-3 text-center ${poppins.className} font-semibold text-[15px] leading-[22.5px] text-[#000000]`}
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogsDataArr && blogsDataArr?.length > 0 ? (
              blogsDataArr.map((row, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-[#FAEFD8]" : "bg-[#fff]"
                  } md:text-base text-sm`}
                >
                  <td className="p-3 text-center">
                    <div className="w-[33.36px] h-[26.1px] bg-[#FFB200] mx-auto">
                      <span
                        className={`${poppins.className} font-bold text-[13.43px] leading-[20.15px] text-[#000000]`}
                      >
                        {index + 1}
                      </span>
                    </div>
                  </td>
                  <td className="p-3 border-l-[#D5D6EA] border-l-[0.79px]">
                    <div className="flex justify-center">
                      {row.thumbnail && (
                        <Image
                          src={row.thumbnail}
                          width={100}
                          height={50}
                          alt="Blog Image"
                          className="object-contain h-10"
                        />
                      )}
                    </div>
                  </td>
                  <td
                    className={`px-6 py-3 text-start border-l-[#D5D6EA] border-l-[0.79px] ${poppins.className} font-medium text-[15px] leading-[22.5px] text-[#000000]`}
                  >
                    {row.title}
                  </td>
                  <td
                    className={`p-3 text-center ${poppins.className} border-l-[#D5D6EA] border-l-[0.79px] font-normal text-[15px] leading-[22.5px] text-[#000000]`}
                  >
                    {row.tag}
                  </td>
                  <td
                    className={`p-3 whitespace-nowrap ${poppins.className} border-l-[#D5D6EA] border-l-[0.79px] font-normal text-[15px] leading-[22.5px] text-[#000000]`}
                  >
                    {row.dateUpload}
                  </td>
                  <td className="p-3 border-l-[#D5D6EA] border-l-[0.79px]">
                    <div className="flex justify-center gap-2">
                      <button onClick={handleReorder}>
                        <TiArrowUnsorted color="yellow" />
                      </button>
                      <button onClick={() => handleToggleVisibility(index)}>
                        <RxSwitch />
                      </button>
                      <button onClick={() => handleEditRow(index)}>
                        <CiEdit color="green" />
                      </button>
                      <button onClick={() => handleDeleteRow(index)}>
                        <BsTrash3 color="red" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6}>No Data Found</td>
              </tr>
            )}
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
      {isModalVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#ccccff] p-8 rounded shadow-lg w-100% mt-16">
            <div className="flex justify-end">
              <button
                className="relative bottom-5 left-43 text-gray-700 text-lg"
                onClick={handleCloseModal}
              >
                ✖
              </button>
            </div>
            <div className="mb-4 flex justify-between">
              <button
                className={`${poppins.className} font-semibold text-base bg-[#ffb200] w-25 max-h-16 rounded-[8px] text-[#000000] dark:bg-slate-800`}
                onClick={handleClick}
              >
                Photo &gt;
              </button>
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
                ref={hiddenFileInput}
              />
              <div className="flex flex-row gap-3 ml-4">
                <div className="relative w-[101px] h-20 bg-[#CCCCFF33] rounded shadow-xl">
                  {formData?.thumbnail && (
                    <Image
                      src={formData?.thumbnail}
                      width={50}
                      height={56}
                      alt="Preview"
                      className="mt-2"
                    />
                  )}
                  <button
                    onClick={() => {}}
                    className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center"
                  >
                    <BsTrash3 color="red" />
                  </button>
                </div>
              </div>
              <button
                className="bg-[#ffb200] w-44 h-[45px] rounded-lg text-[#000000] dark:bg-slate-800"
                onClick={handleSaveOrEdit}
              >
                {editingRow !== null ? "Edit" : "Save"}
              </button>
            </div>
            <div className="flex flex-col w-150">
              <span className="flex flex-col">
                <label
                  className={`${poppins.className} font-medium text-[20px] leading-[31px] text-[#00000099]`}
                >
                  Title
                </label>
                <input
                  type="text"
                  className="rounded w-80 h-13 px-3 border border-[#000000]"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData((prev: any) => ({
                      ...prev,
                      title: e.target.value,
                    }))
                  }
                />
              </span>
              <span className="flex flex-col mt-4">
                <label
                  className={`${poppins.className} font-medium text-[20px] leading-[31px] text-[#00000099]`}
                >
                  Tag
                </label>
                <input
                  type="text"
                  className="rounded w-80 h-13 px-3 border border-[#000000]"
                  value={formData.tag}
                  onChange={(e) =>
                    setFormData((prev: any) => ({
                      ...prev,
                      tag: e.target.value,
                    }))
                  }
                />
              </span>
              <div className="bg-white mt-6 p-2 rounded-[10px] border border-[#000000]">
                <label
                  className={`${poppins.className} font-normal text-[16px] leading-[31px] text-[#00000099]`}
                >
                  Description
                </label>
                <JoditEditor
                  ref={editorRef}
                  value={formData.description}
                  config={{
                    height: 150,
                  }}
                  onBlur={(newContent) =>
                    setFormData((prev: any) => ({
                      ...prev,
                      description: newContent,
                    }))
                  }
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateBlog;
