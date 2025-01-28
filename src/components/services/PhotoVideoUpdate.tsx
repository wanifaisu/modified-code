import { Poppins } from "next/font/google";
import { useRef, useState } from "react";
import SelectSingleOrMultiImgOrVideo from "../Upload/SelectSIngleOrMultiImgAll";
import DisplayUploadedImage from "./displayImage/DisplayUploadedImage";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface Item {
  id: number;
  text: string;
  visible: boolean;
}

const PhotoVideoUpdate = () => {
  const [file, setFile] = useState("");
  const [logoFile, setLogoFile] = useState("");

  const [content, setContent] = useState<string>("");
  const [items, setItems] = useState<Item[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const editorRef = useRef(null);

  // Add Item
  const handleAddItem = () => {
    if (!inputValue.trim()) return;
    setItems([
      ...items,
      {
        id: Date.now(),
        text: inputValue.trim(),
        visible: true,
      },
    ]);
    setInputValue(""); // Clear input
  };

  // Delete Item
  const handleDeleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Toggle Visibility
  const handleToggleVisibility = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, visible: !item.visible } : item
      )
    );
  };

  return (
    <div className="mx-auto border-slate-300 p-3 ml-[1rem]">
      <div className="flex gap-3">
        <div className="max-w-[980px] max-h-[802px] mx-auto bg-white p-5 rounded-[32px] w-[61rem]">
          <MapPhotoVideoUplod file={file} setFile={setFile} />

          <div
            className="mt-10 grid gap-3 sm:grid-cols-2 md:gap-5 lg:grid-cols-4 xl:grid-cols-7 
          overflow-y-auto scroll-auto"
            style={{ maxHeight: "400px" }}
          >
            {Array.from({ length: 30 }).map((_, index) => (
              <DisplayUploadedImage
                key={index}
                title={"title"}
                src={"/images/service-1.png"}
                onDelete={() =>
                  console.log(`Delete clicked for image ${index + 1}`)
                }
              />
            ))}
          </div>

          <div className="text-center my-10">
            <h4
              className={`${poppins.className} font-semibold text-[11px] leading-[16.5px] text-[#000000]`}
            >
              Showing 1 to 5 of 97 results
            </h4>
            <button
              className={`${poppins.className} font-semibold text-[13px] leading-[19.5px] text-[#000000] 
              w-[122px] h-[38px] border border-[#000000] rounded-[10px] px-1 mx-auto mt-2 bg-[#FFB200]`}
            >
              More Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const MapPhotoVideoUplod = ({ file, setFile }: { file: any; setFile: any }) => {
  return (
    <div className="flex flex-row justify-around items-center w-full mt-[2rem]">
      {/* ------Select Logo -------- */}
      <SelectSingleOrMultiImgOrVideo
        style={{ background: "#3B82F6" }}
        file={file}
        setFile={setFile}
        title="Photo/Video"
      />

      <div className="flex max-w-[371px] h-[48px] bg-[#F8F6F0] flex-row w-full justify-center rounded-[5px] border border-[#000000]">
        <input
          type="text"
          placeholder="Title/Url"
          className="font-inter font-light text-[15px] placeholder-black pl-[1rem] leading-[12.1px] text-[#000000] w-[319px] h-[46px] bg-[#F8F6F0] rounded-l-[5px]"
        />{" "}
        <button className="w-[95px] h-[46px] bg-[#FFB200] text-black rounded-[8px]">
          Save
        </button>
      </div>
    </div>
  );
};

export default PhotoVideoUpdate;

// 'use client';
// import { useRef, useState } from 'react';
// import SelectSingleOrMultiImgOrVideo from '../Upload/SelectSIngleOrMultiImgAll';
// import { Button, Form, Input, Space, Switch } from 'antd';
// import { FaArrowDown } from 'react-icons/fa';
// import { BiTrash } from 'react-icons/bi';
// import DisplayUploadedImage from './displayImage/DisplayUploadedImage';

// interface Item {
//   id: number;
//   text: string;
//   visible: boolean;
// }

// const PhotoVideoUpdate = () => {
//   const [file, setFile] = useState<File | null>(null); // For current file preview
//   const [uploadedMedia, setUploadedMedia] = useState<string[]>([]); // To store uploaded files
//   const [items, setItems] = useState<Item[]>([]);
//   const [inputValue, setInputValue] = useState<string>('');

//   const editorRef = useRef(null);

//   // Add Item
//   const handleAddItem = () => {
//     if (!inputValue.trim()) return;
//     setItems([
//       ...items,
//       {
//         id: Date.now(),
//         text: inputValue.trim(),
//         visible: true,
//       },
//     ]);
//     setInputValue(''); // Clear input
//   };

//   // Delete Item
//   const handleDeleteItem = (id: number) => {
//     setItems(items.filter((item) => item.id !== id));
//   };

//   // Toggle Visibility
//   const handleToggleVisibility = (id: number) => {
//     setItems(
//       items.map((item) =>
//         item.id === id ? { ...item, visible: !item.visible } : item
//       )
//     );
//   };

//   // Handle Upload Submit
//   const handleUploadSubmit = () => {
//     if (file) {
//       setUploadedMedia([...uploadedMedia, URL.createObjectURL(file)]); // Add file to the gallery as URL
//       setFile(null); // Clear the current file preview
//     }
//   };

//   // Delete Uploaded Media
//   const handleDeleteUploadedMedia = (index: number) => {
//     setUploadedMedia(uploadedMedia.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="container mx-auto border-slate-300 p-3 shadow-4 h-100%">
//       <div className="flex gap-3">
//         {/* Left side bar */}
//         <div className="min-w-[200px] bg-[#D1CCCC] p-3">
//           <Form className="flex flex-col gap-4">
//             <Space.Compact>
//               {/* Input for Adding Items */}
//               <Form.Item noStyle>
//                 <Input
//                   value={inputValue}
//                   onChange={(e) => setInputValue(e.target.value)}
//                   placeholder="Enter item"
//                   style={{ padding: '10px', width: '100%' }}
//                 />
//               </Form.Item>
//               <Form.Item noStyle>
//                 <Button
//                   onClick={handleAddItem}
//                   style={{
//                     background: '#D9D9D9',
//                     border: '0',
//                     padding: '25px',
//                     display: 'flex',
//                     alignItems: 'center',
//                   }}
//                 >
//                   Add
//                 </Button>
//               </Form.Item>
//             </Space.Compact>

//             {/* List of Items */}
//             {items.map((item) => (
//               <Space.Compact key={item.id} className="mb-2">
//                 <Form.Item noStyle>
//                   <Input
//                     value={item.visible ? item.text : '*****'}
//                     readOnly
//                     style={{
//                       padding: '10px',
//                       width: '100%',
//                       background: '#D9D9D9',
//                     }}
//                   />
//                 </Form.Item>
//                 <Form.Item noStyle>
//                   <div className="flex items-center bg-[#D9D9D9] gap-2">
//                     <Switch
//                       checked={item.visible}
//                       onChange={() => handleToggleVisibility(item.id)}
//                     />
//                     <BiTrash
//                       className="text-red text-2xl cursor-pointer"
//                       onClick={() => handleDeleteItem(item.id)}
//                     />
//                   </div>
//                 </Form.Item>
//               </Space.Compact>
//             ))}
//           </Form>
//         </div>

//         {/* Main Content */}
//         <div className="mx-auto w-full">
//           <h2 className="mb-4 text-center text-2xl font-bold text-black md:text-3xl">
//             Service Gallery
//           </h2>

//           {/* File Upload Section */}
//           <div className="flex-1">
//             <MapPhotoVideoUpload file={file} setFile={setFile} onSubmit={handleUploadSubmit} />
//           </div>

//           {/* Preview of Uploaded File */}
//           {file && (
//             <div className="mt-4 text-center">
//               <h3 className="text-lg font-medium">Preview:</h3>
//               <img
//                 src={URL.createObjectURL(file)}
//                 alt="Preview"
//                 className="rounded-md mt-2 mx-auto"
//                 style={{ maxWidth: '200px', maxHeight: '150px' }}
//               />
//             </div>
//           )}

//           {/* Uploaded Media Gallery */}
//           <div className="mt-10 grid gap-3 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-5">
//             {uploadedMedia.map((media, index) => (
//               <DisplayUploadedImage
//                 key={index}
//                 src={media}
//                 onDelete={() => handleDeleteUploadedMedia(index)}
//               />
//             ))}
//           </div>

//           {/* Show More Results */}
//           <div className="text-center my-10">
//             <h4 className="font-bold text-black">
//               Showing 1 to {uploadedMedia.length} of {uploadedMedia.length} results
//             </h4>
//             <div className="flex justify-center mt-4 z-10">
//               <Button className="bg-[#FFB200] text-black font-semibold px-6 py-2 rounded-full">
//                 More Results
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Upload Component
// const MapPhotoVideoUpload = ({ file, setFile, onSubmit }: { file: File | null; setFile: (file: File | null) => void; onSubmit: () => void }) => {
//   return (
//     <div className="mb-3 flex w-full items-center justify-evenly gap-3">
//       {/* Select Logo */}
//       <SelectSingleOrMultiImgOrVideo
//         style={{ background: '#3B82F6' }}
//         file={file}
//         setFile={setFile}
//         title="Photo/Video"
//       />
//       <Space.Compact>
//         <Button
//           onClick={onSubmit}
//           style={{
//             background: '#F8C71B',
//             border: '0',
//             display: 'flex',
//             alignItems: 'center',
//             padding: '25px',
//           }}
//         >
//           Add
//         </Button>
//       </Space.Compact>
//     </div>
//   );
// };

// export default PhotoVideoUpdate;
