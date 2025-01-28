// import React, { useRef, useState } from "react";

// const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
// import { FiDelete, FiSave } from "react-icons/fi";
// import { BiTrash } from "react-icons/bi";
// import dynamic from "next/dynamic";
// import SelectSingleOrMultiImg from "@/components/Upload/SelectSingleOrMultiImg";
// import PrimaryButton from "@/components/button/PrimaryButton";
// import { Button, Form, Input } from "antd";
// import Image from 'next/image'

// // import "jodit/build/jodit.min.css";

// import emoji1 from "@/../public/images/icon/emoji1.svg"
// import emoji2 from "@/../public/images/icon/emoji1.svg"
// import emoji3 from "@/../public/images/icon/emoji1.svg"
// import emoji4 from "@/../public/images/icon/emoji1.svg"
// import { FaEdit } from "react-icons/fa";
// import { RiDeleteBin5Line } from "react-icons/ri";
// const SocialSharePayment: React.FC = () => {

//   const [file, setFile] = useState("");

//   const [logoFile, setLogoFile] = useState("");

//   return (
//     <div className="container mx-auto space-y-4 border-slate-300 py-10 shadow-4">
//       <div className="flex flex-col gap-3 items-center px-2 md:px-4 justify-center">
//         <CompanySupportLogo file={logoFile} setFile={setLogoFile} />
//       </div>
//       {/* <CompanySupportLogo file={logoFile} setFile={setLogoFile} /> */}
//     </div>
//   );
// };




// export default SocialSharePayment;



// const CompanySupportLogo = ({ file, setFile }: { file: any; setFile: any }) => {
//   const [url, setUrl] = useState(
//     "https://cdn-icons-png.flaticon.com/512/1160/1160358.png",
//   );
//   const urlInputRef = useRef(null);
//   return (
//     <>
//       <div className="flex items-center">
//         <h2 className="text-center text-2xl font-bold text-black">support logo</h2>
//         <div className="flex flex-col items-center gap-3">
//           {/* ------Select Logo -------- */}
//           <div className="flex items-center justify-center gap-5 md:gap-10">
//             <SelectSingleOrMultiImg
//               file={file}
//               setFile={setFile}
//               title="Select File"
//             />
//             <span onClick={() => setUrl((urlInputRef as any)?.current?.value)}>
//               <PrimaryButton text="Add" style={{ background: "#D3D6DB", color: "black", fontWeight: 'bold' }} />
//             </span>
//           </div>
//         </div>
//       </div>
//       {url && (
//         <div className="flex items-center px-2 justify-center gap-10 mt-10">
//           <div className="w-fit flex flex-col gap-3 items-center justify-center">
//             <Image src={emoji1} alt="emoji1" width={50} height={50} />
//             <div className="flex gap-2">
//               <Button style={{ padding: 0, border: 0, background: "transparent" }}><FaEdit size={18} /></Button>
//               <Button style={{ padding: 0, border: 0, background: "transparent" }}><RiDeleteBin5Line color="red" size={18} /></Button>
//             </div>
//           </div>
//           <div className="w-fit flex flex-col gap-3 items-center justify-center">
//             <Image src={emoji2} alt="emoji1" />
//             <div className="flex gap-2">
//               <Button style={{ padding: 0, border: 0, background: "transparent" }}><FaEdit size={18} /></Button>
//               <Button style={{ padding: 0, border: 0, background: "transparent" }}><RiDeleteBin5Line color="red" size={18} /></Button>
//             </div>
//           </div>
//           <div className="w-fit flex flex-col gap-3 items-center justify-center">
//             <Image src={emoji3} alt="emoji1" width={50} height={50} />
//             <div className="flex gap-2">
//               <Button style={{ padding: 0, border: 0, background: "transparent" }}><FaEdit size={18} /></Button>
//               <Button style={{ padding: 0, border: 0, background: "transparent" }}><RiDeleteBin5Line color="red" size={18} /></Button>
//             </div>
//           </div>
//           <div className="w-fit flex flex-col gap-3 items-center justify-center">
//             <Image src={emoji4} alt="emoji1" width={50} height={50} />
//             <div className="flex gap-2">
//               <Button style={{ padding: 0, border: 0, background: "transparent" }}><FaEdit size={18} /></Button>
//               <Button style={{ padding: 0, border: 0, background: "transparent" }}><RiDeleteBin5Line color="red" size={18} /></Button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* social media */}




//       <div className="mt-10 md:mt-20">
//         <div className="flex items-center">
//           <h2 className="text-center text-2xl font-bold text-black">support logo</h2>
//           <div className="flex flex-col items-center gap-3">
//             {/* ------Select Logo -------- */}
//             <div className="flex items-center justify-center gap-2 md:gap-5">
//               <SelectSingleOrMultiImg
//                 file={file}
//                 setFile={setFile}
//                 title="Select File"
//               />
//               <Input style={{ padding: "10px " }} placeholder="Url" />

//               <span onClick={() => setUrl((urlInputRef as any)?.current?.value)}>
//                 <PrimaryButton text="Add" style={{ background: "#D3D6DB", color: "black", fontWeight: 'bold' }} />
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="flex items-center px-2 justify-center gap-10 mt-10">
//           <div className="w-fit flex flex-col gap-3 items-center justify-center">
//             <Image src={emoji1} alt="emoji1" width={50} height={50} />
//             <div className="flex gap-2">
//               <Button style={{ padding: 0, border: 0, background: "transparent" }}><FaEdit size={18} /></Button>
//               <Button style={{ padding: 0, border: 0, background: "transparent" }}><RiDeleteBin5Line color="red" size={18} /></Button>
//             </div>
//           </div>
//           <div className="w-fit flex flex-col gap-3 items-center justify-center">
//             <Image src={emoji2} alt="emoji1" />
//             <div className="flex gap-2">
//               <Button style={{ padding: 0, border: 0, background: "transparent" }}><FaEdit size={18} /></Button>
//               <Button style={{ padding: 0, border: 0, background: "transparent" }}><RiDeleteBin5Line color="red" size={18} /></Button>
//             </div>
//           </div>
//           <div className="w-fit flex flex-col gap-3 items-center justify-center">
//             <Image src={emoji3} alt="emoji1" width={50} height={50} />
//             <div className="flex gap-2">
//               <Button style={{ padding: 0, border: 0, background: "transparent" }}><FaEdit size={18} /></Button>
//               <Button style={{ padding: 0, border: 0, background: "transparent" }}><RiDeleteBin5Line color="red" size={18} /></Button>
//             </div>
//           </div>
//           <div className="w-fit flex flex-col gap-3 items-center justify-center">
//             <Image src={emoji4} alt="emoji1" width={50} height={50} />
//             <div className="flex gap-2">
//               <Button style={{ padding: 0, border: 0, background: "transparent" }}><FaEdit size={18} /></Button>
//               <Button style={{ padding: 0, border: 0, background: "transparent" }}><RiDeleteBin5Line color="red" size={18} /></Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };






import React, { useRef, useState } from "react";
import { BsCloudUpload, BsTrash3 } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const availableIcons = [
  { name: "Instagram", icon: <FaInstagram /> },
  { name: "Twitter", icon: <FaTwitter /> },
  { name: "Facebook", icon: <FaFacebook /> },
];

interface SocialLink {
  icon: JSX.Element;
  name: string;
  url: string;
}

const SocialSharePayment: React.FC = () => {
  const [paymentImage, setPaymentImage] = useState<File | null>(null);
  const [paymentSavedImages, setPaymentSavedImages] = useState<File[]>([]);
  const [socialMediaIcons, setSocialMediaIcons] = useState<
    { icon: File; url: string }[]
  >([]);
  const [selectedSocialIcon, setSelectedSocialIcon] = useState<File | null>(
    null
  );
  const [socialMediaUrl, setSocialMediaUrl] = useState<string>("");

  const paymentInputRef = useRef<HTMLInputElement>(null);
  const socialIconInputRef = useRef<HTMLInputElement>(null);

  const handlePaymentSelect = () => paymentInputRef.current?.click();

  const handleSocialIconSelect = () => socialIconInputRef.current?.click();

  const handlePaymentImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (!file.type.startsWith("image/")) {
        alert("Please upload a valid image file.");
        return;
      }
      setPaymentImage(file);
    }
  };

  const handleSavePaymentImage = () => {
    if (paymentImage) {
      setPaymentSavedImages((prev) => [...prev, paymentImage]);
      setPaymentImage(null);
    }
  };

  const handleDeletePaymentImage = (index: number) => {
    setPaymentSavedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSocialIconChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (!file.type.startsWith("image/")) {
        alert("Please upload a valid image file.");
        return;
      }
      setSelectedSocialIcon(file);
    }
  };

  const handleAddSocialMediaIcon = () => {
    if (selectedSocialIcon && socialMediaUrl) {
      setSocialMediaIcons((prev) => [
        ...prev,
        { icon: selectedSocialIcon, url: socialMediaUrl },
      ]);
      setSelectedSocialIcon(null);
      setSocialMediaUrl("");
    } else {
      alert("Please provide both an icon and a URL.");
    }
  };

  const handleDeleteSocialIcon = (index: number) => {
    setSocialMediaIcons((prev) => prev.filter((_, i) => i !== index));
  };

  const [formData, setFormData] = useState<{
    socialLinks: SocialLink[];
  }>({
    socialLinks: [],
  });

  const [socialInput, setSocialInput] = useState<{
    name: string;
    icon: JSX.Element | null;
    url: string;
  }>({
    name: "",
    icon: null,
    url: "",
  });

  const handleAddSocialLink = () => {
    if (!socialInput.name || !socialInput.url) {
      alert("Please select an icon and provide a URL.");
      return;
    }
    setFormData((prev) => ({
      ...prev,
      socialLinks: [
        ...prev.socialLinks,
        { icon: socialInput.icon!, name: socialInput.name, url: socialInput.url },
      ],
    }));
    setSocialInput({ name: "", icon: null, url: "" }); // Reset input
  };

  const handleDeleteSocialLink = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      socialLinks: prev.socialLinks.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Payment Icon Section */}
      <div className="mb-10 w-full max-w-2xl">
        <h2 className="text-xl font-semibold text-left text-black dark:text-white mb-2">Payment Icon</h2>
        <div className="flex justify-between items-center gap-4">
          <button 
            onClick={handlePaymentSelect}
            className="bg-transparent px-3 h-9 whitespace-nowrap border border-[#ffb200] text-black dark:text-white"
          >
            Select File
          </button>
          <div className="">

          <div
            className="relative w-32 h-82 bg-white shadow-md rounded-lg cursor-pointer"
          >
            {paymentImage && (
              <>
                <img
                  src={URL.createObjectURL(paymentImage)}
                  alt="Payment Preview"
                  className="w-full h-full rounded-lg object-cover"
                />
                <button
                  className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPaymentImage(null);
                  }}
                >
                  <BsTrash3 color='red' />
                </button>
              </>
            // ) : (
            //   <BsCloudUpload size={30} className="text-gray-400" />
            )            }
          
          </div>
          <input
            type="file"
            ref={paymentInputRef}
            style={{ display: "none" }}
            accept="image/*"
            onChange={handlePaymentImageChange}
          />
          <button
            onClick={handleSavePaymentImage}
            className="bg-[#ffb200] text-black px-6 py-2 rounded"
          >
            Save
          </button>
        </div>
        </div>

        <div className="mt-4 flex flex-wrap justify-center bg-white gap-4">
          {paymentSavedImages.map((file, index) => (
            <div key={index} className="relative w-24 h-24 bg-white shadow-md rounded-lg">
              <img
                src={URL.createObjectURL(file)}
                alt={`Payment Icon ${index + 1}`}
                className="w-full h-full rounded-lg object-cover"
              />
              <button
                className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center"
                onClick={() => handleDeletePaymentImage(index)}
              >
                <BsTrash3 color='red' />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media Section */}
      <div className="w-full max-w-2xl">
        <h2 className="text-xl font-semibold text-left text-black dark:text-white mb-2">Social Media</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <select
              value={socialInput.name}
              onChange={(e) =>
                setSocialInput((prev) => ({
                  ...prev,
                  name: e.target.value,
                  icon: availableIcons.find((i) => i.name === e.target.value)?.icon!,
                }))
              }
              className="border border-white bg-white text-black dark:text-white focus:outline-none rounded px-4 py-2"
            >
              <option value=""
              className="text-black dark:text-white"
              >Select Icon</option>
              {availableIcons.map((icon) => (
                <option key={icon.name} value={icon.name}>
                  {icon.name}
                </option>
              ))}
            </select>
            <div className="w-86 flex">

            <input
              type="text"
              value={socialInput.url}
              onChange={(e) =>
                setSocialInput((prev) => ({ ...prev, url: e.target.value }))
              }
              placeholder="URL"
              className="border bg-white text0black dark:text-white border-white rounded focus:outline-none px-4 py-2 flex-1"
            />
            <button
              onClick={handleAddSocialLink}
              className="bg-[#ffb200] text-black dark:text-white px-6 py-2 mr-3 rounded"
            >
              Add
            </button>
            </div>

          </div>
          <div className="flex flex-wrap gap-4 bg-white">
            {formData.socialLinks.map((link, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center justify-center w-24 h-24 bg-gray-100 shadow-md rounded-lg"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full h-70">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-blue-500 underline"
                >
                  {link.icon}
                  </a>
                </div>
                
                <button
                  onClick={() => handleDeleteSocialLink(index)}
                  className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center"
                >
                  <BsTrash3 color='red' />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialSharePayment;
