"use client";
import blogsData from "@/constants/blogs";
import Blog from "@/types/blogs";
import dynamic from "next/dynamic";
import { Poppins } from "next/font/google";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { BsTrash3 } from "react-icons/bs";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
const Hiring = () => {
  const [editModal, setEditModal] = useState<Blog>(blogsData[0]);
  const editorRef = useRef(null);
  const [rows, setRows] = useState<RowData[]>([]);
  const [formData, setFormData] = useState<RowData>({
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
      setFormData((prev) => ({ ...prev, icon: file }));
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
    if (!formData.name || !formData.title || !formData.photo) {
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
      name: "",
      title: "",
      socialLinks: [],
      visible: true,
    });
  };

  const handleSortRows = (): void => {
    setRows((prevRows) => [...prevRows].reverse());
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
    // Validate required fields
    if (!formData.title || !formData.tag || !formData.photo) {
      alert("Please fill in all required fields, including an image.");
      return;
    }

    if (editingRow !== null) {
      // Update the row in edit mode
      setRows((prev) =>
        prev.map((row, index) => (index === editingRow ? { ...formData } : row))
      );
    } else {
      // Add a new row
      setRows((prev) => [...prev, { ...formData, id: Math.random() }]);
    }

    handleCloseModal();
  };

  const handleEditRow = (index: number): void => {
    setEditingRow(index);
    const row = rows[index];
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
    <div className="flex items-center justify-center bg-opacity-50">
      <div className="bg-[#ccccff] p-8 rounded w-full mt-16 flex flex-row items-start justify-between">
        {/* Left Section: Photo, Image Preview, and Inputs */}
        <div className="flex flex-col gap-6">
          {/* Photo Button and File Input */}
          <div className="flex items-center gap-4">
            <button
              className={`${poppins.className} font-semibold text-base bg-[#ffb200] w-32 max-h-16 rounded-[8px] text-[#000000] dark:bg-slate-800`}
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
          </div>

          {/* Image Preview */}
          <div className="relative w-[120px] h-[120px] bg-[#CCCCFF33] rounded shadow-xl flex items-center justify-center">
            <Image
              src={editModal.thumbnail}
              width={62}
              height={50}
              alt="Preview"
              className="object-cover"
            />
            <button
              onClick={() => {}}
              className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center"
            >
              <BsTrash3 color="white" />
            </button>
          </div>
        </div>

        {/* Middle Section: Form Inputs */}
        <div className="flex flex-col gap-4">
          {/* Title Input */}
          <div className="flex flex-col">
            <label
              className={`${poppins.className} font-medium text-[20px] leading-[31px] text-[#00000099]`}
            >
              Title
            </label>
            <input
              type="text"
              className="rounded w-80 h-13 px-3 border border-[#000000]"
              value={editModal.title}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, title: e.target.value }))
              }
            />
          </div>

          {/* Tag Input */}
          <div className="flex flex-col">
            <label
              className={`${poppins.className} font-medium text-[20px] leading-[31px] text-[#00000099]`}
            >
              Tag
            </label>
            <input
              type="text"
              className="rounded w-80 h-13 px-3 border border-[#000000]"
              value={editModal.tag}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, tag: e.target.value }))
              }
            />
          </div>

          {/* Description Input */}
          <div className="bg-white p-4 rounded-[10px] border border-[#000000]">
            <label
              className={`${poppins.className} font-normal text-[16px] leading-[31px] text-[#00000099]`}
            >
              Description
            </label>
            <JoditEditor
              ref={editorRef}
              value={editModal.description}
              config={{
                height: 150,
              }}
              onBlur={(newContent) =>
                setEditModal({ ...editModal, description: newContent })
              }
            />
          </div>
        </div>

        {/* Right Section: Save Button */}
        <div className="flex flex-col justify-start items-end">
          <button
            className="bg-[#ffb200] w-44 h-[45px] rounded-lg text-[#000000] dark:bg-slate-800"
            onClick={handleSaveOrEdit}
          >
            {editingRow !== null ? "Edit" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hiring;
