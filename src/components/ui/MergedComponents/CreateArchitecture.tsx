import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AiOutlineEdit } from "react-icons/ai";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

import dynamic from "next/dynamic";
import CustomSearch from "../CustomSearch";
import { Button, Modal, Row } from "antd";
import CustomForm from "@/components/Form/Form";
import PrimaryButton from "@/components/button/PrimaryButton";
import CustomInput from "@/components/Form/Input";
import CustomTextarea from "@/components/Form/Textarea";
import { MdDelete } from "react-icons/md";
import SelectSingleOrMultiImg from "@/components/Upload/SelectSingleOrMultiImg";
import { FaCheck } from "react-icons/fa";

//
const CreateArchitecture: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [showConfirmation, setShowConfirmatin] = useState(false);
  const [draggedRow, setDraggedRow] = useState(null);
  const editor = useRef(null);
  // delete recor hooks
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteIndexBlog, SetDeleteIndexBlog] = useState<any>(null);
  const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
  const handleClosePopUp = () => {
    setIsVisible(false);
  };

  const config = {
    height: 600,
  };

  const [bloagData, setBlogData] = useState([
    {
      title: "Large Society 1",
      blog: " Words combined with a handfull of model to generate which looks reasonable",
    },
    {
      title: "Large Society 2",
      blog: " Words combined with a handfull of model to generate which looks reasonable",
    },
    {
      title: "Large Society 3",
      blog: " Words combined with a handfull of model to generate which looks reasonable",
    },
    {
      title: "Large Society 4",
      blog: " Words combined with a handfull of model to generate which looks reasonable",
    },
    {
      title: "Large Society 5",
      blog: " Words combined with a handfull of model to generate which looks reasonable",
    },
    {
      title: "Large Society 6",
      blog: " Words combined with a handfull of model to generate which looks reasonable",
    },
  ]);

  const [content, setContent] = useState("");
  const inputStyle = "p-2 border w-full rounded-md border-blue-400";

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsVisible(false);
    setIsFormSubmitted(true);
  };
  const handleConfirmation = (confirmed: boolean) => {
    if (confirmed) {
      setIsChecked(!isChecked);
    }
    setShowConfirmatin(false);
  };

  const [activeBlogIndex, setActiveBlogIndex] = useState([]);

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: any,
  ) => {
    setActiveBlogIndex(index === activeBlogIndex ? null : index);
    if (isChecked) {
      setIsChecked(!isChecked);
    } else {
      setShowConfirmatin(true);
    }
  };

  // Delete Data handle code

  const handleRemoveRowFromTable = (index: number) => {
    setShowDeleteConfirmation(true);
    SetDeleteIndexBlog(index);
  };
  const confirmDelete = () => {
    setBlogData((prevData) => {
      const newData = [...prevData];
      newData.splice(deleteIndexBlog, 1);
      return newData;
    });
    setShowDeleteConfirmation(false);
  };

  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
  };
  // Delete Data handle code

  // drage blog box funtinality

  const handleDrageStart = (e: React.DragEvent, index: any) => {
    setDraggedRow(index);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", index);
  };

  const handleDragOver = (e: React.DragEvent, index: any) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, index: any) => {
    e.preventDefault();
    const draggedRowIndex = Number(e.dataTransfer.getData("text/html"));
    const newTableData = [...bloagData];
    const draggedRowData = newTableData[draggedRowIndex];

    newTableData.splice(draggedRowIndex, 1);
    newTableData.splice(index, 0, draggedRowData);
    setBlogData(newTableData);
    setDraggedRow(null);
  };

  // for input taking file code
  const FileInputRef = useRef<HTMLInputElement>(null);
  const FileInputRef2 = useRef<HTMLInputElement>(null);
  const [selectInputFiles, setSlectInputFile] = useState<any>();
  const [selectInputFilesBaner, setSlectInputFileBaner] = useState<any>([]);
  const [confirmationPopUp, setConfirmationPopUp] = useState(false);
  const [confirmationPopUpBaner, setConfirmationPopUpBaner] = useState(false);
  const [uploadSucces, setUploadSuccess] = useState(false);
  const [uploadedFile, setUploadedFiles] = useState([]);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const selectedFiles = files as FileList;
    const file = selectedFiles[0];
    if (file) {
      setSlectInputFile(file);
    }
  };
  const handleFileChangeBaner = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const file = files as FileList;
    if (file && file.length > 0) {
    }
  };
  const handleConfirmationPopUp = () => {
    setConfirmationPopUp(true);
  };
  const handleConfirmationPopUpBaner = () => {
    setConfirmationPopUpBaner(true);
  };

  const handleCancel = () => {
    setConfirmationPopUp(false);
  };
  const handleCancelBaner = () => {
    setConfirmationPopUpBaner(false);
  };

  const handleEditClick = () => {
    FileInputRef.current?.click();
  };
  const handleEditClickBaner = () => {
    FileInputRef2.current?.click();
  };

  const handleDeleteFile = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSlectInputFile(null); //this is for now temporary use when data store in db this ilne
    setConfirmationPopUp(false);
  };
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [confirmationPopUpIUplod, setConfirmationPopUpate] = useState(false);

  const handleDeleteFileBaner = (index: any) => {
    setDeleteIndex(index); //this is for now temporary use when data store in db this ilne
    setConfirmationPopUpate(true);
  };
  

  const handleDeleteUplod = () => {
   
  };

  const handleUplodCancel = () => {
    setConfirmationPopUpate(false);
  };

  const handleUploadLogo = () => {
    setSlectInputFile(null);
    setUploadSuccess(true);

    setTimeout(() => {
      setUploadSuccess(false);
    }, 3000);
  };
  const handleUploadClick = () => {
   

    setTimeout(() => {
      setUploadSuccess(false);
    }, 1000);
  };

  const onSearch = (value: any) => {
    console.log(value);
  };
  // for input taking file code

  const buttonStyle =
    "bg-indigo-600 p-2 w-40 text-lg font-semibold text-white mt-4  rounded-md border border-indigo-500 flex items-center justify-center gap-2 hover:bg-indigo-100";

  return (
    <div>
      <div className="m-1  flex w-full place-items-end justify-center py-10">
        <div>
          <p className="my-3 text-center text-2xl font-bold">
            Create Architecture
          </p>
          <div className="flex w-full  justify-between">
            <div className="... flex  justify-center">
              <div className="... w-48 flex-none  rounded-2xl"></div>
              <div className="...  grow  text-center">
                <div className="mb-3 ">
                  <div className="relative mb-4 flex w-full flex-wrap items-stretch ">
                    {/* search */}
                    <CustomSearch onSearch={onSearch} placeholder="Search..." />
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-36">
              <CreateArchitectureModal />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-auto mt-20 flex flex-wrap  items-center  justify-center gap-4 space-y-2">
          {bloagData.map((item, index) => (
            <SingleOrder item={item} key={index} />
          ))}
        </div>
      </div>

      {isFormSubmitted && (
        <div className="pt-6">
          <ul>
            <div className="border-gray-800 w-96 border px-8 py-4">
              <button className="mt-3 bg-green-600 px-4 py-1.5 text-white">
                Edit
              </button>
            </div>
          </ul>
        </div>
      )}
      {uploadSucces && (
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-slate-700 bg-opacity-75">
          <div className="rounded-md bg-gradient-to-tr from-yellow-200 to-pink-200   p-4">
            <p className="text-2xl font-bold text-green-500 ">
              {" "}
              Uploaded Successfully
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

// Crate modal
const CreateArchitectureModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState<File[]>([]);
  const [ContentValue, setContentValue] = useState<string>("");
  const editor = useRef(null);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onSubmitForm = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <Button className="bg-blue-500 text-white" onClick={showModal}>
        Creation Architecture
      </Button>
      <Modal
        title="Create Architecture"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        centered
        width={900}
      >
        {/* FORM */}
        <div className="mx-auto w-[95%]">
          <div className="mb-3 flex flex-col items-center gap-3">
            {/* ------Select Logo -------- */}
            <SelectSingleOrMultiImg
              file={file}
              setFile={setFile}
              title="Select File"
            />
            <PrimaryButton text="Save" />
          </div>
          <CustomForm onSubmit={onSubmitForm} className="w-full">
            <CustomInput
              type="text"
              name="title"
              placeholder="Title"
              label="Title"
            />
            <CustomInput
              type="number"
              name="plantAmount"
              placeholder="Plant Amount"
              label="Plant Amount"
            />
            <PrimaryButton type="submit" text={"Submit"} />
          </CustomForm>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            <div>
              <label className="text-md py-5">Plant Description</label>
              <JoditEditor
                ref={editor}
                value={ContentValue}
                config={{
                  height: 300,
                }}
                onBlur={(newContent) => setContentValue(newContent)} // preferred to use only this option to update the content for performance reasons
              />
            </div>
            <CustomForm
              onSubmit={(data) => {
                console.log(data);
              }}
            >
              <CustomTextarea
                label="Panlt Details"
                type="text"
                name="plantDetails"
              />
            </CustomForm>
          </div>
          <PrimaryButton text="Add" className="mt-2 w-full" />
        </div>
      </Modal>
    </>
  );
};

// blogModal
const SingleOrder = ({ item }: { item: any }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className={`w-[350px] text-center font-medium`}>
      <div className="flex flex-col  px-2 ">
        <div className="flex items-center justify-between gap-1 bg-slate-300 p-2 ">
          {/* Togale tbn */}
          <label className="flex cursor-pointer select-none items-center">
            <div className="relative">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="sr-only"
              />
              <div
                className={`box block h-8 w-14 rounded-full ${
                  isChecked ? "bg-green-500" : "bg-slate-400"
                }`}
              ></div>
              <div
                className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center  rounded-full bg-white  transition ${
                  isChecked ? "translate-x-full" : ""
                }`}
              ></div>
            </div>
          </label>
          <AiOutlineEdit
           
            size={30}
          />
          <MdDelete
            className="cursor-pointer  text-rose-600"
            size={30}
          />
        </div>
        <div className="relative h-[400px] w-full overflow-hidden">
          <Image
            height={800}
            alt="img"
            width={800}
            className="h-full object-cover"
            src={
              "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
            }
          />
          <div className="absolute bottom-0 left-0 right-0 top-[30%] flex flex-col justify-between bg-slate-600/50 p-5 font-semibold text-meta-6">
            <div className="flex items-center justify-between">
              <span>Staning Design</span>
              <span>3200$</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <FaCheck />
                <span>Moder Scale</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck />
                <span>Moder Scale</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck />
                <span>Moder Scale</span>
              </div>
            </div>
            <div>
              <button className="w-full rounded bg-meta-6 p-1 py-3 font-bold text-white">
                See Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateArchitecture;
