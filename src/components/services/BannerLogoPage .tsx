import { ImageUploadIcon } from "@/utils/Icons";
import axios from "axios";
import { Poppins } from "next/font/google";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { BsTrash3 } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

interface FormData {
  files: File[];
  title: string;
  tag: string;
}

const MAX_UPLOAD_LIMIT = 3;

const BannerLogoPage: React.FC = () => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<FormData>({
    files: [],
    title: "",
    tag: "",
  });

  const handleFileInputClick = () => hiddenFileInput.current?.click();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const uploadedFiles = Array.from(event.target.files);
      const updatedFiles = [...formData.files, ...uploadedFiles];
      if (updatedFiles.length > MAX_UPLOAD_LIMIT) {
        // alert(`You can upload a maximum of ${MAX_UPLOAD_LIMIT} files.`);
        return;
      }
      setFormData((prev) => ({ ...prev, files: updatedFiles }));
    }
  };

  const handleDeleteFile = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index),
    }));
  };

  const handleSave = () => {
    console.log("Form Data Submitted:", formData);
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/create/banner`,
        formData
      )
      .then((res) => {
        console.log("Response:", res.data);
        alert("Form data saved successfully!");
      });
  };

  return (
    <div className="flex items-start justify-center min-h-screen self-center">
      <div className="w-full max-w-3xl rounded-lg">
        {/* Main Banner Section */}
        <div className="flex flex-col items-center mt-6 mb-8">
          <h2
            className={`${poppins.className} text-[24px] font-medium text-center text-black leading-[37.2px]"`}
          >
            Website Banner
          </h2>
          <p className="text-black-4 mb-4 text-base leading-6">
            <span className="font-semibold">Select</span> Banner{" "}
            <span className="font-semibold">Image/video</span>
          </p>
          <div className="flex items-start justify-center w-full relative">
            <div
              className="relative flex items-center justify-center w-50 h-50 bg-gray-100 rounded-lg cursor-pointer"
              onClick={handleFileInputClick}
            >
              {formData.files.length > 0 ? (
                <>
                  {/* Preview for Image/Video */}
                  {formData.files[0].type.startsWith("image/") ? (
                    <Image
                      src={URL.createObjectURL(formData.files[0])}
                      alt="Banner Preview"
                      className="rounded-lg object-cover"
                      layout="fill"
                    />
                  ) : (
                    <video
                      src={URL.createObjectURL(formData.files[0])}
                      className="rounded-lg object-cover"
                      controls
                      width="100%"
                      height="100%"
                    />
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteFile(0);
                    }}
                    className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center dark:text-white font-inter dark:bg-boxdark"
                  >
                    <BsTrash3 color="red" />
                  </button>
                </>
              ) : (
                // <BsCloudUpload size={40} className="text-gray-400" />
                <ImageUploadIcon />
              )}
            </div>
            <div className="mb-6 mt-2 flex justify-end items-center absolute right-0">
              <button
                className={`${poppins.className} bg-[#FFB200] text-[#231F20] px-7 py-2 rounded-[5px] font-semibold text-[17.74px] tracking-[2px] leading-[22.17px] dark:text-white font-inter dark:bg-boxdark`}
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
          <input
            type="file"
            ref={hiddenFileInput}
            style={{ display: "none" }}
            accept="image/*,video/*"
            onChange={handleFileChange}
          />
        </div>

        {/* Form Section */}
        <div className="flex flex-col items-center space-y-6 mb-8">
          <div>
            <label className="font-inter font-medium mb-6 text-[#000000] text-[16px] leading-[19.36px]">
              Banner Title
            </label>
            <div className="w-[516px] h-[71px] p-[2px] rounded-[8px] border-[#00000026] bg-[#F8F8F8] border-2">
              <textarea
                type="text"
                className="w-[508.5px] h-[64.5px] rounded-[5px]"
                value={formData.title}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, title: e.target.value }))
                }
              />
            </div>
          </div>
          <div>
            <label className="font-inter font-medium mb-6 text-[#000000] text-[16px] leading-[19.36px]">
              Banner Tag
            </label>
            <div className="w-[516px] h-[118px] p-[2px] rounded-[8px] border-[#00000026] bg-[#F8F8F8] border-2">
              <textarea
                type="text"
                className="w-[510px] h-[112px] rounded-[5px]"
                value={formData.tag}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, tag: e.target.value }))
                }
              />
            </div>
          </div>
        </div>
        <div className="flex items-start justify-center w-full relative mb-6">
          <div>
            <h2 className="text-lg mb-4 text-center text-black-4">
              <span className="font-semibold">Select Menu</span> Banner{" "}
              <span className="font-semibold">Image/Video</span>
            </h2>

            <div className="flex justify-center align-center gap-4">
              {formData.files.slice(1).map((file, index) => (
                <div key={index} className="relative w-24 h-24">
                  {file.type.startsWith("image/") ? (
                    <Image
                      src={URL.createObjectURL(file)}
                      alt={`File ${index + 1}`}
                      className="rounded-lg object-cover"
                      layout="fill"
                    />
                  ) : (
                    <video
                      src={URL.createObjectURL(file)}
                      className="rounded-lg object-cover"
                      controls
                      width="100%"
                      height="100%"
                    />
                  )}
                  <button
                    onClick={() => handleDeleteFile(index + 1)}
                    className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center dark:text-white font-inter dark:bg-boxdark"
                  >
                    <IoClose />
                  </button>
                </div>
              ))}
              {formData.files.length < MAX_UPLOAD_LIMIT && (
                <div
                  className="flex items-center justify-center bg-gray-100 shadow-md rounded-lg cursor-pointer"
                  onClick={handleFileInputClick}
                >
                  <ImageUploadIcon />
                </div>
              )}
            </div>
          </div>
          <div className="mb-6 mt-2 flex justify-end items-center absolute right-0">
            <button
              className="bg-[#ffb200] text-black px-7 py-2 rounded-[5px] font-semibold text-[17.74px] tracking-[2px] leading-[22.17px] dark:text-white font-inter dark:bg-boxdark"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerLogoPage;
