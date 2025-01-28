"use client";

import CallDaillingModal from "@/components/ui/modal/CallDaillingModal";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import {
  MicIcon,
  SearchIcon,
  SendMessageIcon,
  UploadFileIcon,
} from "@/utils/Icons";
import { message } from "antd";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { HiMiniSpeakerWave, HiMiniSpeakerXMark } from "react-icons/hi2";
import { IoMdMic, IoMdMicOff } from "react-icons/io";
import { IoArrowRedoOutline } from "react-icons/io5";
import { MdCall, MdCallEnd } from "react-icons/md";
import { VscEdit } from "react-icons/vsc";

const ChatApp = () => {
  const [showDropManu, setShowDropManu] = useState(false);
  const [showForwartManu, setShowForwardManu] = useState(false);
  const [showEditMenu, setShowEditMenu] = useState(false);

  const [isDailed, setIsDailed] = useState(false);

  const userIconRef = useRef<HTMLUnknownElement>();
  // mute status
  const [MuteStatus, setMuteStatus] = useState(false);
  const [SoundStatus, setSoundStatus] = useState(false);
  const [userCancel, setUserCancel] = useState(false);
  const [callCancel, setCallCancel] = useState(false);
  const [commentCancel, setCommentCancel] = useState(false);

  // const placeholderImage = "/images/admin-login.png";
  const userImage = "/images/admin-login.png";

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi David, have you got the project report PDF?",
      sender: "other",
      time: "Today, 8:34 PM",
    },
    {
      id: 2,
      text: "No, I did not get it.",
      sender: "self",
      time: "Today, 8:34 PM",
    },
    {
      id: 3,
      text: "I just sent it here. Please fill the details by end of the day.",
      sender: "other",
      time: "Today, 8:35 PM",
    },
    {
      id: 4,
      text: "Ok. Should I also send it via email after filling the details?",
      sender: "self",
      time: "Today, 8:36 PM",
    },
  ]);

  const placeholderImage = "/images/user.png";
  const [chats, setChats] = useState([
    {
      id: 1,
      name: "Lisa Roy",
      lastMessage: "Hi, are you available tomorrow?",
      time: "10:25 AM",
      userCancel: false,
      callCancel: false,
      commentCancel: false,
    },
    {
      id: 2,
      name: "Jamie Taylor",
      lastMessage: "See you tomorrow!",
      time: "09:48 AM",
      userCancel: false,
      callCancel: false,
      commentCancel: false,
    },
    {
      id: 3,
      name: "Jason Roy",
      lastMessage: "Looking forward to a great start.",
      time: "08:30 AM",
      userCancel: false,
      callCancel: false,
      commentCancel: false,
    },
    {
      id: 4,
      name: "Amy Frost",
      lastMessage: "Will you start working on the project?",
      time: "07:15 AM",
      userCancel: false,
      callCancel: false,
      commentCancel: false,
    },
    {
      id: 5,
      name: "Paul Wilson",
      lastMessage: "Send your timetable champ!",
      time: "Yesterday",
      userCancel: false,
      callCancel: false,
      commentCancel: false,
    },
  ]);

  //redux
  const activeChat: any = useAppSelector((state) => state.chatPartner.partner);
  const dispatch = useAppDispatch();

  //copy text
  const handleCopyMessage = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        message.open({
          type: "success",
          content: "Message copied successfully",
        });
      })
      .catch((error) => {
        console.error("Failed to copy message:", error);
        // Handle error if copying fails
      });
  };

  const handlemuteStatus = () => {
    setMuteStatus(!MuteStatus);
  };
  const handleSoundStatus = () => {
    setSoundStatus(!SoundStatus);
  };

  const toggleUserCancel = (id: number) => {
    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === id ? { ...chat, userCancel: !chat.userCancel } : chat
      )
    );
  };

  const toggleCallCancel = (id: number) => {
    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === id ? { ...chat, callCancel: !chat.callCancel } : chat
      )
    );
  };

  const toggleCommentCancel = (id: number) => {
    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === id ? { ...chat, commentCancel: !chat.commentCancel } : chat
      )
    );
  };
  const handleShowDropManu = () => {
    setShowDropManu(!showDropManu);
    setShowForwardManu(false);
  };

  const toggleForwardMenu = () => {
    setShowForwardManu((prev) => !prev);
  };

  const toggleEditMenu = () => {
    setShowEditMenu((prev) => !prev);
  };

  const [isOpenPopUp, setIsOpenPopUp] = useState<number[]>([]);
  const toggleMenu = (index: any) => {
    if (isOpenPopUp.includes(index)) {
      setIsOpenPopUp(isOpenPopUp.filter((item) => item !== index));
    } else {
      setIsOpenPopUp([...isOpenPopUp, index]);
    }
  };

  // chatlist

  const [userModal, setUserModal] = useState(false);
  const [statusUser, setStatusUser] = useState("");
  const [showDropManuCall, setShowDropManuCall] = useState(false);
  const allUsers: any = useAppSelector((state) => state.users.allUsers);
  const [usersData, setUsersData] = useState(allUsers);
  const [showSearch, setShowSearch] = useState(false); // Toggle for the search input
  // const [showSearchEditMenu, setSearchShowEditMenu] = useState(false);

  const requestedUser = useAppSelector((state) => state.users.requesteUsers);
  const forwardRequest = useAppSelector(
    (state) => state.users.forwordRequestUsers
  );

  useEffect(() => {
    if (statusUser === "request") {
      setUsersData(requestedUser);
    } else if (statusUser === "forward-request") {
      setUsersData(forwardRequest);
    } else if (statusUser === "all") {
      setUsersData(allUsers);
    }
  }, [allUsers, forwardRequest, requestedUser, statusUser]);

  const handleShowDropManuCall = () => {
    setShowDropManuCall(!showDropManuCall);
  };

  return (
    <div className="flex h-screen bg-white dark:bg-slate-800">
      <div className="w-1/3 bg-white dark:bg-slate-800 h-screen flex flex-col">
        <div className="flex items-center justify-between bg-gray-200 p-4 shadow">
          <div className="flex items-center gap-3">
            <Image
              width={58}
              height={16}
              src={placeholderImage}
              alt="Profile"
              className="w-[58px] h-16 object-center object-cover rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold">Mr. Jack</h2>
              <div className="flex flex-col text-sm">
                <div className="">
                  <em>44</em>
                  <small className="text-yellow-500">⭐⭐⭐⭐⭐</small>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-end flex-col gap-3">
            <VscEdit
              className="text-gray-600 cursor-pointer"
              size={20}
              onClick={toggleEditMenu}
            />

            {showEditMenu && (
              <div className="relative">
                <div className="absolute right-0 top-10 flex items-start justify-end  ">
                  <div className="w-[200px] space-y-1 rounded-lg bg-white p-3 text-black dark:text-[#fff] dark:bg-slate-800">
                    <div key="iteration">
                      <div className="flex shadow items-center justify-between gap-1 px-2 rounded-full bg-white dark:bg-slate-800">
                        <span>Notification</span>
                        <label className="relative inline-flex cursor-pointer items-center">
                          <input
                            type="checkbox"
                            value=""
                            className="peer sr-only"
                          />
                          <div className="peer h-6 w-11 rounded-full bg-[#bbb] after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border  after:bg-white after:transition-all after:content-[''] peer-checked:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none  dark:border-slate-600 dark:bg-slate-700 dark:peer-focus:ring-green-800 rtl:peer-checked:after:-translate-x-full"></div>
                        </label>
                      </div>
                    </div>

                    <div key="iteration">
                      <div className="flex shadow items-center justify-between gap-1 px-2 rounded-full bg-white dark:bg-slate-800">
                        <span>Can&apos;t Message</span>
                        <label className="relative inline-flex cursor-pointer items-center">
                          <input
                            type="checkbox"
                            value=""
                            className="peer sr-only"
                          />
                          <div className="peer h-6 w-11 rounded-full bg-[#bbb] after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border  after:bg-white after:transition-all after:content-[''] peer-checked:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none  dark:border-slate-600 dark:bg-slate-700 dark:peer-focus:ring-green-800 rtl:peer-checked:after:-translate-x-full"></div>
                        </label>
                      </div>
                    </div>

                    <div key="iteration">
                      <div className="flex shadow items-center justify-between gap-1 px-2 rounded-full bg-white dark:bg-slate-800">
                        <span>Incoming Call</span>
                        <label className="relative inline-flex cursor-pointer items-center">
                          <input
                            type="checkbox"
                            value=""
                            className="peer sr-only"
                          />
                          <div className="peer h-6 w-11 rounded-full bg-[#bbb] after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border  after:bg-white after:transition-all after:content-[''] peer-checked:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none  dark:border-slate-600 dark:bg-slate-700 dark:peer-focus:ring-green-800 rtl:peer-checked:after:-translate-x-full"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* <div className="flex justify-end ml-[3px]">
              <input
                type="text"
                placeholder="Search..."
                className="w-35 h-5 absolute  border border-gray-300 focus:outline-none"
              />
              <FiSearch
                className="relative left-2 text-gray-600 mr-4 cursor-pointer"
                size={20}
              />
            </div> */}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-around p-2">
          <button className="border border-[#6366f1] rounded-full bg-[#fff] text-black px-4 py-1">
            Request 12
          </button>
          <button className="border border-[#6366f1] rounded-full bg-[#fff] text-black px-4 py-1">
            Forward 09
          </button>
          <button className="border border-[#6366f1] rounded-full bg-[#0059FFAB] text-black px-4 py-1">
            Users 35
          </button>
        </div>

        <h2 className="font-bold text-[25px] leading-[29.3px] text-black-4 mx-5">
          Messages
        </h2>
        <div className="flex bg-[#EDEDED] rounded-[20px] py-2 px-5 items-center justify-start gap-4 mx-5 my-2">
          <SearchIcon />
          <input
            type="text"
            className="bg-transparent py-2 w-full px-2 outline-none"
            placeholder="Search chats"
          />
        </div>

        {/* Chat List */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="bg-white shadow dark:bg-slate-800 flex flex-col item-center juatify-center border-#E7F3FF h-screen rounded">
            {chats.map((chat) => (
              <div
                key={chat.id}
                className="flex items-center justify-between p-3 mb-2 rounded-lg shadow hover:bg-gray-200 cursor-pointer"
              >
                {/* Left Section: Profile Image & Chat Info */}
                <div className="flex items-center gap-3">
                  <Image
                    width={50}
                    height={50}
                    src={placeholderImage}
                    alt="Profile"
                    className="w-15 h-15 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{chat.name}</p>
                    <p className="text-sm text-gray-600 truncate text-wrap">
                      {chat.lastMessage}
                    </p>
                  </div>
                </div>

                {/* Right Section: Time & Icons */}
                <div className="text-right text-sm text-gray-400">
                  <div className="whitespace-nowrap">{chat.time}</div>
                  <div className="flex gap-1 justify-end mt-1 text-gray-600">
                    <button onClick={() => toggleUserCancel(chat.id)}>
                      {chat.userCancel ? (
                        <Image
                          src="/icons/chatlisticon/user.svg"
                          alt="userallowed"
                          width={15}
                          height={10}
                        />
                      ) : (
                        <Image
                          src="/icons/chatlisticon/usercancel.svg"
                          alt="usercancelled"
                          width={15}
                          height={10}
                        />
                      )}
                    </button>
                    <button onClick={() => toggleCallCancel(chat.id)}>
                      {chat.callCancel ? (
                        <Image
                          src="/icons/chatlisticon/incoming-call.svg"
                          alt="callallowed"
                          width={15}
                          height={10}
                        />
                      ) : (
                        <Image
                          src="/icons/chatlisticon/callcancel.svg"
                          alt="callcancelled"
                          width={15}
                          height={10}
                        />
                      )}
                    </button>
                    <button onClick={() => toggleCommentCancel(chat.id)}>
                      {chat.commentCancel ? (
                        <Image
                          src="/icons/chatlisticon/comments.svg"
                          alt="commentallowed"
                          width={15}
                          height={10}
                        />
                      ) : (
                        <Image
                          src="/icons/chatlisticon/commentcancel.svg"
                          alt="commentcancelled"
                          width={15}
                          height={10}
                        />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* message view */}
      <div className="w-2/3 h-[94vh] flex flex-col bg-white dark:bg-slate-800">
        {/* Header */}
        <div className="flex items-center justify-between bg-[#ffb200] p-4 shadow">
          <div className="flex items-center gap-3">
            <Image
              width={50}
              height={50}
              src={placeholderImage}
              alt="Profile"
              className="w-10 h-10 rounded-[10px] object-cover object-center"
            />
            <div className="flex flex-col items-center">
              <h2 className="text-lg text-black dark:text-white font-semibold">
                Dianne Jhonson
              </h2>
              <div className="flex w-full justify-start space-x-2 items-center">
                <div className="w-3 h-3 bg-green-700 rounded-full"></div>
                <p className="text-start text-black dark:text-white">online</p>
              </div>
            </div>
          </div>
          {/* Header Icons */}
          <div className="flex items-center gap-4">
            <MdCall
              className="text-gray-600 dark:text-white  cursor-pointer"
              size={24}
              title="Audio Call"
              onClick={() => setIsDailed(true)}
            />
            <IoArrowRedoOutline
              className="text-gray-600 dark:text-white  cursor-pointer"
              size={24}
              title="Forward"
              onClick={toggleForwardMenu}
            />

            {showForwartManu && (
              <div className="relative">
                <div className="absolute right-0 top-10 flex items-start justify-end">
                  <div className="text-black min-w-[200px] rounded-lg bg-[#ECEEF1] dark:bg-slate-800 whitespace-nowrap p-2">
                    <ul className="space-y-3 rounded">
                      <li className="my-1 flex shadow cursor-pointer items-center justify-between gap-1 px-3 rounded-full bg-white dark:bg-slate-800">
                        <div className="flex items-center">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white p-1 text-white">
                            <CgProfile size={28} />
                          </span>
                          <p className="px-2">Mr Hunre</p>
                        </div>
                        <button className="rounded-full bg-[#bbb] px-5 text-white dark:text-white">
                          Send
                        </button>
                      </li>

                      <li className="my-1 shadow flex cursor-pointer items-center justify-between gap-1 px-3 rounded-full bg-white dark:bg-slate-800">
                        <div className="flex items-center">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-950 p-1 text-white">
                            <CgProfile size={28} />
                          </span>
                          <p className="px-2">Mrs Paris</p>
                        </div>
                        <button className="rounded-full bg-orange-400 px-5 text-black dark:text-white">
                          Send
                        </button>
                      </li>

                      <li className="my-1 flex cursor-pointer items-center justify-between gap-1 px-3 rounded-full bg-white dark:bg-slate-800">
                        <div className="flex items-center">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-950 p-1 text-white">
                            <CgProfile size={28} />
                          </span>
                          <p className="px-2">Mr Jack</p>
                        </div>
                        <button className="rounded-full bg-[#bbb] px-3 text-white dark:text-white">
                          Unsend
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            <BsThreeDotsVertical
              className="text-gray-600 dark:text-white  cursor-pointer"
              size={24}
              title="More Options"
              onClick={handleShowDropManu}
            />

            {showDropManu && (
              <div className="relative">
                <div className="absolute right-0 top-10 flex items-start justify-end  ">
                  <div className="w-[200px] space-y-1 rounded-lg bg-[#ECEEF1] p-3 text-black dark:text-[#fff] dark:bg-slate-800">
                    <div key="iteration">
                      <div className="flex items-center shadow justify-between gap-1 px-2 rounded-full bg-white dark:bg-slate-800">
                        <span>Block</span>
                        <label className="relative inline-flex cursor-pointer items-center">
                          <input
                            type="checkbox"
                            value=""
                            className="peer sr-only"
                          />
                          <div className="peer h-6 w-11 rounded-full bg-[#bbb] after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border  after:bg-white after:transition-all after:content-[''] peer-checked:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none  dark:border-slate-600 dark:bg-slate-700 dark:peer-focus:ring-green-800 rtl:peer-checked:after:-translate-x-full"></div>
                        </label>
                      </div>
                    </div>

                    <div key="iteration">
                      <div className="flex items-center shadow justify-between gap-1 px-2 rounded-full bg-white dark:bg-slate-800">
                        <span>Can&apos;t Message</span>
                        <label className="relative inline-flex cursor-pointer items-center">
                          <input
                            type="checkbox"
                            value=""
                            className="peer sr-only"
                          />
                          <div className="peer h-6 w-11 rounded-full bg-[#bbb] after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border  after:bg-white after:transition-all after:content-[''] peer-checked:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none  dark:border-slate-600 dark:bg-slate-700 dark:peer-focus:ring-green-800 rtl:peer-checked:after:-translate-x-full"></div>
                        </label>
                      </div>
                    </div>

                    <div key="iteration">
                      <div className="flex items-center shadow justify-between gap-1 px-2 rounded-full bg-white dark:bg-slate-800">
                        <span>Can&apos;t Call</span>
                        <label className="relative inline-flex cursor-pointer items-center">
                          <input
                            type="checkbox"
                            value=""
                            className="peer sr-only"
                          />
                          <div className="peer h-6 w-11 rounded-full bg-[#bbb] after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border  after:bg-white after:transition-all after:content-[''] peer-checked:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none  dark:border-slate-600 dark:bg-slate-700 dark:peer-focus:ring-green-800 rtl:peer-checked:after:-translate-x-full"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 px-4 pt-10 pb-4 overflow-y-auto bg-[#fff] dark:bg-slate-800">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-end gap-3 mb-4 ${
                message.sender === "self" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              {/* Display sender's image */}
              <Image
                width={50}
                height={50}
                src={message.sender === "self" ? userImage : placeholderImage}
                alt="User"
                className="w-8 h-8 rounded-full"
              />

              <div
                className={`${
                  message.sender === "self"
                    ? "bg-[#6366F1] text-white dark:text-black"
                    : "bg-[#eee] text-black dark:text-black"
                } rounded-lg p-3 max-w-xs`}
              >
                <p>{message.text}</p>
                <span className="block text-xs text-gray-400 mt-2">
                  {message.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Input Field */}
        <div
          style={{ boxShadow: "0px 4px 20px 0px #00000040" }}
          className="flex items-center p-4 bg-[#E7F3FF] dark:bg-slate-800 shadow gap-3"
        >
          <div className="relative w-full flex items-center gap-3">
            <UploadFileIcon />
            <MicIcon />
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full p-3 focus:outline-none outline-none bg-transparent"
            />
          </div>
          {/* <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"> */}
          <SendMessageIcon />
          {/* </button> */}
        </div>
      </div>
      <CallDaillingModal
        isVisible={isDailed}
        onClose={setIsDailed}
        className="mt-6 "
      >
        <div className=" flex h-72 w-64 flex-col items-center justify-between rounded p-2 text-black dark:text-[#fff]  md:mt-3">
          <div className="mt-3 flex flex-col items-center gap-y-3">
            <div className="rounded-full">
              <Image
                src={placeholderImage}
                alt="callerpicture"
                width={50}
                height={30}
              />
              {/* <FaRegCircleUser className=" text-6xl text-slate-500" /> */}
            </div>
            <div className="mt-1 text-xl">David Evle</div>
            <div className="flex w-full items-center justify-center gap-2 text-sm font-semibold  ">
              <p>11 :</p> <p>39 :</p> <p>12</p>
            </div>
          </div>

          <div className="mt-4 flex justify-center gap-5 space-x-4  ">
            <button
              className="rounded-full bg-blue-500 px-3.5 py-3.5 text-white"
              onClick={handlemuteStatus}
            >
              {MuteStatus ? <IoMdMicOff size={20} /> : <IoMdMic size={20} />}
            </button>
            <button
              className="rounded-full bg-rose-500 px-3.5 py-3.5 text-white"
              onClick={() => setIsDailed(false)}
            >
              <MdCallEnd size={20} />
            </button>
            <button
              className="rounded-full bg-blue-500 px-3.5 py-3.5 text-white"
              onClick={handleSoundStatus}
            >
              {SoundStatus ? (
                <HiMiniSpeakerXMark size={20} />
              ) : (
                <HiMiniSpeakerWave size={20} />
              )}
            </button>
          </div>
        </div>
      </CallDaillingModal>
    </div>
  );
};

export default ChatApp;
