import Image from "next/image";
import React, { useRef, useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import Plan from "./Plan";
const OfficeAddress: React.FC = () => {
  const FileInputRef = useRef<HTMLInputElement>(null);
  const FileInputRef2 = useRef<HTMLInputElement>(null);
  const [selectInputFiles, setSlectInputFile] = useState<string[] | null>([]);
  const [selectInputFilesBaner, setSlectInputFileBaner] = useState<any>([]);
  const [confirmationPopUp, setConfirmationPopUp] = useState(false);
  const [confirmationPopUpBaner, setConfirmationPopUpBaner] = useState(false);
  const [uploadSucces, setUploadSuccess] = useState(false);
  const [uploadedFile, setUploadedFiles] = useState([]);
  const [uploadFilesLogo, setUploadFilesLogo] = useState<any>([]);

  const handleFileChangeBaner = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (file && file.length > 0) {
      setSlectInputFileBaner(Array.from(file));
    }
  };

  const handleConfirmationPopUp = () => {
    setConfirmationPopUp(true);
  };
  const handleConfirmationPopUpBaner = () => {
    setConfirmationPopUpBaner(true);
  };

  const handleConfirmationPopUpBanerIcon = () => {
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

  const [deleteIndex, setDeleteIndex] = useState<any>(null);
  const [deleteIndexIcon, setDeleteIndexIcon] = useState(null);
  const [confirmationPopUpIUplod, setConfirmationPopUpate] = useState(false);
  const [confirmationPopUpIcon, setConfirmationPopIcon] = useState(false);

  const handleDeleteFileClck = (index: number) => {
    setDeleteIndex(index); //this is for now temporary use when data store in db this ilne
    setConfirmationPopUpate(true);
  };

  const handleDeleteFileBaner = () => {
    setDeleteIndex(null);
  };
  const [updatedFileIcons, setUpdatedFileIcon] = useState<any>([]);
  const [ConfirmationPopIconPop, setConfirmationPopIconPop] = useState(false);
  const handleDeleteIcon = () => {
    const updatedFiles = [...updatedFileIcons];
    updatedFileIcons.splice(deleteIndexIcon, 1);
    setUpdatedFileIcon(updatedFiles);
    setConfirmationPopIcon(false);
    setDeleteIndexIcon(null);
  };
  const handleDeleteUplod = () => {
    const updatedFiles = [...uploadedFile];
    updatedFiles.splice(deleteIndex, 1);
    setUploadedFiles(updatedFiles);
    setConfirmationPopUpate(false);
    setDeleteIndex(null);
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
    // setUploadedFiles([...uploadedFile, ...selectInputFilesBaner]);
    setSlectInputFileBaner([]);
    setUploadSuccess(true);

    setTimeout(() => {
      setUploadSuccess(false);
    }, 2000);
  };
  const handleUploadClickIcon = () => {
    // setUploadFilesLogo([...uploadFilesLogo, ...selectInputFiles]);
    setSlectInputFileBaner([]);
    setUploadSuccess(true);

    setTimeout(() => {
      setUploadSuccess(false);
    }, 2000);
  };

  // for input taking file code
  const homeOptions = ["USA"];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState(homeOptions?.[0]);
  const [selectedIconUrl, setSlectedIconUrl] = useState(null);

  const openModal = () => {
    // console.log("Open");
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleConfirm = () => {
    closeModal();
  };

  const inputStyle = "p-2 border w-full rounded-md border-blue-400";
  const buttonStyle =
    "bg-indigo-600 p-2 w-40 text-lg font-semibold text-white mt-4  rounded-md border border-indigo-500 flex items-center justify-center gap-2 hover:bg-indigo-100";

  const buttonStyleOrange =
    "bg-yellow-400 p-2 w-40 text-lg font-semibold text-white mt-4  rounded-md border border-indigo-500 flex items-center justify-center gap-2 hover:bg-indigo-100";

  const handleAddIcon = () => {
    // Perform any additional actions when the "Add icon" button is clicked
    // For example, show a confirmation popup or save the icon URL.
  };

  //todo list code
  const [items, setItems] = useState<any>([]);
  const [text, setText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    if (text !== "") {
      const updatedItems = [...items, text];
      setItems(updatedItems);
      setText("");
    }
  };

  const handleDelete = (id: number) => {
    const updatedItems = items.filter((element: any, i: number) => i !== id);
    setItems(updatedItems);
  };
  return (
    <div className="space-y-4">
      <section>
        <div className="mx-auto grid max-w-5xl grid-cols-7 items-center gap-4 rounded-xl p-4">
          <div className="col-span-1"></div>
          <div className="col-span-4">
            <div className="space-y-3">
              <div>
                <form className="relative text-black m-10 space-y-3 rounded-md border border-slate-100 bg-[#FFFFFF80] p-6 shadow-xl lg:p-10 dark:text-white font-inter dark:bg-boxdark">
                  <div>
                    <label className="font-semibold">Address</label>
                    <input
                      type="text"
                      placeholder="Address"
                      className="mt-2 h-12 w-full rounded-md bg-slate-100 px-3 outline-none focus:ring"
                    />
                  </div>
                  <div className="">
                    <label className=""> Email </label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="mt-2 h-12 w-full rounded-md bg-slate-100 px-3 outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <label className=""> Phone </label>
                    <input
                      type="text"
                      placeholder="Number"
                      className="mt-2 h-12 w-full rounded-md bg-slate-100 px-3 outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <label className=""> Flex </label>
                    <input
                      type="text"
                      placeholder="Number"
                      className="mt-2 h-12 w-full rounded-md bg-slate-100 px-3 outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <button
                      type="button"
                      className="mt-5 w-full rounded-md border border-black bg-[#ffb200] p-2 text-center font-bold text-black outline-none focus:ring dark:text-white font-inter dark:bg-boxdark dark:border-white"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* payment section  */}

      {/* Social Media Section  */}
      <section className="mx-auto hidden max-w-5xl rounded-xl bg-white p-4">
        <div className="flex flex-col  space-y-4 ">
          <div className="px-10">
            <h2 className="text-center text-2xl font-bold">Payment icon </h2>
            <div className="mb-5 py-10 ">
              <div className="w-1/2">
                <input
                  type="file"
                  name="banner"
                  className="  hidden"
                  onChange={handleFileChangeBaner}
                  ref={FileInputRef2}
                />
                <div className="flex items-center gap-2 space-x-4">
                  <button
                    className="rounded bg-blue-500 px-4 py-2 text-white"
                    onClick={() => FileInputRef2.current?.click()}
                  >
                    Select icon File{" "}
                  </button>
                  {selectInputFilesBaner.length > 0 && (
                    <div className="m-2 mt-4 flex w-[250px] items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        <div>
                          {selectInputFilesBaner.map(
                            (file: any, index: number) => (
                              <div key={index} className="flex space-x-1">
                                <Image
                                  src={URL.createObjectURL(file)}
                                  alt="Baner"
                                  className="mr-3 h-20 w-20 rounded"
                                  width={20}
                                  height={20}
                                />
                                <button
                                  className="h-fit rounded bg-green-500 px-2 py-2 text-white"
                                  onClick={handleEditClickBaner}
                                >
                                  <BiEdit size={30} />
                                </button>
                                <button
                                  className="h-fit rounded bg-rose-500 px-2 py-2 text-white"
                                  onClick={handleConfirmationPopUpBaner}
                                >
                                  <BiTrash size={30} />
                                </button>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <button className={buttonStyle} onClick={handleUploadClick}>
                  Upload ICO
                </button>
              </div>
              <div className="mx-auto flex w-full flex-col items-center justify-center gap-2">
                <div className="py-1 text-center text-2xl font-bold text-blue-600 dark:text-white">
                  List of payment icons
                </div>

                <div className="container-fluid my-5 w-full bg-slate-100 p-5">
                  <div className="w-full rounded-lg bg-white p-5 shadow-lg">
                    <div className="mb-4 flex items-center">
                      <div className="w-1/6">
                        <input type="file" />
                      </div>
                      <div className="w-4/6">
                        <input
                          type="text"
                          className={inputStyle}
                          placeholder="Write Plan Here"
                          value={text}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="w-1/6">
                        <button
                          className={buttonStyleOrange}
                          onClick={handleAdd}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                    <div className="container">
                      <ul className="m-5 list-none">
                        {items.map((value: any, i: number) => (
                          <Plan
                            key={i}
                            id={i}
                            value={value}
                            sendData={handleDelete}
                          />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {uploadedFile.length > 0 && (
                  <div className="m-2 flex space-x-3 ">
                    {uploadedFile.map((file, index) => (
                      <div
                        key={index}
                        className="felx flex-col-reverse space-x-1 space-y-2"
                      >
                        <Image
                          src={URL.createObjectURL(file)}
                          alt="Baner"
                          className="h-24 w-24 rounded"
                          width={20}
                          height={20}
                        />
                        <button
                          className="rounded bg-green-500 px-2 py-2 text-white"
                          onClick={handleEditClickBaner}
                        >
                          <BiEdit />
                        </button>
                        <button
                          className="mr-1 rounded bg-rose-500 px-2 py-2 text-white"
                          onClick={() => handleDeleteFileClck(index)}
                        >
                          <BiTrash />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* <SocialMEdiaIcons /> */}
        </div>

        {/* Bannar  Confarmatin MOdal of delete uplod icon */}
        {confirmationPopUpIcon && (
          <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-slate-700 bg-opacity-75">
            <div className="rounded-md bg-white p-4">
              <p>Arue you sure to Delte this Record?</p>
              <div className="mt-4 flex justify-end">
                <button
                  className="mr-2 rounded-md bg-rose-500 px-4 py-2 text-white"
                  onClick={handleDeleteIcon}
                >
                  Confirm
                </button>
                <button
                  className="mr-2 rounded-md bg-slate-400 px-4 py-2 text-white"
                  onClick={handleUplodCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Bannar  Confarmatin MOdal of delete uplod icon */}
        {confirmationPopUpIUplod && (
          <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-slate-700 bg-opacity-75">
            <div className="rounded-md bg-white p-4">
              <p>Arue you sure to Delte this Record?</p>
              <div className="mt-4 flex justify-end">
                <button
                  className="mr-2 rounded-md bg-rose-500 px-4 py-2 text-white"
                  onClick={handleDeleteUplod}
                >
                  Confirm
                </button>
                <button
                  className="mr-2 rounded-md bg-slate-400 px-4 py-2 text-white"
                  onClick={handleUplodCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Bannar  Confarmatin MOdal */}
        {confirmationPopUpBaner && (
          <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-slate-700 bg-opacity-75">
            <div className="rounded-md bg-white p-4">
              <p>Arue you sure to Delte this Record?</p>
              <div className="mt-4 flex justify-end">
                <button
                  className="mr-2 rounded-md bg-rose-500 px-4 py-2 text-white"
                  onClick={handleDeleteFileBaner}
                >
                  Confirm
                </button>
                <button
                  className="mr-2 rounded-md bg-slate-400 px-4 py-2 text-white"
                  onClick={handleCancelBaner}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        {/*  LOgo Confarmatin MOdal */}
        {confirmationPopUp && (
          <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-slate-700 bg-opacity-75">
            <div className="rounded-md bg-white p-4">
              <p>Arue you sure to Delte this Record?</p>
              <div className="mt-4 flex justify-end">
                <button
                  className="mr-2 rounded-md bg-rose-500 px-4 py-2 text-white"
                  onClick={handleDeleteFile}
                >
                  Confirm
                </button>
                <button
                  className="mr-2 rounded-md bg-slate-400 px-4 py-2 text-white"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Data upload pop up */}

        {uploadSucces && (
          <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-slate-700 bg-opacity-75">
            <div className="rounded-md bg-white p-4">
              <p className="text-green-500">Uploaded Successfully</p>
            </div>
          </div>
        )}

        {/* Data upload pop up */}

        {uploadSucces && (
          <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-slate-700 bg-opacity-75">
            <div className="rounded-md bg-white p-4">
              <p className="text-green-500">Uploaded Successfully</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default OfficeAddress;
