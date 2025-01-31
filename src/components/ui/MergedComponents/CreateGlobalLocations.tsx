import React, { useRef, useState } from "react";
import { CiCircleMinus } from "react-icons/ci";

import { Button, Image } from "antd";
import { BsTrashFill } from "react-icons/bs";
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import Modal from "../modal/Modal";
import GlobalLocations from "../temp/GlobalLocations";
export interface GlobState {
  file?: any;
  homeAddress?: string;
  sl: number;
  id: number;
  country: string;
  image: string;
  officeAddress: string;
  gmail: string;
  contactNo: string;
}
const CreateGlobalLocations: React.FC = () => {
  const [globalLocations, setGlobalLocations] = useState<GlobState[]>([
    {
      sl: 1,
      id: 1,
      country: "India",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
      officeAddress: "Kolkata",
      gmail: "USA",
      contactNo: "1234567890",
    },
  ]);

  const [isVisible, setIsVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const [previewImage, setPreviewImage] = useState<File | null>(null);
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const hiddenIconInput = useRef<HTMLInputElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  const handleDeleteIconImage = (index: number) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
  };
  interface globData {
    file?: any;
    country: string;
    officeAddress: string;
    gmail: string;
    contactNo: string;
    homeAddress: string;
  }
  const [createGlobalLocationData, setCreateGlobalLocationData] = useState<any>(
    {
      file: null,
      country: "",
      officeAddress: "",
      gmail: "",
      contactNo: "",
      homeAddress: "",
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCreateGlobalLocationData({
      ...createGlobalLocationData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const selectedFiles = files as FileList;
    setCreateGlobalLocationData({
      ...createGlobalLocationData,
      file: selectedFiles?.[0],
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEditing) {
      // Update existing data
      setGlobalLocations((prevGlobalLocations: any) =>
        prevGlobalLocations.map((item: any, index: number) =>
          index === editIndex ? createGlobalLocationData : item
        )
      );
    } else {
      // Add new data
      setGlobalLocations((prevGlobalLocations: any) => [
        ...prevGlobalLocations,
        createGlobalLocationData,
      ]);
    }

    setIsVisible(false);
    setCreateGlobalLocationData({
      file: null,
      country: "",
      officeAddress: "",
      gmail: "",
      contactNo: "",
      homeAddress: "",
    });
    setIsEditing(false);
    setEditIndex(null);
  };

  const handleEditClick = (index: number) => {
    setIsEditing(true);
    setEditIndex(index);
    setCreateGlobalLocationData(globalLocations[index]);
    setIsVisible(true);
  };
  return (
    <div className="">
      <div className="rounded-md overflow-x-auto">
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
                    className="absolute top-1 right-[2px] bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center dark:text-white font-inter dark:bg-boxdark"
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
              className={`dark:text-white font-inter dark:bg-boxdark w-[95px] h-12 bg-[#ffb200]  border border-[#FFB200] text-black rounded-lg px-4 ml-8`}
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
                    className="dark:text-white font-inter dark:bg-boxdark absolute -top-3 -right-3 overflow-visible bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center"
                  >
                    <IoMdCloseCircle color="red" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div>
            <GlobalLocations
              data={globalLocations}
              setGlobalLocations={setGlobalLocations}
              onEditClick={handleEditClick}
            />
          </div>
        </div>
        <Modal isVisible={isVisible} onClose={setIsVisible}>
          <div className="relative w-[450px] ">
            <div className="flex justify-between">
              <h1 className="p-4 text-center text-xl font-bold text-white">
                Edit Global Locations
              </h1>
              <button
                className="mr-4 text-white"
                onClick={() => setIsVisible(false)}
              >
                <CiCircleMinus size={24} />
              </button>
            </div>
            <form
              onSubmit={handleSubmit}
              className="mb-2 rounded bg-white px-8 pb-8 pt-6 shadow-md"
            >
              <div className="mb-2">
                <label
                  className="text-gray-800 mb-2 block text-sm font-bold"
                  htmlFor="file"
                >
                  Flag
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  onChange={handleFileChange}
                  className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
                />
              </div>
              <div className="mb-2">
                <label
                  className="text-gray-800 mb-2 block text-sm font-bold"
                  htmlFor="file"
                >
                  / Country{" "}
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={createGlobalLocationData.country}
                  onChange={handleChange}
                  className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
                />
                <div className="mb-2">
                  <label
                    className="text-gray-800 mb-2 block text-sm font-bold"
                    htmlFor="file"
                  >
                    Office Address
                  </label>
                  <input
                    type="text"
                    id="officeAddress"
                    name="officeAddress"
                    value={createGlobalLocationData.officeAddress}
                    onChange={handleChange}
                    className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
                  />
                </div>
                <div className="mb-2">
                  <label
                    className="text-gray-800 mb-2 block text-sm font-bold"
                    htmlFor="file"
                  >
                    Gmail
                  </label>
                  <input
                    type="text"
                    id="gmail"
                    name="gmail"
                    value={createGlobalLocationData.gmail}
                    onChange={handleChange}
                    className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
                  />
                  <div className="mb-2">
                    <label
                      className="text-gray-800 mb-2 block text-sm font-bold"
                      htmlFor="file"
                    >
                      Contact No
                    </label>
                    <input
                      type="text"
                      id="contactNo"
                      name="contactNo"
                      value={createGlobalLocationData.contactNo}
                      onChange={handleChange}
                      className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      className="text-gray-800 mb-2 block text-sm font-bold"
                      htmlFor="file"
                    >
                      Home Address
                    </label>
                    <input
                      type="text"
                      id="homeAddress"
                      name="homeAddress"
                      value={createGlobalLocationData.homeAddress}
                      onChange={handleChange}
                      className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      className="focus:shadow-outline rounded bg-indigo-500 px-4 py-2 font-bold text-white hover:bg-indigo-700 focus:outline-none"
                    >
                      {/* Add */}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};
export default CreateGlobalLocations;
