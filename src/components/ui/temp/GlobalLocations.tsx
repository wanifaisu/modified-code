import { CalendarIcon } from "@/utils/Icons";
import { Button, DatePicker, Input, Select } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { BsTrash3 } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import {
  FaCloudUploadAlt,
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { RxSwitch } from "react-icons/rx";
import { TiArrowUnsorted } from "react-icons/ti";
//import { TiArrowUnsorted } from 'react-icons/ti';
//import { CiEdit } from 'react-icons/ci';
//import { BsTrash3 } from 'react-icons/bs';
//import { Switch } from '@/components/ui/switch';

const { Option } = Select;

interface SocialLink {
  icon: JSX.Element;
  name: string;
  url: string;
}

interface RowData {
  photo: string;
  country: string;
  address: string;
  socialLinks: SocialLink[];
  visible: boolean;
}

const CreateEmployee: React.FC = () => {
  const [rows, setRows] = useState<RowData[]>([]);
  const [formData, setFormData] = useState<RowData>({
    photo: "",
    country: "",
    address: "",
    socialLinks: [],
    visible: true,
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [editingRow, setEditingRow] = useState<number | null>(null);
  const [socialInput, setSocialInput] = useState<SocialLink>({
    icon: <FaFacebook />,
    name: "Facebook",
    url: "",
  });
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);

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
      setFormData((prev) => ({ ...prev, photo: fileUrl }));
    }
  };

  const handleAddSocialLink = (): void => {
    if (!socialInput.url) {
      handleShowModal("Please provide a valid URL.");
      return;
    }
    setFormData((prev) => ({
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
    if (!formData.country || !formData.address || !formData.photo) {
      handleShowModal("Please fill in all fields.");
      return;
    }

    if (editingRow !== null) {
      setRows((prev) =>
        prev.map((row, index) => (index === editingRow ? { ...formData } : row))
      );
      setEditingRow(null);
    } else {
      setRows((prev) => [...prev, { ...formData }]);
    }
    setFormData({
      photo: "",
      country: "",
      address: "",
      socialLinks: [],
      visible: true,
    });
  };

  const handleEditRow = (index: number): void => {
    setEditingRow(index);
    setFormData(rows[index]);
  };

  const handleDeleteRow = (index: number): void => {
    setRows((prev) => prev.filter((_, i) => i !== index));
  };

  const handleToggleVisibility = (index: number): void => {
    setRows((prev) =>
      prev.map((row, i) =>
        i === index ? { ...row, visible: !row.visible } : row
      )
    );
  };

  // const handleSortRows = (): void => {
  //   const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
  //   const sortedRows = [...rows].sort((a, b) =>
  //     newSortOrder === "asc"
  //       ? a.name.localeCompare(b.name)
  //       : b.name.localeCompare(a.name)
  //   );
  //   setRows(sortedRows);
  //   setSortOrder(newSortOrder);
  // };
  const handleSortRows = (index: number): void => {
    setRows((prevRows) => [...prevRows].reverse());
  };
  const onStartDate = (value: string) => {
    console.log(value);
  };
  const onEndDate = (value: any) => {
    console.log(value);
  };
  const socialIcons = {
    facebook: <FaFacebookF size={16} className="text-[#ffb200]" />,
    instagram: <FaInstagram size={16} className="text-[#ffb200]" />,
    twitter: <FaTwitter size={16} className="text-[#ffb200]" />,
    pinterest: <FaPinterestP size={16} className="text-[#ffb200]" />,
  };
  function handleSortUp(index: number): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <DatePicker
          onChange={onStartDate}
          className="py-2 bg-white w-35 placeholder:text-black dark:text-white font-inter dark:bg-boxdark"
          placeholder="MM/DD/YYYY"
          suffixIcon={<CalendarIcon />}
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
        />
        <span className="text-black-4">To</span>
        <DatePicker
          onChange={onEndDate}
          className="py-2 bg-white w-35 placeholder:text-black dark:text-white font-inter dark:bg-boxdark"
          placeholder="MM/DD/YYYY"
          suffixIcon={<CalendarIcon />}
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
        />
      </div>

      <div className="overflow-auto rounded-md bg-white shadow-sm">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-amber-400  dark:bg-boxdark">
              <th className="p-4 text-left text-black font-medium dark:text-white font-inter dark:border-white">
                No.
              </th>
              <th className="p-4 text-left text-black font-medium dark:text-white font-inter dark:border-white">
                Flag
              </th>
              <th className="p-4 text-left text-black font-medium dark:text-white font-inter dark:border-white">
                Country Name
              </th>
              <th className="p-4 text-left text-black font-medium dark:text-white font-inter dark:border-white">
                Office Address
              </th>
              <th className="p-4 text-left text-black font-medium dark:text-white font-inter dark:border-white">
                Contact Details
              </th>
              <th className="p-4 text-left text-black font-medium dark:text-white font-inter dark:border-white">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-orange-50">
              <td className="p-4 text-center">#</td>
              <td className="p-4 border-x border-gray-200">
                <div className="flex justify-center">
                  {formData.photo ? (
                    <Image
                      src={formData.photo}
                      alt="Uploaded Preview"
                      width={50}
                      height={30}
                      className="rounded"
                    />
                  ) : (
                    <label htmlFor="upload" className="cursor-pointer">
                      <FaCloudUploadAlt size={30} className="text-gray-400" />
                    </label>
                  )}
                  <input
                    type="file"
                    id="upload"
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                </div>
              </td>
              <td className="p-4 border-x border-gray-200">
                <Input
                  value={formData.country}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      country: e.target.value,
                    }))
                  }
                  placeholder="Country"
                  className="bg-white"
                />
              </td>
              <td className="p-4 border-x border-gray-200">
                <Input
                  value={formData.address}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      address: e.target.value,
                    }))
                  }
                  placeholder="Address"
                  className="bg-white"
                />
              </td>
              <td className="p-4 border-x border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    {formData.socialLinks.map((link, index) => (
                      <div
                        key={index}
                        className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full"
                      >
                        {socialIcons[link.name]}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center flex-1 gap-2">
                    <Select
                      value={socialInput.name}
                      onChange={(value) =>
                        setSocialInput((prev) => ({
                          ...prev,
                          name: value,
                          icon: socialIcons[value],
                        }))
                      }
                      placeholder="Select Icon"
                      className="bg-white"
                    >
                      {Object.keys(socialIcons).map((name) => (
                        <option key={name} value={name}>
                          {name}
                        </option>
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
                      className="bg-white w-2/3"
                    />
                    <Button
                      onClick={handleAddSocialLink}
                      className="bg-amber-400 text-black hover:bg-amber-500"
                    >
                      Add
                    </Button>
                  </div>
                </div>
              </td>
              <td className="p-4 text-center">
                <Button
                  className="bg-amber-400 text-black hover:bg-amber-500 rounded-full px-6"
                  onClick={handleAddOrEditRow}
                >
                  Add
                </Button>
              </td>
            </tr>
            {rows.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-orange-50"}
              >
                <td className="p-4 text-center">{index + 1}</td>
                <td className="p-4 border-x border-gray-200">
                  <div className="flex justify-center">
                    <Image
                      src={row.photo}
                      alt={row.country}
                      width={50}
                      height={30}
                      className="rounded"
                    />
                  </div>
                </td>
                <td className="p-4 border-x border-gray-200">
                  {row.visible ? row.country : "*****"}
                </td>
                <td className="p-4 border-x border-gray-200">
                  {row.visible ? row.address : "*****"}
                </td>
                <td className="p-4 border-x border-gray-200">
                  <div className="flex items-center justify-center gap-2">
                    {row.socialLinks.map((link, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full"
                      >
                        {socialIcons[link.name]}
                      </div>
                    ))}
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex gap-2 justify-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleSortRows()}
                    >
                      <TiArrowUnsorted className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleToggleVisibility(index)}
                    >
                      <RxSwitch className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEditRow(index)}
                    >
                      <CiEdit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteRow(index)}
                    >
                      <BsTrash3 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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

export default CreateEmployee;
