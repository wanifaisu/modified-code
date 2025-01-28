// import { Button, Upload } from "antd";
// import { LuImagePlus } from "react-icons/lu";

// const SelectSingleOrMultiImgOrVideo = ({
//   setFile,
//   file,
//   title,
//   multiple,
//   style
// }: {
//   setFile: any;
//   file: any;
//   title: string;
//   multiple?: boolean;
//   style?: any
// }) => {
//   const onChangeWithCondition = (e: any) => {
//     if (multiple && e.fileList.length >= 1) {
//       const orginalFilesArray = e.fileList.map((f: any) => f.originFileObj);
//       setFile(orginalFilesArray);
//       return;
//     }
//     if (!multiple && e.fileList.length >= 1) {
//       setFile([e.fileList[0]?.originFileObj]);
//       return;
//     }
//     setFile("");
//   };
//   const fileProps = {
//     beforeUpload: () => false,
//     onChange: onChangeWithCondition,
//     listType: "picture",
//     maxCount: multiple ? 100 : 1,
//     type: "drag",
//     multiple: multiple || false,
//   };
//   return (
//     <Upload className="p-4" {...(fileProps as any)} style={style}>
//       <Button
//         className={`flex items-center gap-2  ${file.length > 0 && "bg-green-600 text-white"} p-5 text-2xl`}
//       >
//         {file.length >= 1
//           ? `${multiple ? "Add More" : "Replace"} : ${file.length > 1 ? "Multiple Selected" : file[0]?.name}`
//           : title}
//       </Button>
//     </Upload>
//   );
// };

// export default SelectSingleOrMultiImgOrVideo;

import { Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons"; // Replace with `LuImagePlus` if needed
import Image from 'next/image'

const SelectSingleOrMultiImgOrVideo = ({
  setFile,
  file,
  title,
  multiple,
  style,
}: {
  setFile: (files: any) => void;
  file: File[] | File | null;
  title: string;
  multiple?: boolean;
  style?: React.CSSProperties;
}) => {
  const onChangeWithCondition = (info: any) => {
    const fileList = info.fileList || [];
    if (multiple) {
      const originalFilesArray = fileList.map((f: any) => f.originFileObj);
      setFile(originalFilesArray);
    } else {
      const selectedFile =
        fileList.length > 0 ? fileList[0]?.originFileObj : null;
      setFile(selectedFile);
    }
  };

  const fileProps = {
    beforeUpload: () => false, // Prevent default upload behavior
    onChange: onChangeWithCondition,
    listType: "picture" as "picture",
    maxCount: multiple ? 100 : 1,
    multiple: !!multiple,
  };

  const isFileArray = Array.isArray(file);
  const fileCount = isFileArray ? file.length : file ? 1 : 0;

  return (
    <Upload {...fileProps} className="flex flex-col">
       <Image 
              src={'/icons/upload.png'}
              width={38}
              height={38}
              className="object-contain"
              alt="upload"
            />
      {/* <Button
        className={`flex items-center gap-2 ${
          fileCount > 0 ? "bg-green-600 text-white" : "bg-blue-500"
        }`}
        style={style}
      >
        {fileCount > 0
          ? `${multiple ? "Add More" : "Replace"} : ${
              fileCount > 1
                ? "Multiple Selected"
                : isFileArray
                ? file[0]?.name
                : file?.name
            }`
          : title}
      </Button> */}
    </Upload>
  );
};

export default SelectSingleOrMultiImgOrVideo;
