import { Poppins } from "next/font/google";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { BsCloudUpload, BsTrash3 } from "react-icons/bs";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});
const SupportIcon: React.FC = () => {
  const [mapImage, setMapImage] = useState<File | null>(null);
  const [supportLogos, setSupportLogos] = useState<File[]>([]);
  const [savedMapImages, setSavedMapImages] = useState<File[]>([]);
  const [savedSupportLogos, setSavedSupportLogos] = useState<File[]>([]);

  const mapFileInput = useRef<HTMLInputElement>(null);
  const logoFileInput = useRef<HTMLInputElement>(null);

  const handleMapUpload = () => mapFileInput.current?.click();

  const handleSupportUpload = () => logoFileInput.current?.click();

  const handleMapFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (!file.type.startsWith("image/")) {
        // alert("Please upload a valid image file.");
        return;
      }
      setMapImage(file);
    }
  };

  const handleSupportFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files) {
      const uploadedFiles = Array.from(event.target.files);
      const validFiles = uploadedFiles.filter((file) =>
        file.type.startsWith("image/")
      );
      setSupportLogos((prev) => [...prev, ...validFiles]);
    }
  };

  const handleDeleteMapImage = () => setMapImage(null);

  const handleDeleteSupportLogo = (index: number) => {
    setSupportLogos((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSaveMap = () => {
    if (mapImage) {
      setSavedMapImages((prev) => [...prev, mapImage]);
      setMapImage(null);
      // alert("Map image saved successfully!");
    }
  };

  const handleSaveSupportLogos = () => {
    if (supportLogos.length > 0) {
      setSavedSupportLogos((prev) => [...prev, ...supportLogos]);
      setSupportLogos([]);
      // alert("Support logos saved successfully!");
    }
  };

  return (
    <div className="w-[1033px] bg-white rounded-[32px] min-h-[702px] flex flex-col items-center justify-center mx-auto">
      {/* Map Section */}
      <div className="mb-10 w-full max-w-2xl">
        <h2
          className={`${poppins.className} font-normal text-xl text-center text-[#000000] mb-2`}
        >
          Map
        </h2>
        <div className="flex justify-center">
          <div className="flex items-center justify-between w-[50%]">
            <div className="flex flex-col">
              <div
                className="relative flex items-center justify-center w-26 h-20 bg-[#CCCCFF33] shadow-md rounded-lg cursor-pointer"
                onClick={handleMapUpload}
              >
                {mapImage ? (
                  <>
                    <Image
                      width={100}
                      height={100}
                      src={URL.createObjectURL(mapImage)}
                      alt="Map Preview"
                      className="rounded-lg object-cover w-full h-full"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteMapImage();
                      }}
                      className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center"
                    >
                      <BsTrash3 color="red" />
                    </button>
                  </>
                ) : (
                  <BsCloudUpload size={40} className="text-gray-400" />
                )}
              </div>
              <p
                className={`${poppins.className} font-semibold text-base text-center text-[#0F0000] mb-4`}
              >
                Select photo
              </p>
            </div>

            <input
              type="file"
              ref={mapFileInput}
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleMapFileChange}
            />

            <div className="flex">
              <button
                onClick={handleSaveMap}
                className={`${poppins.className} font-normal text-[16px] leading-[24.8px] bg-[#FFB200] text-[#000000] w-[95px] h-[48px] rounded-[8px]`}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Support Logos Section */}
      <div className="w-full max-w-2xl">
        <h2
          className={`${poppins.className} font-normal text-xl text-center text-[#000000] mb-2`}
        >
          Company Support Logo
        </h2>
        <div className="flex justify-center">
          <div className="flex justify-between w-[50%]">
            <div>
              <div className="flex flex-wrap justify-center gap-4 mb-4">
                {supportLogos.map((file, index) => (
                  <div
                    key={index}
                    className="relative w-24 h-24 bg-white shadow-md rounded-lg"
                  >
                    <Image
                      width={100}
                      height={100}
                      src={URL.createObjectURL(file)}
                      alt={`Logo Preview ${index + 1}`}
                      className="rounded-lg object-cover w-full h-full"
                    />
                    <button
                      onClick={() => handleDeleteSupportLogo(index)}
                      className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center"
                    >
                      <BsTrash3 color="red" />
                    </button>
                  </div>
                ))}
                <div
                  className="relative flex items-center justify-center w-26 h-20 bg-[#CCCCFF33] shadow-md rounded-lg cursor-pointer"
                  onClick={handleSupportUpload}
                >
                  <BsCloudUpload size={30} className="text-gray-400" />
                </div>
              </div>
              <p
                className={`${poppins.className} font-semibold text-base text-center text-[#0F0000] mb-4`}
              >
                Select photo
              </p>
            </div>

            <input
              type="file"
              ref={logoFileInput}
              style={{ display: "none" }}
              accept="image/*"
              multiple
              onChange={handleSupportFileChange}
            />
            <div className="flex mt-6">
              <button
                onClick={handleSaveSupportLogos}
                className={`${poppins.className} font-normal text-[16px] leading-[24.8px] bg-[#FFB200] text-[#000000] w-[95px] h-[48px] rounded-[8px]`}
              >
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-center gap-4 flex-wrap">
            {savedSupportLogos.map((file, index) => (
              <Image
                width={100}
                height={100}
                key={index}
                src={URL.createObjectURL(file)}
                alt={`Saved Logo ${index + 1}`}
                className="w-24 h-24 rounded-lg object-cover bg-[#CCCCFF33] shadow-md"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportIcon;
