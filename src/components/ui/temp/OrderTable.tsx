// "use client";
// import React, { useState, useRef } from "react";
// import { FaMicrophoneSlash, FaUser } from "react-icons/fa";
// import { IoMdAttach, IoMdCall, IoMdMic, IoMdMicOff, IoMdSend } from "react-icons/io";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import { HiMiniSpeakerWave, HiMiniSpeakerXMark } from "react-icons/hi2";
// import { FaRegCircleUser } from "react-icons/fa6";
// import { MdAccountCircle, MdCallEnd } from "react-icons/md";
// import Image from "next/image";
// import Popup from "reactjs-popup";
// import img1 from "../../../../public/logo2.png";
// import "reactjs-popup/dist/index.css";
// import { CiSettings } from "react-icons/ci";
// import { PiPhoneCallDuotone } from "react-icons/pi";
// import { IoClose, IoCloudUpload } from "react-icons/io5"
// import Modal from "../modal/Modal";
// import CurrencyData from "./CurrencyData";
// import CallDaillingModal from "../modal/CallDaillingModal";
// const OrderTable:React.FC <any>= ({ data}) => {
//   const [showPopUp, setShowPopUP] = useState<boolean>(false);
//   const [showPopUpCurrancy, setShowPopUPCurrancy] = useState<boolean>(false);
//   const [showPopUpUpdate, setShowPopUpdate] = useState<boolean>(false);
//   const [showPopUpAmount, setShowPopUPAmount] = useState<boolean>(false);
//   const [showPopUpDelevery, setShowPopUPDelevery] = useState<boolean>(false);
//   const [showPopUpStatus, setShowPopUPStatus] = useState<boolean>(false);
//   const [showPopUpDelivery, setShowPopDelivery] = useState<boolean>(false);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [isVisible, setIsVisible] = useState<boolean>(false);
//   const [id, setId] = useState<number>(0);
//   const itemsPerPage:number = 10;
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(data.length / itemsPerPage);

// // mute status

//  const [MuteStatus, setMuteStatus]= useState<boolean>(false)
//  const [SoundStatus, setSoundStatus]= useState<boolean>(false)
// const handlemuteStatus =()=>{
//         setMuteStatus(!MuteStatus)
// }
// const handleSoundStatus =()=>{
//   setSoundStatus(!SoundStatus)
// }

// interface PopUpPosition{
//     top:number;
//     left:number;
// }
// const [popUpPosition, setPopUpPosition]= useState<PopUpPosition>({top:0, left:0})

// const handlePopUp = (index: number, event: HTMLElement) => {
//   const buttonRect = event.getBoundingClientRect();
//   setPopUpPosition({
//   top:buttonRect.top,
//   left:buttonRect.left + window.scrollX});

//   setShowPopUP(!showPopUp);

//   setShowPopUpdate(false);
//   setShowPopUPAmount(false);
//   setShowPopUPCurrancy(false);
//   setShowPopUPStatus(false);
// };
//   const handleCurancyPopUp = () => {
//     setShowPopUPCurrancy(!showPopUpCurrancy);
//     setShowPopUP(false);
//     setShowPopUpdate(false);
//     setShowPopUPAmount(false);
//   };
//   const handleUpdatePopUp = () => {
//     setShowPopUpdate(!showPopUpUpdate);
//     setShowPopUP(false);
//     setShowPopUPCurrancy(false);
//     setShowPopUPAmount(false);
//     setShowPopUPStatus(false);
//   };
//   const handleAmountPopUp = () => {
//     setShowPopUPAmount(!showPopUpAmount);
//     setShowPopUP(false);
//     setShowPopUPCurrancy(false);
//     setShowPopUpdate(false);
//     setShowPopUPDelevery(false);
//     setShowPopUPStatus(false);
//   };

//   const handleDeleveryPopUp = () => {
//     setShowPopUPDelevery(!showPopUpDelevery);
//     setShowPopUPAmount(false);
//     setShowPopUP(false);
//     setShowPopUpdate(false);
//     setShowPopUPStatus(false);
//     setShowPopUPCurrancy(false);
//   };
//   const handleStatusPopUp = () => {
//     setShowPopUPStatus(!showPopUpStatus);
//     setShowPopUP(false);
//     setShowPopUPCurrancy(false);
//     setShowPopUpdate(false);
//     setShowPopUPAmount(false);
//     setShowPopUPDelevery(false);
//   };

//   const handleCloseModal = () => {
//     setIsVisible(false);
//     setShowPopUPDelevery(false);
//     setShowPopUPAmount(false);
//     setShowPopUP(false);
//     setShowPopUpdate(false);
//     setShowPopUPStatus(false);
//     setShowPopUPCurrancy(false);
//   };

//   //project udpate states
//   const [isOpenMessageModal, setisOpenMessageModal] = useState<boolean>(false);

//   // File uploading states for message box
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const fileInputRef = useRef<any>(null);

//   // call dialing state
//   const [isDailed, setIsDailed] = useState(false);

//   const paginate = (pageNumber:number) => {
//     setCurrentPage(pageNumber);
//   };
//   const setModal = (id:any) => {
//     setIsVisible(true);
//     setId(id);
//   };

//   const [isCompleteSelected, setIsCompleteSelected] = useState(false);

//   const handleDropdownChange = (event:React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.value === "complete") {
//       setIsCompleteSelected(true);
//     } else {
//       setIsCompleteSelected(false);
//     }
//   };

//   function threedots() {
//     alert("a");
//   }

// // thsi code for select status

// const [selectedStatus, setSelectedStatus]= useState('pending');

// const handleStatusChange =(e:any) =>{
//   setSelectedStatus(e.target.value)
//   // setIsVisible(false);
//   setShowPopUPDelevery(false);
//   setShowPopUPAmount(false);
//   setShowPopUP(false);
//   setShowPopUpdate(false);
//   setShowPopUPStatus(false);
//   setShowPopUPCurrancy(false);
//   setisOpenMessageModal(false)

// }

// // this for Currency Data Selection

// const [selectdItem, setSelectedItem]= useState<string>('')
// const [amount, setAmount] = useState<string>('');
// const [buttonText, setButtonText]= useState<string>('Set Amount')

// const handleItemClick =(item:string)=>{
//   setSelectedItem(item);
//   setButtonText(`${item}, Amount: ${amount} `)
// }

// const handleAmountChange =(event:React.ChangeEvent<HTMLInputElement>)=>{
//  setAmount(event.target.value)
// }

// const handleSubmit =(event:React.ChangeEvent<HTMLInputElement>)=>{
//   event.preventDefault();
//   setButtonText(`${selectdItem} ${amount}`)
// }

//   return (
//     <div className="my-4">
//       <table
//         className={`w-full border-collapse border border-gray-300 ${
//           isVisible ? "fixed " : "overflow-auto"
//         }`}
//       >
//         <thead className="font-bold">
//           <tr className="bg-slate-200 text-black">
//             <th className="border border-gray-300 p-2 text-left text-sm">NO</th>
//             <th className="border border-gray-300 p-2 text-left text-sm">
//               Order ID
//             </th>
//             <th className="border border-gray-300 p-2 text-left text-sm">
//               Project Name
//             </th>
//             <th className="border border-gray-300 p-2 text-left text-sm">
//               Total Project Amount
//             </th>
//             <th className="border border-gray-300 p-2 text-left text-sm">
//               Total Online Deposit Rs
//             </th>
//             <th className="border border-gray-300 p-2 text-left text-sm">
//               Total Offline Deposits
//             </th>
//             <th className="border border-gray-300 p-2 text-left text-sm">
//               Money Left
//             </th>
//             <th className="border border-gray-300 p-2 text-left text-sm">
//               Project Update
//             </th>
//             <th className="border border-gray-300 p-2 text-left text-sm">
//               Project Delivery Day
//             </th>
//             <th className="border border-gray-300 p-2 text-left text-sm">
//               Profits
//             </th>
//             <th className="border border-gray-300 p-2 text-left text-sm">
//               Status
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentItems.map((item:any, index:number) => (
//             <tr
//               key={index}
//               className={`text-center ${
//                 index % 2 === 0 ? "bg-slate-50" : "bg-white"
//               }`}
//             >
//               <td className="border border-gray-300">
//                 {item.no < 9 ? "0" + item.no : item.no}
//               </td>

//               <td className="border border-gray-300 p-2">{item.id}</td>
//               <td className="border border-gray-300 p-2">{item.projectName}</td>
//               <td className="border border-gray-300 p-2">
//                 {item.projectTotalRs} USD
//               </td>

//               <td className="border border-gray-300 p-2">
//                 {item.totalOnlineDepositRs} USD
//               </td>
//               <td className="border border-gray-300 p-2">
//                 {item.totalOfflineDeposits} USD
//               </td>
//               <td className="border border-gray-300 p-2">
//                 {item.moneyLeft} USD
//               </td>
//               <td className="border border-gray-300 p-2 flex items-center gap-2">
//                 <button
//                   onClick={() => setisOpenMessageModal(true)}
//                   className="bg-slate-300 px-2 py-1"
//                 >
//                   Update
//                 </button>
//                 <p className="bg-green-400 px-2 rounded">
//                   {item.projectUpdate}
//                 </p>
//               </td>
//               <td className="border border-gray-300 p-2">
//                 {item.projectDeliveryDay}
//               </td>
//               <td className="border border-gray-300 p-2">{item.profit} USD</td>
//               <td className="border border-gray-300 p-2">
//                 <span
//                   className={`text-xs p-1 block ${
//                     item.status === "Pending" ? "bg-yellow-200" : "bg-pink-400"
//                   }`}
//                 >
//                   {item.status}
//                 </span>
//               </td>
//               <td className="border border-gray-300 p-2 ">
//                 <button
//                   className="p-1 bg-green-200 text-green-600 rounded-md text-xs"
//                   onClick={() => setModal(item.id)}
//                 >
//                   {" "}
//                   {/* {item.view} */}
//                   View
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="mt-4">
//         <ul className="flex space-x-2">
//           {Array.from({ length: totalPages }, (_, index) => (
//             <li key={index}>
//               <button
//                 className={`${
//                   currentPage === index + 1
//                     ? "bg-indigo-500 text-white"
//                     : "bg-slate-300 text-gray-700"
//                 } px-3 py-1 rounded-full`}
//                 onClick={() => paginate(index + 1)}
//               >
//                 {index + 1}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <Modal isVisible={isOpenMessageModal} onClose={setisOpenMessageModal}>
//         <div className="max-w-md top-0 border shadow-md rounded  relative bg-blue-200">
//           <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-4 text-white px-3 gap-2 rounded flex items-center justify-between">
//             <div className="flex items-center gap-3 ">
//               <FaUser size={23} />
//               <h1 className=" text-lg  text-black font-bold ont-medium text-left">
//                 Hedar Khan
//               </h1>
//             </div>

//             <div className="flex items-center gap-3">
//               <span className="w-9 h-9 rounded-full bg-green-600 hover:bg-green-500 text-white flex items-center justify-center">
//                 <PiPhoneCallDuotone
//                   className="text-grey-100 cursor-pointer"
//                   size={30}
//                   onClick={() => setIsDailed(true)}
//                 />
//               </span>

//               <Popup
//                 trigger={
//                   <button>
//                     {" "}
//                     <CiSettings size={35} />{" "}
//                   </button>
//                 }
//                 position="right center"
//               >
//                 <div>edit nickname</div>
//                 <div>change color</div>
//                 <div>mute</div>
//                 <div>delete</div>
//               </Popup>
//             </div>
//           </div>

//           <span className="px-2   ">
//             <div className="flex-grow overflow-y-auto  bg-bg-blue-200 bg-blue-200">
//               <div className="flex flex-col space-y-2 p-4">
//                 <div className="flex flex-row gap-2 ">
//                   <div>
//                     {" "}
//                     <Image
//                       className="rounded-full"
//                       src={img1}
//                       width={50}
//                       height={50}
//                       alt="bubble1"
//                     />
//                   </div>

//                   <div className="pt-7 -ml-3 flex gap-1">
//                     <div className="self-end bg-white text-black rounded-lg p-2 flex items-center">
//                       <span className="material-icons mr-2">person</span>
//                       <p className="text-black">This is a sender message</p>
//                     </div>
//                     <div className="">
//                       <Popup
//                         trigger={
//                           <button>
//                             {" "}
//                             <BsThreeDotsVertical size={23} />{" "}
//                           </button>
//                         }
//                         position="right center"
//                       >
//                         <div>edit nickname</div>
//                         <div>change color</div>
//                         <div>mute</div>
//                         <div>delete</div>
//                       </Popup>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex justify-end flex-row gap-2  ">
//                   <div className="flex justify-end items-end gap-1 ">
//                     <div className="mt-7 -mr-3  bg-white text-black rounded-lg p-2 flex items-center">
//                       <span className="material-icons mr-2">person</span>
//                       <p>This is a receiver message</p>
//                     </div>
//                   </div>
//                   <div>
//                     <Image
//                       className="rounded-full"
//                       src={img1}
//                       width={50}
//                       height={50}
//                       alt="bubble1"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </span>

//           <div className="flex-grow  overflow-y-auto bg-blue-200">
//             <div className="flex flex-col  space-y-2 p-4 bg-blue-200">
//               <div className="flex flex-row gap-2 bg-blue-200">
//                 <div>
//                   {" "}
//                   <Image
//                     className="rounded-full"
//                     src={img1}
//                     width={50}
//                     height={50}
//                     alt="bubble1"
//                   />
//                 </div>

//                 <div className="mt-7 -ml-3 flex gap-1">
//                   <div className="self-end bg-white rounded-lg p-2 flex items-center">
//                     <span className="material-icons mr-2">person</span>
//                     <p className="text-black">This is a sender message</p>
//                   </div>
//                   <div className="pt-2">
//                     <Popup
//                       trigger={
//                         <button>
//                           {" "}
//                           <BsThreeDotsVertical size={23} />{" "}
//                         </button>
//                       }
//                       position="right center"
//                     >
//                       <div>edit nickname</div>
//                       <div>change color</div>
//                       <div>mute</div>
//                       <div>delete</div>
//                     </Popup>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex justify-end flex-row gap-2 bg-blue-200 ...">
//                 <div className="flex justify-end items-end gap-1 bg-blue200">
//                   <div className=" mt-7 -mr-3  bg-white text-black rounded-lg p-2 flex items-center">
//                     <span className="material-icons mr-2">person</span>
//                     <p>This is a receiver message</p>
//                   </div>
//                 </div>
//                 <div>
//                   <Image
//                     className="rounded-full"
//                     src={img1}
//                     width={50}
//                     height={50}
//                     alt="bubble1"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="p-4 space-x-1 flex items-center bg-blue-200">
//             {/* <IoMdAttach  */}
//             <IoCloudUpload
//               onClick={() => fileInputRef.current.click()}
//               className="text-yellow-600 cursor-pointer"
//               size={40}
//             />
//             <input
//               type="file"
//               ref={fileInputRef}
//               style={{ display: "none" }}
//               onChange={(e:any) => setSelectedFile(e.target.files[0])}
//             />
//             <input
//               type="text"
//               placeholder="Type your message..."
//               className="border border-gray-300 rounded-lg px-4 py-2 w-full"
//             />
//             <button className="ml-2 bg-pink-500 text-black p-2 rounded-full">
//               <IoMdSend size={30} color="white" />
//             </button>
//           </div>
//         </div>
//       </Modal>

//       {/* call dailing modal */}
//       <CallDaillingModal
//         isVisible={isDailed}
//         onClose={setIsDailed}
//         hideCloseIcon={false}
//         className="mt-6"
//       >
//         <div className="bg-slate-800 md:mt-3 gap-y-6 flex flex-col justify-between items-center text-white p-8 rounded shadow-md w-96 h-96">
//           <div className="flex flex-col my-3 gap-y-3 items-center">
//             <div className="rounded-full">
//               <FaRegCircleUser size={34} className="text-pink-600" />
//             </div>
//             <div className="text-xl mt-2">David Evle</div>
//           </div>
//           <div className="flex gap-4 items-center text-2xl font-semibold my-auto">
//             <p>11</p>
//             <p>:</p>
//             <p>39</p>
//             <p>:</p>
//             <p>12</p>
//           </div>
//           <div className="flex justify-center space-x-4 mt-4 gap-5 my-6">
//             <button className="bg-green-500 text-white px-3.5 py-3.5 rounded-full" onClick={handlemuteStatus}>
//               {MuteStatus ? <IoMdMicOff size={20} /> : <IoMdMic size={20} />}

//             </button>
//             <button
//               className="bg-rose-500 text-white px-3.5 py-3.5 rounded-full"
//               onClick={() => setIsDailed(false)}
//             >
//               <MdCallEnd size={20}/>
//             </button>
//             <button className="bg-yellow-500 rounded-full text-white px-3.5 py-3.5" onClick={handleSoundStatus}>
//               {SoundStatus ? <HiMiniSpeakerWave  size={20}/>: <HiMiniSpeakerXMark size={20} /> }

//             </button>
//           </div>
//         </div>
//       </CallDaillingModal>

//       {data.map(
//         (item:any,i:number) =>
//           item.id === id && (
//             <Modal key={i} isVisible={isVisible} onClose={setIsVisible}>
//               <div className="text-gray-50 gap-3  relative pt-[1500px] ">
//                 <div
//                   className=" absolute right-2 -mt-14 z-10  cursor-pointer  "
//                   onClick={handleCloseModal}
//                 >
//                   <div className="bg-rose-500 rounded-full p-4 w-9 h-9  flex text-xl justify-center items-center">
//                     x
//                   </div>
//                 </div>

//                 <div className="flex gap-4 p-3 w-full  justify-self-end pr-12  flex-row-reverse ">
//                 <select
//                     className="bg-orange-600 font-bold  border border-lime-500 border-b-yellow-400 rounded-md text-black hover:bg-orange-400 p-4  px-4"

//                     value={selectedStatus}
//                       onChange={handleStatusChange}

//                   >
//                     <option
//                       value=""
//                       className="bg-slate-200 text-black   border border-gray-200 my-1 p-2"
//                     >
//                       Status
//                     </option>
//                     <option
//                       value="pending"
//                       className="bg-orange-200 text-black  border border-gray-500 py-1  p-2"
//                     >
//                       pending
//                     </option>
//                     <option
//                       value="payment"
//                       className="bg-orange-200 text-black  border border-gray-500 py-1 p-2"
//                     >
//                       payment
//                     </option>
//                     <option
//                       value="waiting"
//                       className="bg-orange-200 text-black  border border-gray-500 py-1 p-2"
//                     >
//                       waiting
//                     </option>
//                     <option
//                       value="working"
//                       className="bg-orange-200 text-black   border border-gray-500pmy-1 p-2"
//                     >
//                       working
//                     </option>
//                     <option
//                       value="complete"
//                       className="bg-orange-200 text-black   border border-gray-500pmy-1 p-2"
//                     >
//                       complete
//                     </option>
//                     <option
//                       value="inProgress"
//                       className="bg-orange-200 text-black  border border-gray-500 py-1 p-2"
//                     >
//                       Delivery
//                     </option>
//                     <option
//                       value="cancel"
//                       className="bg-orange-200 text-black p-2 border border-gray-500 py-1"
//                     >
//                       cancel
//                     </option>
//                   </select>
//     {
//     selectedStatus === 'pending' && (
//       <div className="flex gap-4">
//                   <div className="flex flex-col ">
//                     <button
//                       className="bg-orange-600 font-bold  border border-lime-500 border-b-yellow-400 rounded-md text-black hover:bg-orange-400 p-4 px-6  "
//                       // onClick={(e) =>handlePopUp(index, e)}
//                     >
//                       Admin Notbotok
//                     </button>
//                   </div>
//                   <button
//                     className="bg-orange-600 font-bold  border border-lime-500 border-b-yellow-400 rounded-md text-black hover:bg-orange-400 p-4 px-6  "
//                     onClick={handleUpdatePopUp}
//                   >
//                     Update
//                   </button>

//                   <button
//                     className="bg-orange-600 font-bold  border border-lime-500 border-b-yellow-400 rounded-md text-black hover:bg-orange-400 p-4 px-6  "
//                     onClick={handleAmountPopUp}
//                     // value={selectdItem.} onChange={(e)=> setSelectedItem(e.target.value)}
//                   >
//                     {buttonText}
//                   </button>{" "}
//                   <button
//                     className="bg-orange-600 font-bold  border border-lime-500 border-b-yellow-400 rounded-md text-black hover:bg-orange-400 p-4 px-6  "
//                     onClick={handleDeleveryPopUp}
//                   >
//                     Delivery Date
//                   </button>
//                   </div>
//     )
//     }
//     {
//     selectedStatus === 'payment' && (
//       <div className="flex gap-4">
// <button
//                       className="bg-orange-600 font-bold  border border-lime-500 border-b-yellow-400 rounded-md text-black hover:bg-orange-400 p-4 px-6  "
//                       // onClick={handlePopUp}
//                     >
//                       Admin Notbotok
//                     </button>
//                     < button className="bg-orange-600 font-bold  border border-lime-500 border-b-yellow-400 rounded-md text-black hover:bg-orange-400 p-4 px-6  ">Status</ button>
//       </div>
//     )
//     }
//     {
//     selectedStatus === 'waiting' && (
//       <div className="flex gap-4">
//           <button
//                       className="bg-orange-600 font-bold  border border-lime-500 border-b-yellow-400 rounded-md text-black hover:bg-orange-400 p-4 px-6  "
//                       // onClick={handlePopUp}
//                     >
//                       Admin Notbotok
//                     </button>
//                     <button
//                     className="bg-orange-600 font-bold  border border-lime-500 border-b-yellow-400 rounded-md text-black hover:bg-orange-400 p-4 px-6  "
//                     onClick={handleUpdatePopUp}
//                   >
//                     Update
//                   </button>
//                   <button
//                     className="bg-orange-600 font-bold  border border-lime-500 border-b-yellow-400 rounded-md text-black hover:bg-orange-400 p-4 px-6  "
//                     onClick={handleAmountPopUp}
//                     // value={selectdItem.} onChange={(e)=> setSelectedItem(e.target.value)}
//                   >
//                     {buttonText}
//                   </button>
//                   < button className="bg-orange-600 font-bold  border border-lime-500 border-b-yellow-400 rounded-md text-black hover:bg-orange-400 p-4 px-6  ">Profile Set</ button>
//       </div>
//     )
//     }
//     {
//     selectedStatus === 'working' && (
//       <div className="flex gap-4">
//           <button
//                       className="bg-orange-600 font-bold  border border-lime-500 border-b-yellow-400 rounded-md text-black hover:bg-orange-400 p-4 px-6  "
//                       // onClick={handlePopUp}
//                     >
//                       Admin Notbotok
//                     </button>
//                     <button
//                     className="bg-orange-600 font-bold  border border-lime-500 border-b-yellow-400 rounded-md text-black hover:bg-orange-400 p-4 px-6  "
//                     onClick={handleUpdatePopUp}
//                   >
//                     Update
//                   </button>
//                   <button
//                     className="bg-orange-600 font-bold  border border-lime-500 border-b-yellow-400 rounded-md text-black hover:bg-orange-400 p-4 px-6  "
//                     // onClick={handlePopUp}
//                     // value={selectdItem.} onChange={(e)=> setSelectedItem(e.target.value)}
//                   >
//                     {buttonText}
//                   </button>
//                   < button className="bg-orange-600 font-bold  border border-lime-500 border-b-yellow-400 rounded-md text-black hover:bg-orange-400 p-4 px-6  ">Work Document Uplod </ button>
//                   < button className="bg-orange-600 font-bold  border border-lime-500 border-b-yellow-400 rounded-md text-black hover:bg-orange-400 p-4 px-6  ">File Deletion Data </ button>
//       </div>
//     )
//     }
// {
//     selectedStatus === 'complete' && (
//       <div className="flex gap-4">
// <button
//                       className="bg-orange-600 font-bold  border border-lime-500 border-b-yellow-400 rounded-md text-black hover:bg-orange-400 p-4 px-6  "
//                       // onClick={handlePopUp}
//                     >
//                       Admin Notbotok
//                     </button>
//                     < button className="bg-orange-600 font-bold  border border-lime-500 border-b-yellow-400 rounded-md text-black hover:bg-orange-400 p-4 px-6  ">Status</ button>
//       </div>
//     )
//     }
// {
//     selectedStatus === 'cancel' && (
//       <div className="flex gap-4">

// <button
//                       className="bg-orange-600 font-bold  border border-lime-500 border-b-yellow-400 rounded-md text-black hover:bg-orange-400 p-4 px-6  "
//                       // onClick={handlePopUp}
//                     >
//                       Admin Notbotok
//                     </button>
//                     < button className="bg-orange-600 font-bold  border border-lime-500 border-b-yellow-400 rounded-md text-black hover:bg-orange-400 p-4 px-6  ">Status</ button>
//       </div>
//     )
//    }
//    {
//     selectedStatus === 'inProgress' && (
//       <div className="flex gap-4">

// <button
//                       className="bg-orange-600 font-bold  border border-lime-500 border-b-yellow-400 rounded-md text-black hover:bg-orange-400 p-4 px-6  "
//                       // onClick={handlePopUp}
//                     >
//                       Admin Notbotok
//                     </button>
//                     < button className="bg-orange-600 font-bold  border border-lime-500 border-b-yellow-400 rounded-md text-black hover:bg-orange-400 p-4 px-6  ">Status</ button>

//       </div>
//     )
//    }

//                 </div>
//                 <div className="flex items-center justify-between mb-6 gap-3">
//                   <div className="flex flex-col gap-2">
//                     <img
//                       src="https://banner2.cleanpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg"
//                       alt=""
//                       className="rounded-full w-16"
//                     />
//                     <h4 className="text-medium text-md">John De</h4>
//                   </div>

//                   <div>
//                 </div>
//                 <div className="grid ">
//                   {isCompleteSelected && (
//                     <div className="w-[450px]  ">
//                       <form className="bg-slate-700 shadow-md rounded px-8 pt-6 pb-8 mb-2 mt-2">
//                         <div className="mb-2">
//                           <label
//                             className="block text-gray-100 text-sm font-bold mb-2"
//                             htmlFor="title"
//                           >
//                             Notice title
//                           </label>
//                           <input
//                             type="text"
//                             id="title"
//                             name="title"
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                           />
//                         </div>

//                         <div className="mb-2">
//                           <label
//                             className="block text-gray-100 text-sm font-bold mb-2"
//                             htmlFor="file"
//                           >
//                             Upload File
//                           </label>
//                           <input
//                             type="file"
//                             id="file"
//                             name="file"
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                           />
//                         </div>

//                         <div className="flex items-center justify-between">
//                           <button
//                             type="submit"
//                             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                           >
//                             Add
//                           </button>
//                         </div>
//                       </form>
//                     </div>
//                   )}
//                   <div>
//                     <h1 className="text-2xl font-semibold my-4">
//                       Personal Information
//                     </h1>
//                     <div className="grid grid-cols-2 gap-4 border-2 bg-slate-400 border-black p-6 rounded-md">
//                       <div className="font-lg flex gap-4">
//                         <p className="">Title: </p>{" "}
//                         <span className="text-white text-sm font-bold">
//                           Frontend Developer
//                         </span>
//                       </div>
//                       <div className="font-lg flex gap-4">
//                         <p className="">First Name: </p>{" "}
//                         <span className="text-white text-sm font-bold">
//                           mr jack
//                         </span>
//                       </div>
//                       <div className="font-lg flex gap-4">
//                         <p className="">Last Name: </p>{" "}
//                         <span className="text-white text-sm font-bold">
//                           mrs
//                         </span>
//                       </div>
//                       <div className="font-lg flex gap-4">
//                         <p className="">Gender </p>{" "}
//                         <span className="text-white text-sm font-bold">
//                           Male
//                         </span>
//                       </div>
//                       <div className="font-lg flex gap-4">
//                         <p className="">Date of Birth </p>{" "}
//                         <span className="text-white text-sm font-bold">
//                           09-09-2000
//                         </span>
//                       </div>
//                       <div className="font-lg flex gap-4">
//                         <p className="">Occupation</p>{" "}
//                         <span className="text-white text-sm font-bold">
//                           Job Holder
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div>
//                     <h1 className="text-2xl font-semibold my-4">
//                       Present Address
//                     </h1>
//                     <div className="grid grid-cols-2 gap-4 border-2 bg-slate-400 border-black p-6 rounded-md">
//                       <div className="font-lg flex gap-4">
//                         <p className="">Country: </p>{" "}
//                         <span className="text-white text-sm font-bold">
//                           canada
//                         </span>
//                       </div>
//                       <div className="font-lg flex gap-4">
//                         <p className="">State: </p>{" "}
//                         <span className="text-white text-sm font-bold">
//                           canada
//                         </span>
//                       </div>
//                       <div className="font-lg flex gap-4">
//                         <p className="">Last Name: </p>{" "}
//                         <span className="text-white text-sm font-bold">
//                           Khan
//                         </span>
//                       </div>
//                       <div className="font-lg flex gap-4">
//                         <p className="">Gender </p>{" "}
//                         <span className="text-white text-sm font-bold">
//                           Male
//                         </span>
//                       </div>
//                       <div className="font-lg flex gap-4">
//                         <p className="">Date of Birth </p>{" "}
//                         <span className="text-white text-sm font-bold">
//                           09-09-2000
//                         </span>
//                       </div>
//                       <div className="font-lg flex gap-4">
//                         <p className="">Occupation</p>{" "}
//                         <span className="text-white text-sm font-bold">
//                           Job Holder
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div>
//                     <h1 className="text-2xl font-semibold my-4">
//                       Company details
//                     </h1>
//                     <div className="grid grid-cols-2 gap-4 border-2 bg-slate-400 border-black p-6 rounded-md">
//                       <div className="font-lg flex gap-4">
//                         <p className="">Company Name: </p>{" "}
//                         <span className="text-white text-sm font-bold">
//                           Something
//                         </span>
//                       </div>
//                       <div className="font-lg flex gap-4">
//                         <p className="">Company Type: </p>{" "}
//                         <span className="text-white text-sm font-bold">
//                           Something
//                         </span>
//                       </div>
//                       <div className="font-lg flex gap-4">
//                         <p className="">Company Location: </p>{" "}
//                         <span className="text-white text-sm font-bold">
//                           Somewhere
//                         </span>
//                       </div>
//                       <div className="font-lg flex gap-4">
//                         <p className="">Website URL :</p>{" "}
//                         <span className="text-white text-sm font-bold">
//                           www.something.com
//                         </span>
//                       </div>
//                       <div className="font-lg flex gap-4">
//                         <p className="">Com phone number </p>{" "}
//                         <span className="text-white text-sm font-bold">
//                           09-09-2000
//                         </span>
//                       </div>
//                       <div className="font-lg flex gap-4">
//                         <p className="">Com company Number</p>{" "}
//                         <span className="text-white text-sm font-bold">
//                           912383401032
//                         </span>
//                       </div>
//                       <div className="font-lg flex gap-4">
//                         <p className="">Company Email</p>{" "}
//                         <span className="text-white text-sm font-bold">
//                           something @gmail.com
//                         </span>
//                       </div>
//                       <div className="font-lg flex gap-4">
//                         <p className="">Company details</p>{" "}
//                         <span className="text-white text-sm font-bold">
//                           whatnotSomething
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div>
//                     <h1 className="text-2xl font-semibold my-4">
//                       Contact Information
//                     </h1>
//                     <div className="grid grid-cols-2 gap-4 border-2 bg-slate-400 border-black p-6 rounded-md">
//                       <div className="font-lg flex gap-4">
//                         <p className="">Contact No : </p>{" "}
//                         <span className="text-white text-sm font-bold">
//                           09420239802
//                         </span>
//                       </div>
//                       <div className="font-lg flex gap-4">
//                         <p className="">WhatsApp Link : </p>{" "}
//                         <span className="text-white text-sm font-bold">
//                           Something
//                         </span>
//                       </div>
//                       <div className="font-lg flex gap-4">
//                         <p className="">Liner Link: </p>{" "}
//                         <span className="text-white text-sm font-bold">
//                           Somewhere
//                         </span>
//                       </div>
//                       <div className="font-lg flex gap-4">
//                         <p className="">Skype Link :</p>{" "}
//                         <span className="text-white text-sm font-bold">
//                           www.something.com
//                         </span>
//                       </div>
//                       <div className="font-lg flex gap-4">
//                         <p className="">Youtube Link</p>{" "}
//                         <span className="text-white text-sm font-bold">
//                           09-09-2000
//                         </span>
//                       </div>
//                       <div className="font-lg flex gap-4">
//                         <p className="">Home Contact No</p>{" "}
//                         <span className="text-white text-sm font-bold">
//                           912383401032
//                         </span>
//                       </div>
//                       <div className="font-lg flex gap-4">
//                         <p className=""> Email</p>{" "}
//                         <span className="text-white text-sm font-bold">
//                           something @gmail.com
//                         </span>
//                       </div>
//                       <div className="font-lg flex gap-4">
//                         <p className="">Contact Address</p>{" "}
//                         <span className="text-white text-sm font-bold">
//                           whatnotSomething
//                         </span>
//                       </div>
//                       <div className="font-lg flex gap-4">
//                         <p className="">Social Media links</p>{" "}
//                         <span className="text-white text-sm font-bold">
//                           whatnotSomething
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div>
//                     <h1 className="text-2xl font-semibold my-4">
//                       Project Document
//                     </h1>
//                     <div className="grid grid-cols-2 gap-4 border-2 bg-slate-400 border-black p-6 rounded-md">
//                       <div className="font-lg flex gap-4">
//                         <p className="">What currency will you pay in? : </p>{" "}
//                         <span className="text-white text-sm font-bold">
//                           Dollar
//                         </span>
//                       </div>

//                       <div className="font-lg flex gap-4">
//                         <p className="">Other documents: </p>{" "}
//                         <a
//                           href="#"
//                           className="text-white text-sm font-bold rounded-sm inline-flex underline p-1"
//                         >
//                           other docs
//                         </a>
//                       </div>
//                       <div className="font-lg flex gap-4">
//                         <p className="">Project description:</p>{" "}
//                         <span className="text-white text-sm font-bold">
//                           Lorem ipsum dolor sit, amet consectetur adipisicing
//                           elit. Ea facere tenetur inventore, nam quam quod
//                           dolorum odio quisquam reiciendis necessitatibus sint
//                           officiis et delectus voluptatibus sunt doloremque
//                           error suscipit unde.
//                         </span>
//                       </div>
//                     </div>
//                     <div className="font-lg  gap-4 mt-4 flex justify-center">
//                       <p className=" bg-yellow-500 border-l-pink-400 font-extrabold text-lg p-2 px-3 rounded-tl-lg rounded-br-lg border-b-lime-400 border-yellow-500 h-fit">
//                         Order Pdf:{" "}
//                       </p>{" "}
//                       <object
//                         data="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf"
//                         width={800}
//                         height={700}
//                         className="text-white text-sm font-bold flex justify-center rounded-sm bg-slate-400 p-1"
//                       ></object>
//                     </div>
//                   </div>
//                 </div>

//                 <div className=" my-14 mr-5 px-6 font-bold flex w-full justify-end items-end ">
//                   <button className="bg-black rounded-md p-3 font-bold px-8 border-yellow-500 border-l-8 text-gray-50 hover:bg-slate-900">
//                     Update
//                   </button>
//                 </div>
//               </div>
//               </div>
//             </Modal>
//           )
//       )}

//       {/*  For Admin Panal  */}
//       {showPopUp && (
//         <div className="z-10 w-[400px]  border border-pink-600 border-b-yellow-400  absolute top-3 mt-36 bg-orange-600  bg-orage-600 ">
//           <div className=" absolute p-4   right-6 ">
//             <div className="bg-orange-600 w-14 h-14 right-8  -mt-9 rounded-br-[300px]   rotate-45"></div>
//           </div>
//           <div className=" bg-pink-100 rounded-sm p-2   relative flex items-end  m-4">
//             <div className="max-w-md top-0 border shadow-md rounded  relative bg-blue-200">
//               <div className="w-full">
//                          <div className=" my-2 w-full flex  flex-col justify-end items-end ">

//                 <div className="flex justify-self-end text-white my-1 bg-slate-600 w-fit p-1 rounded">Panding Order</div>
//                 <div className="flex justify-self-end text-white bg-slate-500 p-1 w-56 text-sm  rounded ">Lorem ipsum dolor sit amet consectetur adipisicin ipsum nam saepe eveniet dolores provident.</div>
//                          </div>
//                 <div className="flex justify-start text-white bg-slate-600 my-1 w-fit p-1 rounded">Working Order</div>
//                 <div className="flex justify-start text-white bg-slate-500 p-1 w-56 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repsum nam saepe eveniident.</div>

//               </div>
//               <div className="p-4 space-x-1 flex items-center bg-blue-200">

//                 {/* <IoMdAttach  */}
//                 <IoCloudUpload
//                   onClick={() => fileInputRef.current.click()}
//                   className="text-yellow-600 cursor-pointer"
//                   size={40}
//                 />
//                 <input
//                   type="file"
//                   ref={fileInputRef}
//                   style={{ display: "none" }}
//                   onChange={(e) => setSelectedFile(e.target.files[0])}
//                 />
//                 {/* <textarea
//                   name=""
//                   id=""
//                   cols="4"
//                   rows="10"
//                   className="border border-gray-300 rounded-lg px-4 h-28 py-2 w-full"
//                 ></textarea> */}
//                 <textarea
//                   type="text"
//                   placeholder="Type your message..."
//                   className="border border-gray-300 rounded-lg px-4 h-12 py-2 w-full"
//                 />
//                 <button className="ml-2 bg-pink-500 text-black p-2 rounded-full">
//                   <IoMdSend size={30} color="white" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//       {/* Modal to Update Pop up */}

//       {showPopUpUpdate && (
//         <div className="z-10 w-[400px]  -ml-28   absolute top-3 mt-36 bg-orange-600  bg-orage-600 ">
//           <div className=" absolute p-4   right-6 ">
//             <div className="bg-orange-600 w-14 h-14 right-8  -mt-9 rounded-br-[300px]   rotate-45"></div>
//           </div>
//           <div className="bg-slate-200 rounded-sm p-4  relative h-full  m-4">
//             <div className="max-w-md top-0 border shadow-md rounded  relative bg-gradient-to-tr to-red-400 from-slate-400">
//               <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-4 text-white px-3 gap-2 rounded flex items-center justify-between">
//                 <div className="flex items-center gap-3 ">
//                   <FaUser size={23} />
//                   <h1 className=" text-lg  text-black font-bold ont-medium text-left">
//                     Hedar Khan
//                   </h1>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <span className="w-9 h-9 rounded-full bg-green-600 hover:bg-green-500 text-white flex items-center justify-center">
//                     <PiPhoneCallDuotone
//                       className="text-grey-100 cursor-pointer"
//                       size={30}
//                       onClick={() => setIsDailed(true)}
//                     />
//                   </span>

//                   <Popup
//                     trigger={
//                       <button>
//                         {" "}
//                         <CiSettings size={35} />{" "}
//                       </button>
//                     }
//                     position="right center"
//                   >
//                     <div>edit nickname</div>
//                     <div>change color</div>
//                     <div>mute</div>
//                     <div>delete</div>
//                   </Popup>
//                 </div>
//               </div>

//               <span className="px-2   ">
//                 <div className="flex-grow overflow-y-auto  bg-bg-blue-20">
//                   <div className="flex flex-col space-y-2 p-4">
//                     <div className="flex justify-end flex-row gap-2  ">
//                       <div className="flex justify-end items-center gap-1">
//                         <div className=" mt-3">
//                           <Popup
//                             trigger={
//                               <button>
//                                 {" "}
//                                 <BsThreeDotsVertical size={23} />{" "}
//                               </button>
//                             }
//                             position="right center"
//                           >
//                             <div>mute</div>
//                             <div>edit nickname</div>
//                             <div>change color</div>
//                             <div>delete</div>
//                           </Popup>
//                         </div>
//                         <div className="mt-7 -mr-3  bg-slate-400 text-black rounded-lg p-2 flex items-center">
//                           <p>
//                             This is a receiver message. Are you recied Payment?
//                           </p>
//                         </div>
//                       </div>
//                       <div>
//                         <div className="h-9 w-9 rounded-full bg-slate-600 flex items-center justify-center">
//                           <MdAccountCircle size={28} color="white" />{" "}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex flex-row gap-2 -ml-2">
//                       <div>
//                         {" "}
//                         <div className="h-9 w-9 rounded-full bg-slate-600 flex items-center justify-center">
//                           <MdAccountCircle size={28} color="white" />{" "}
//                         </div>
//                       </div>

//                       <div className="pt-8 -ml-3 flex gap-1">
//                         <div className=" bg-slate-400 text-black rounded-lg p-2 flex items-center">
//                           {/* <span className="material-icons mr-2">person</span> */}
//                           <p className="text-black text-start">
//                             This is a sender message. Payment is Not recived
//                           </p>
//                         </div>
//                         <div className=" mt-5">
//                           <Popup
//                             trigger={
//                               <button>
//                                 {" "}
//                                 <BsThreeDotsVertical size={23} />{" "}
//                               </button>
//                             }
//                             position="right center"
//                           >
//                             <div>mute</div>
//                             <div>edit nickname</div>
//                             <div>change color</div>
//                             <div>delete</div>
//                           </Popup>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </span>

//               <div className="p-4 space-x-1 flex items-center bg-blue-200">
//                 {/* <IoMdAttach  */}
//                 <IoCloudUpload
//                   onClick={() => fileInputRef.current.click()}
//                   className="text-yellow-600 cursor-pointer"
//                   size={40}
//                 />
//                 <input
//                   type="file"
//                   ref={fileInputRef}
//                   style={{ display: "none" }}
//                   // onChange={(e) => setSelectedFile(e.target.files[0])}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Type your message..."
//                   className="border border-gray-300 rounded-lg px-4 py-2 w-full"
//                 />
//                 <button className="ml-2 bg-pink-500 text-black p-2 rounded-full">
//                   <IoMdSend size={30} color="white" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//       {/* Currancy Pop up  */}
//       {showPopUpCurrancy && (
//         <div className="z-10 w-[400px]  ml-16   absolute top-3 mt-36 bg-orange-600  bg-orage-600 ">
//           <div className=" absolute p-4   right-6 ">
//             <div className="bg-orange-600 w-14 h-14 right-8  -mt-9 rounded-br-[300px]   rotate-45"></div>
//           </div>
//           <div className="bg-slate-200 rounded-sm p-4  relative h-full  m-4">
//             <div className="max-w-md top-0 border shadow-md rounded  relative bg-gradient-to-tr to-red-400 from-slate-400">
//               <div className="p-4 space-x-1 flex items-center bg-blue-200">
//                 {/* <IoMdAttach  */}
//                 {/* <IoCloudUpload
//                  onClick={() => fileInputRef.current.click()}
//                  className="text-yellow-600 cursor-pointer"
//                  size={40}
//                /> */}
//                 <input
//                   type="file"
//                   ref={fileInputRef}
//                   style={{ display: "none" }}
//                   onChange={(e) => setSelectedFile(e.target.files[0])}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Type your Currancy Name..."
//                   className="border border-gray-300 rounded-lg px-4 py-2 w-full"
//                 />
//                 <button className="ml-2 bg-pink-500 text-black p-2 rounded-full" >
//                   <IoMdSend size={30} color="white" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Amount Set po up  */}
//       {showPopUpAmount && (

//         <div className="z-10 w-[560px]  ml-56   absolute top-3 mt-36 bg-orange-600  bg-orage-600 ">

//           <div className=" absolute p-4   right-6 ">
//             <div className="bg-orange-600 w-14 h-14 right-20  -mt-9 rounded-br-[300px]   rotate-45"></div>
//           </div>
//           <div className=" flex ">

//           <div className="bg-slate-200 rounded-sm p-4  relative h-full  m-4">
//             <div className="max-w-md top-0 border shadow-md rounded  relative bg-gradient-to-tr to-red-400 from-slate-400">

//               <div className="p-2 space-x-1 flex items-center bg-blue-200">
//           <form onSubmit={handleSubmit}>
//               <select className="bg-orage-300 font-bold  border border-lime-500 border-b-yellow-400 rounded-md text-black bg-orange-400 p-2 px-6   overflow-y-scroll" value={selectdItem} onChange={(e)=> setSelectedItem(e.target.value)} >
//                   <option value="" className="bg-slate-300 p-2 h-5 ">Currency Name</option>

//                   {
//                     CurrencyData.map((item:any, index:number)=>(

//                       <option key={index} value={item} className="bg-slate-300 p-1">{item.isoCode} </option>

//                     ))
//                   }

//                     </select>

//                 <input
//                   type="text"
//                   placeholder="Set Amount..."
//                   value={amount}
//                   onChange={handleAmountChange}
//                   className="border border-gray-300 rounded-lg px-4  py-2 w-full"
//                   />
//                 <button type="submit"  className="ml-2 bg-pink-500 text-black p-2 rounded-full"
//                  onClick={()=> setShowPopUPCurrancy(false)}>
//                   Save
//                 </button>

//             </form>
//               </div>
//             </div>
//           </div>
//         </div>
//                   </div>

//       )}

//       {/* Delevery time pop up  */}

//       {showPopUpDelevery && (
//         <div className="z-10 w-[400px]  ml-[390px] absolute top-3 mt-32 bg-orange-600  bg-orage-600 ">
//           <div className=" absolute p-4   right-6 ">
//             <div className="bg-orange-600 w-14 h-14 right-8  -mt-9 rounded-br-[300px]   rotate-45"></div>
//           </div>
//           <div className="bg-pink-100 rounded-sm p-4  relative h-full  m-4">
//             <div className="max-w-md top-0 border shadow-md rounded  relative bg-black">
//               <input type="date" className="w-full h-10 p-1" />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderTable;
