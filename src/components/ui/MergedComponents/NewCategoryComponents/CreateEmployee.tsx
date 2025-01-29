import employeeData from "@/constants/employeeData";
import { Button, Input, Select } from "antd";
import { Poppins } from "next/font/google";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { BsTrash3, BsTrashFill } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import {
  FaCloudUploadAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { RxSwitch } from "react-icons/rx";
import { TiArrowUnsorted } from "react-icons/ti";
import DateTimeSearch from "./DateTimeSearch";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const { Option } = Select;

interface SocialLink {
  icon: JSX.Element;
  name: string;
  url: string;
}

interface RowData {
  id: number;
  photo?: string;
  name: string;
  title: string;
  socialLinks: SocialLink[];
  visible: boolean;
  uploadDate?: any;
}

const CreateEmployee: React.FC = () => {
  const [rows, setRows] = useState<any>([]);
  const [formData, setFormData] = useState<any>({
    photo: "",
    name: "",
    title: "",
    socialLinks: [],
    visible: true,
  });
  const [editedData, setEditedData] = useState<any>({
    photo: "",
    name: "",
    title: "",
    socialLinks: [],
    visible: true,
  });
  const [socialInput, setSocialInput] = useState<SocialLink>({
    icon: <FaFacebook />,
    name: "Facebook",
    url: "",
  });

  const [modalTitle, setModalTitle] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingRow, setEditingRow] = useState<number | null>(null);
  const [editRow, setEditRow] = useState<any>({});
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
  const [employesData, setEmployesData] = useState<any>(employeeData);
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
      setFormData((prev: any) => ({ ...prev, icon: file }));
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
  const handleOpenModal = (title: string) => {
    setModalTitle(title);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalTitle(null);
    setIsModalVisible(false);
    setFormData({
      id: Math.random(),
      photo: "null",
      name: "",
      title: "",
      uploadDate: new Date().toISOString().split("T")[0],
      visible: true,
    });
    setEditingRow(null);
  };

  const handleSaveOrEdit = (): void => {
    // Validate required fields
    if (!formData?.title || !formData?.photo) {
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
    const row = employesData[index];

    setEditedData(row);
    setFormData(row);
    handleOpenModal("Edit Blog");
  };

  const handleDeleteRow = (id: number): void => {
    const filteredImages = employesData.filter((_: any, i: number) => i !== id);

    // Update the state with the new filtered array
    setEmployesData(filteredImages);
    setRows((prev: any) => prev.filter((row: any) => row.id !== id));
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

  const handleAddSocialLink = (): void => {
    if (!socialInput.url) {
      handleShowModal("Please provide a valid URL.");
      return;
    }
    setFormData((prev: any) => ({
      ...prev,
      socialLinks: [...prev.socialLinks, socialInput],
    }));
    setSocialInput({ icon: <FaFacebook />, name: "Facebook", url: "" });
  };

  const handleShowModal = (title: string) => {
    setModalTitle(title);
    setIsModalVisible(true);
  };

  const handleAddOrEditRow = (): void => {
    if (!formData?.name || !formData?.title || !formData?.photo) {
      handleShowModal("Please fill in all fields.");
      return;
    }

    if (editingRow !== null) {
      setRows((prev: any) =>
        prev.map((row: any, index: any) =>
          index === editingRow ? { ...formData } : row
        )
      );
      setEmployesData((prev: any) =>
        prev.map((row: any, index: any) =>
          index === editingRow ? { ...formData } : row
        )
      );
      setEditingRow(null);
    } else {
      setEmployesData((prev: any) => [...prev, { ...formData }]);
      setRows((prev: any) => [...prev, { ...formData }]);
    }
    setFormData({
      photo: "",
      name: "",
      title: "",
      socialLinks: [],
      visible: true,
    });
  };

  const handleToggleVisibility = (index: number): void => {
    setRows((prev: any) =>
      prev.map((row: any, i: number) =>
        i === index ? { ...row, visible: !row.visible } : row
      )
    );
  };

  const handleSortRows = (): void => {
    setRows((prevRows: any) => [...prevRows].reverse());
  };
  return (
    <>
      <div className="p-4 mt-[-3rem]">
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
            </div>
          </div>

          <DateTimeSearch onOpenModal={handleOpenModal} />
          <table className="w-full border-collapse">
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
                  Name
                </th>
                <th
                  className={`p-3 text-center border-r border-black border-opacity-50 ${poppins.className} font-semibold text-[15px] leading-[22.5px] text-[#000000]`}
                >
                  Title
                </th>
                <th
                  className={`p-3 text-center border-r border-black border-opacity-50 ${poppins.className} font-semibold text-[15px] leading-[22.5px] text-[#000000]`}
                >
                  Social Links
                </th>
                <th
                  className={`p-3 text-center ${poppins.className} font-semibold text-[15px] leading-[22.5px] text-[#000000]`}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#FAEFD8]">
                <td className="p-3 text-center border-r border-black border-opacity-50">
                  #
                </td>
                <td className="p-3 text-center border-r border-black border-opacity-50">
                  {formData?.photo ? (
                    <Image
                      src={formData?.photo}
                      alt="Uploaded Preview"
                      width={50}
                      height={50}
                      className="rounded-md"
                    />
                  ) : (
                    <label htmlFor="upload">
                      <FaCloudUploadAlt size={50} color="#000000" />
                    </label>
                  )}
                  <input
                    type="file"
                    id="upload"
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                </td>
                <td className="p-3 border-r border-black border-opacity-50">
                  <Input
                    value={formData?.name}
                    onChange={(e) =>
                      setFormData((prev: any) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    placeholder="Name"
                  />
                </td>
                <td className="p-3 border-r border-black border-opacity-50">
                  <Input
                    value={formData?.title}
                    onChange={(e) =>
                      setFormData((prev: any) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                    placeholder="Title"
                  />
                </td>
                <td className="p-3 text-center border-r border-black border-opacity-50">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center gap-2">
                      {formData?.socialLinks?.map(
                        (link: any, index: number) => (
                          <div
                            key={index}
                            className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full"
                          >
                            {link?.name && link?.icon}
                          </div>
                        )
                      )}
                    </div>
                    <div className="flex items-center flex-1 gap-1 justify-center">
                      <Select
                        value={socialInput?.name}
                        onChange={(value) =>
                          setSocialInput((prev) => ({
                            ...prev,
                            name: value,
                            icon: availableIcons?.find((i) => i?.name === value)
                              ?.icon!,
                          }))
                        }
                        placeholder="Select Icon"
                        className="rounded-md"
                      >
                        {availableIcons?.map((icon) => (
                          <Option key={icon.name} value={icon?.name}>
                            {icon?.name}
                          </Option>
                        ))}
                      </Select>
                      <Input
                        value={socialInput.url}
                        onChange={(e) =>
                          setSocialInput((prev) => ({
                            ...prev,
                            url: e.target.value,
                          }))
                        }
                        placeholder="URL"
                        className="w-2/3"
                      />
                      <Button
                        onClick={handleAddSocialLink}
                        className="bg-[#ffb200] text-black"
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                </td>
                <td className="p-3 text-center border-r ">
                  <button
                    className="bg-orange-500 text-black text-center rounded-[5px] w-19 h-6"
                    onClick={handleAddOrEditRow}
                  >
                    Add
                  </button>
                </td>
              </tr>
              {employesData && employesData?.length > 0 ? (
                employesData?.map((row: any, index: any) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-[#fff]" : "bg-[#FAEFD8]"
                    } md:text-base text-sm`}
                  >
                    <td className="p-3 border-r border-black border-opacity-50 text-center">
                      <div className="w-[33.36px] h-[26.1px] bg-[#FFB200] mx-auto">
                        <span
                          className={`${poppins.className} font-bold text-[13.43px] leading-[20.15px] text-[#000000]`}
                        >
                          {index + 1}
                        </span>
                      </div>
                    </td>
                    <td className="p-3 border-r border-black border-opacity-50 text-center">
                      <Image
                        src={"/images/user/user-01.png"}
                        alt={row.name}
                        width={50}
                        height={50}
                        className="rounded-md"
                      />
                    </td>
                    <td
                      className={`p-3 text-center border-r border-black border-opacity-50 ${poppins.className} font-normal text-[15px] leading-[22.5px] text-[#000000]`}
                    >
                      {row.name}
                    </td>
                    <td
                      className={`p-3 text-center border-r border-black border-opacity-50 ${poppins.className} font-normal text-[15px] leading-[22.5px] text-[#000000]`}
                    >
                      {row.title}
                    </td>
                    <td className="p-3 text-center border-r border-black border-opacity-50">
                      <div className="flex items-center justify-center gap-2">
                        {row?.socialLinks.map((link: any, i: any) => (
                          <div
                            key={i}
                            className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full"
                          >
                            {link.icon === "facebool" ? (
                              <FaFacebook color="#FFB200" />
                            ) : link.icon === "instagram" ? (
                              <FaInstagram color="#FFB200" />
                            ) : link.icon === "twitter" ? (
                              <FaTwitter color="#FFB200" />
                            ) : (
                              <FaLinkedin color="#FFB200" />
                            )}
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="flex gap-2 justify-center">
                        <Button>
                          <TiArrowUnsorted onClick={() => handleSortRows()} />
                        </Button>
                        <Button onClick={() => handleToggleVisibility(index)}>
                          <RxSwitch />
                        </Button>
                        <Button onClick={() => handleEditRow(index)}>
                          <CiEdit />
                        </Button>
                        <Button onClick={() => handleDeleteRow(index)}>
                          <BsTrash3 color="red" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6}>No Data Fount</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {employesData?.length > 0 && (
          <div className="flex flex-col w-full items-center justify-center my-7 gap-5">
            <p className="font-inter font-semibold text-base leading-[19.36px] text-black-4">
              Showing 1 to 5 of 97 results
            </p>
            <div className="rounded-[10px] border-[0.89px] border-white bg-[#FFB200] text-[#231F20] font-inter font-semibold text-[13px] leading-[15.73px] py-2 px-4">
              More Results
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CreateEmployee;
