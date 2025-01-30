import { Button } from "antd";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { BsTrash3, BsTrashFill } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { RxSwitch } from "react-icons/rx";
import { TiArrowUnsorted } from "react-icons/ti";
import DateTimeSearch from "./DateTimeSearch";

import Templates from "@/types/templates";
import axios from "axios";
import { Trash } from "lucide-react";
import dynamic from "next/dynamic";
import { Poppins } from "next/font/google";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import templatesDataArray from "../../../../constants/templatesData";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const MAX_UPLOAD_LIMIT = 3;
interface RowData {
  images: File[];
  title: string;
  projectPlanning: string;
  price: string;
  uploadDate: string;
  description: string;
  visible?: boolean;
}
interface FormData {
  images: File[];
  title: string;
  price: string;
  description: string;
  projectPlanning: string;
  uploadDate: string;
  visible?: boolean;
}

const CreateArchitecture = () => {
  const [editModal, setEditModal] = useState<Templates>({
    images: "",
    title: "",
    projectPlanning: "",
    tag: "",
    price: "",
    uploadDate: "",
    visible: false,
  });
  const [modalTitle, setModalTitle] = useState<string | null>(null);
  const [rows, setRows] = useState<RowData[]>([]);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [architectureArr, setArchitectureArr] =
    useState<any>(templatesDataArray);
  const [formData, setFormData] = useState<FormData>({
    images: [],
    title: "",
    price: "",
    description: "",
    projectPlanning: "",
    uploadDate: new Date().toISOString().split("T")[0],
    visible: true,
  });
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const editorRef = useRef(null);

  const handleClick = () => hiddenFileInput.current?.click();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files);
      if (formData.images.length + newImages.length > MAX_UPLOAD_LIMIT) {
        alert(`You can only upload up to ${MAX_UPLOAD_LIMIT} images.`);
        return;
      }
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...newImages],
      }));
    }
  };

  const handleDeleteImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleOpenModal = (title: string) => setModalTitle(title);

  const handleCloseModal = () => {
    setModalTitle(null);
    setFormData({
      images: [],
      title: "",
      price: "",
      description: "",
      projectPlanning: "",
      uploadDate: new Date().toISOString().split("T")[0],
    });
    setEditingIndex(null);
  };

  const handleSave = () => {
    if (
      !formData.title ||
      !formData.price ||
      !formData.description ||
      !formData.projectPlanning ||
      formData.images.length === 0
    ) {
      alert("All fields, including at least one image, are required.");
      return;
    }

    if (editingIndex !== null) {
      setRows((prev) => {
        const updatedRows = [...prev];
        updatedRows[editingIndex] = formData;
        return updatedRows;
      });
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/update/architecture`,
          formData
        )
        .then((res) => {
          console.log(res.data);
        });
    } else {
      setRows((prev) => [...prev, formData]);
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/create/architecture`,
          formData
        )
        .then((res) => {
          console.log(res.data);
        });
    }
    handleCloseModal();
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setFormData({ ...architectureArr[index] });
    setEditModal({ ...templatesDataArray[index] });
    handleOpenModal("Edit");
  };

  const handleToggleVisibility = (index: number): void => {
    setRows((prev) =>
      prev.map((row, i) =>
        i === index ? { ...row, visible: !row.visible } : row
      )
    );
  };

  const handleSortRows = (): void => {
    setRows((prevRows) => [...prevRows].reverse());
  };

  const handleDeleteRow = (index: number) => {
    setRows((prev) => prev.filter((_, i) => i !== index));
    setArchitectureArr((prev: any) =>
      prev.filter((_: any, i: any) => i !== index)
    );
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/delete/architecture`,
        rows[index]
      )
      .then((res) => {
        console.log(res.data);
      });
  };
  const [previewImage, setPreviewImage] = useState<File | null>(null);
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const hiddenIconInput = useRef<HTMLInputElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  const handleIconClick = () => hiddenIconInput.current?.click();

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/retrieve/all/architecture/{adminid}`
      )
      .then((res) => {
        setRows(res.data);
      });
  }, [rows]);
  console.error(architectureArr, "architectureArr");
  return (
    <div className="p-4 mt-[-4rem]">
      <span>Banner</span>
      <div className="flex flex-row justify-between items-center gap-4">
        {/* Upload Preview Area */}
        <div className="flex flex-row justify-evenly items-center">
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

        {/* Uploaded Images */}

        {/* Horizontal Scroll Buttons */}
      </div>
      <div className="flex justify-between">
        <div className="flex items-center w-full my-8">
          {/* Input and Button Group */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Name"
              className="px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-100 w-[200px]"
            />
            <button className="px-6 bg-slate-700 py-2 bg-navy-900 text-white rounded-md hover:bg-navy-800 transition-colors">
              Add
            </button>
          </div>

          {/* Repeating NASA text */}
          <div className="flex items-center gap-2 ml-4 flex-wrap">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex items-center gap-1">
                <span className="text-gray-600">nasa</span>
                <Trash className="w-4 h-4 text-orange-400" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => handleScroll("left")}
            className="text-gray-500"
          >
            <FaCircleArrowLeft
              size={30}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#000000")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "gray")}
            />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="text-black ml-2 "
          >
            <FaCircleArrowRight
              size={30}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#000000")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "gray")}
            />
          </button>
        </div>
      </div>
      {/* Table */}
      <div className="overflow-x-auto rounded-md mt-4">
        <DateTimeSearch
          title="Create Real Estate"
          onOpenModal={handleOpenModal}
        />
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#FFB200] text-black font-semibold">
              <th
                className={`p-3 text-center border-r border-black border-opacity-50 ${poppins.className} font-semibold text-[15px] leading-[22.5px] text-[#000000]`}
              >
                No.
              </th>
              <th
                className={`p-3 text-center border-r border-black border-opacity-50 ${poppins.className} font-semibold text-[15px] leading-[22.5px] text-[#000000]`}
              >
                Photo
              </th>
              <th
                className={`p-3 text-center border-r border-black border-opacity-50 ${poppins.className} font-semibold text-[15px] leading-[22.5px] text-[#000000]`}
              >
                Title
              </th>
              <th
                className={`max-w-[258px] p-3 text-center border-r border-black border-opacity-50 ${poppins.className} font-semibold text-[15px] leading-[22.5px] text-[#000000]`}
              >
                Project Planning
              </th>
              <th
                className={`p-3 text-center border-r border-black border-opacity-50 ${poppins.className} font-semibold text-[15px] leading-[22.5px] text-[#000000]`}
              >
                Price
              </th>
              <th
                className={`p-3 text-center whitespace-nowrap border-r border-black border-opacity-50 ${poppins.className} font-semibold text-[15px] leading-[22.5px] text-[#000000]`}
              >
                Upload Date
              </th>
              <th
                className={`p-3 text-center border-r border-black border-opacity-50 ${poppins.className} font-semibold text-[15px] leading-[22.5px] text-[#000000]`}
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {architectureArr && architectureArr?.length > 0 ? (
              architectureArr.map((row: any, index: any) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-[#FAEFD8]" : "bg-[#fff]"
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
                  <td className="p-3 text-center mx-auto border-r border-black border-opacity-50">
                    {row.images && (
                      <Image
                        src={row.images}
                        width={70}
                        height={50}
                        alt="image"
                        className="rounded-md"
                      />
                    )}
                  </td>
                  <td
                    className={`p-3 text-center border-r border-black border-opacity-50 ${poppins.className} font-medium text-[14.13px] leading-[21.2px] text-[#000000]`}
                  >
                    {row.visible ? row.title : "*****"}
                  </td>
                  <td
                    className={`max-w-[258px] mx-auto p-3 text-center border-r border-black border-opacity-50 ${poppins.className} font-medium text-[10px] leading-[15px] text-[#00000099]`}
                  >
                    {row.projectPlanning}
                  </td>
                  <td
                    className={`p-3 text-center border-r border-black border-opacity-50 ${poppins.className} font-normal text-[14.13px] leading-[21.2px] text-[#000000]`}
                  >
                    {row.visible ? row.price : "*****"}
                  </td>
                  <td
                    className={`p-3 text-center whitespace-nowrap border-r border-black border-opacity-50 ${poppins.className} font-normal text-[14.13px] leading-[21.2px] text-[#000000]`}
                  >
                    {row.uploadDate}
                  </td>
                  <td className="p-3 text-center border-r border-black border-opacity-50">
                    <div className="flex justify-center space-x-2">
                      <button
                        onClick={handleSortRows}
                        className="text-yellow-600"
                      >
                        <TiArrowUnsorted size={20} />
                      </button>
                      <button
                        onClick={() => handleToggleVisibility(index)}
                        className="text-green-600"
                      >
                        <RxSwitch size={20} />
                      </button>
                      <button
                        className="text-blue-600"
                        onClick={() => handleEdit(index)}
                      >
                        <CiEdit size={20} />
                      </button>
                      <button
                        className="text-red-600"
                        onClick={() => handleDeleteRow(index)}
                      >
                        <BsTrash3 size={20} />
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

      {modalTitle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-[968px] h-[590px] bg-[#ccccff] p-8 rounded shadow-lg mt-8">
            <div className="flex justify-end">
              <button
                className="relative -top-4 -right-2 text-gray-700 text-lg"
                onClick={handleCloseModal}
              >
                ✖
              </button>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <div className="flex flex-row items-center">
                <button
                  className={`${poppins.className} font-semibold text-base bg-[#ffb200] w-25 h-16 rounded-[8px] text-[#000000] dark:bg-slate-800`}
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
                  multiple
                />
                <div className="flex flex-row gap-3 ml-4">
                  {formData?.images?.map((image, index) => (
                    <div
                      key={index}
                      className="relative w-[101px] h-20 bg-[#CCCCFF33] rounded shadow-xl"
                    >
                      <Image
                        src={URL.createObjectURL(image)}
                        width={62}
                        height={50}
                        alt="Preview"
                        className="object-cover mt-3 mx-auto"
                      />
                      <button
                        onClick={() => handleDeleteImage(index)}
                        className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center"
                      >
                        <BsTrash3 color="red" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <button
                className="bg-[#ffb200] w-44 h-[45px] rounded-lg text-[#000000] dark:bg-slate-800"
                onClick={handleSave}
              >
                Save
              </button>
            </div>

            <div className="flex space-x-6">
              <div className="flex flex-col w-[690px]">
                <div className="flex flex-row w-full justify-between">
                  <span className="flex flex-col">
                    <label
                      className={`${poppins.className} font-medium text-[20px] leading-[31px] text-[#000000]`}
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      className="rounded-[5px] w-[300px] h-14 border border-[#000000]"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                    />
                  </span>
                  <span className="flex flex-col">
                    <label
                      className={`${poppins.className} font-medium text-[20px] leading-[31px] text-[#000000]`}
                    >
                      Price
                    </label>
                    <input
                      type="text"
                      className="rounded-[5px] w-[250px] h-14 border border-[#000000]"
                      value={formData.price}
                      onChange={(e) =>
                        setFormData({ ...formData, price: e.target.value })
                      }
                    />
                  </span>
                </div>

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
                      height: 250,
                    }}
                    onBlur={(newContent) =>
                      setFormData({ ...formData, description: newContent })
                    }
                  />
                </div>
              </div>
              <div className="w-[355px] h-[380px] flex flex-col mt-8">
                <label
                  className={`${poppins.className} font-medium text-[20px] leading-[31px] text-[#000000]`}
                >
                  Project Planning
                </label>
                <textarea
                  className="flex-1"
                  value={formData.projectPlanning}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      projectPlanning: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col w-full items-center justify-center my-7 gap-5">
        <p className="font-inter font-semibold text-base leading-[19.36px] text-black-4">
          Showing 1 to 5 of 97 results
        </p>
        <div className="rounded-[10px] border-[0.89px] border-white bg-[#FFB200] text-[#231F20] font-inter font-semibold text-[13px] leading-[15.73px] py-2 px-4">
          More Results
        </div>
      </div>
    </div>
  );
};

export default CreateArchitecture;
