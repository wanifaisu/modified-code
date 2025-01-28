import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";

const IconUpload = () => {
  // for input taking file code
  const FileInputRef = useRef<HTMLInputElement>(null);
  const FileInputRef2 = useRef<HTMLInputElement>(null);
  const [selectInputFiles, setSlectInputFile] = useState<any>([]);
  const [selectInputFilesBaner, setSlectInputFileBaner] = useState<any>([]);
  const [confirmationPopUp, setConfirmationPopUp] = useState<boolean>(false);
  const [confirmationPopUpBaner, setConfirmationPopUpBaner] =
    useState<boolean>(false);
  const [uploadSucces, setUploadSuccess] = useState<boolean>(false);
  const [uploadedFile, setUploadedFiles] = useState<any>([]);
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

  const handleCancel = () => {
    setConfirmationPopUp(false);
  };
  const handleCancelBaner = () => {
    setConfirmationPopUpBaner(false);
  };


  const handleEditClickBaner = () => {
    // 👉️ ref could be null here
    if (FileInputRef2.current != null) {
      // 👉️ TypeScript knows that ref is not null here
      FileInputRef2.current.click();
    }
  };

  const handleDeleteFile = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSlectInputFile(null); //this is for now temporary use when data store in db this ilne
    setConfirmationPopUp(false);
  };

  const [deleteIndex, setDeleteIndex] = useState<any>(null);
  const [deleteIndexIcon, setDeleteIndexIcon] = useState<any>(null);
  const [confirmationPopUpIUplod, setConfirmationPopUpate] =
    useState<boolean>(false);
  const [confirmationPopUpIcon, setConfirmationPopIcon] =
    useState<boolean>(false);

  const handleDeleteFileClck = (index: any) => {
    setDeleteIndex(index); //this is for now temporary use when data store in db this ilne
    setConfirmationPopUpate(true);
  };

  const handleDeleteFileBaner = () => {
    setDeleteIndex(null);
  };
  
  const HandleDeleteIcon = () => {
    const [updatedFileIcons, setUpdatedFileIcon] = useState([]);
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
    setUploadedFiles([...uploadedFile, ...selectInputFilesBaner]);
    setSlectInputFileBaner([]);
    setUploadSuccess(true);

    setTimeout(() => {
      setUploadSuccess(false);
    }, 2000);
  };
  const handleUploadClickIcon = () => {
    setUploadFilesLogo([...uploadFilesLogo, ...selectInputFiles]);
    setSlectInputFileBaner([]);
    setUploadSuccess(true);

    setTimeout(() => {
      setUploadSuccess(false);
    }, 2000);
  };

  const inputStyle = "p-2 border w-full rounded-md border-blue-400";

  const buttonStyle =
    "bg-indigo-600 p-2 w-40 text-lg font-semibold text-white mt-4  rounded-md border border-indigo-500 flex items-center justify-center gap-2 hover:bg-indigo-100";

  // for input taking file code
  return (
    <div className="py-10 ">
      <div className="w-1/2">
        <input
          type="file"
          name="banner"
          className="  hidden"
          onChange={handleFileChangeBaner}
          ref={FileInputRef2}
        />
        <div className="flex items-center gap-2 space-x-4">
          <div>
            <button
              className="rounded bg-pink-600 px-4 py-2 text-white"
              onClick={() => {
                // 👉️ ref could be null here
                if (FileInputRef2.current != null) {
                  // 👉️ TypeScript knows that ref is not null here
                  FileInputRef2.current.click();
                }
              }}
            >
              Upload Icon{" "}
            </button>
          </div>

          <div>
            {selectInputFilesBaner.length > 0 && (
              <div className="m-2 mt-4 flex w-[250px] items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div>
                    {selectInputFilesBaner.map((file: any, index: number) => (
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
                          <BiEdit size={25} />
                        </button>
                        <button
                          className="ml-1 h-fit rounded bg-rose-500 px-2 py-2 text-white"
                          onClick={handleConfirmationPopUpBaner}
                        >
                          <BiTrash size={25} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                
              </div>
            )}
          </div>
        </div>

       
      
      </div>
     

      <div className="mt-10 grid  grid-cols-2 justify-center gap-2 md:grid-cols-6">
        
      </div>
      {/* Bannar  Confarmatin MOdal of delete uplod icon */}
      {confirmationPopUpIcon && (
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-slate-700 bg-opacity-75">
          <div className="rounded-md bg-white p-4">
            <p>Arue you sure to Delte this Record?</p>
            <div className="mt-4 flex justify-end">
              <button
                className="mr-2 rounded-md bg-rose-500 px-4 py-2 text-white"
                onClick={HandleDeleteIcon}
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
    </div>
  );
};

export default IconUpload;
