import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import DarkModeSwitcher from "./DarkModeSwitcher";
import OrderModal from "./OrderModal";
import PaymentModal from "./PaymentModal";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500"],
});

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  const pathName = usePathname();
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [isSavingsModalOpen, setIsSavingsModalOpen] = useState(false);

  const routeName = pathName.split("/")[pathName.split("/").length - 1];

  function capitalizeFirstLetter(str: string): string {
    if (!str) return str; // Check for an empty string
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Status");

  const statuses = ["Active", "Suspend", "Block"];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSave = () => setIsModalOpen(true);

  const handleCancel = () => {
    setIsModalOpen(false); // Close the modal without saving
  };

  const handleConfirmSave = () => {
    // Add save logic here
    console.log("Data saved!");
    setIsModalOpen(false); // Close the modal
  };

  const selectStatus = (status: string) => {
    setSelectedStatus(status);
    setIsOpen(false);
  };

  const isUsersAllRoute =
    pathName.includes("/allUsers/") &&
    (pathName.includes("/profile") ||
      pathName.includes("/orders") ||
      pathName.includes("/payments") ||
      pathName.includes("/settings"));

  const messages = [
    {
      name: "Mr Jack",
      avatar: "/images/profile/Abstract04.png",
      text: "Hi",
      time: "2 Hours ago",
    },
    {
      name: "Ms Paris",
      avatar: "/images/profile/IconSet (1).png",
      text: "Hello",
      time: "14 Hours ago",
    },
    {
      name: "Mr Jams",
      avatar: "/images/profile/IconSet (2).png",
      text: "Can you help me?",
      time: "3 hours ago",
    },
    {
      name: "Misa",
      avatar: "/images/profile/IconSet (3).png",
      text: "Hi",
      time: "1 Hour ago",
    },
    {
      name: "Misa",
      avatar: "/images/profile/IconSet.png",
      text: "Hi!",
      time: "1 Hour ago",
    },
  ];
  const orders = [
    {
      name: "Mr Jack",
      avatar: "/images/profile/Abstract04.png",
      task: "web dev",
      time: "1 Hour ago",
    },
    {
      name: "Ms Paris",
      avatar: "/images/profile/IconSet (1).png",
      task: "app dev",
      time: "59 minutes ago",
    },
    {
      name: "Mr Jack",
      avatar: "/images/profile/IconSet (2).png",
      task: "logo",
      time: "12 hours ago",
    },
    {
      name: "Paris",
      avatar: "/images/profile/IconSet (3).png",
      task: "banar",
      time: "Today, 11:59 AM",
    },
    {
      name: "Mr Sarve",
      avatar: "/images/profile/IconSet.png",
      task: "logo",
      time: "Feb 2, 2024",
    },
  ];
  const savings = [
    {
      name: "Mr Jack",
      avatar: "/images/profile/Abstract04.png",
      bank: "sbi Bank",
      balance: "55 USD",
      time: "1 Hour ago",
    },
    {
      name: "Ms Paris",
      avatar: "/images/profile/IconSet (1).png",
      bank: "tas Bank",
      balance: "45 EUR",
      time: "59 minutes ago",
    },
    {
      name: "Mr Jack",
      avatar: "/images/profile/IconSet (2).png",
      bank: "UCC Bank",
      balance: "45 PKG",
      time: "12 hours ago",
    },
    {
      name: "Paris",
      avatar: "/images/profile/IconSet (3).png",
      bank: "BTC Bank",
      balance: "465 BTC",
      time: "Today, 11:59 AM",
    },
    {
      name: "Mr Sarve",
      avatar: "/images/profile/IconSet.png",
      bank: "Btc Bank",
      balance: "4511 USD",
      time: "Feb 2, 2024",
    },
  ];
  const payments = [
    {
      name: "Mr Jack",
      avatar: "/images/profile/Abstract04.png",
      bank: "sbi Bank",
      balance: "55 USD",
      time: "1 Hour ago",
    },
    {
      name: "Ms Paris",
      avatar: "/images/profile/IconSet (1).png",
      bank: "tas Bank",
      balance: "45 EUR",
      time: "59 minutes ago",
    },
    {
      name: "Mr Jack",
      avatar: "/images/profile/IconSet (2).png",
      bank: "UCC Bank",
      balance: "45 PKG",
      time: "12 hours ago",
    },
    {
      name: "Paris",
      avatar: "/images/profile/IconSet (3).png",
      bank: "BTC Bank",
      balance: "465 BTC",
      time: "Today, 11:59 AM",
    },
    {
      name: "Mr Sarve",
      avatar: "/images/profile/IconSet.png",
      bank: "Btc Bank",
      balance: "4511 USD",
      time: "Feb 2, 2024",
    },
  ];
  const withdraw = [
    {
      name: "Mr Jack",
      avatar: "/images/profile/Abstract04.png",
      bank: "sbi Bank",
      balance: "55 USD",
      time: "1 Hour ago",
    },
    {
      name: "Ms Paris",
      avatar: "/images/profile/IconSet (1).png",
      bank: "tas Bank",
      balance: "45 EUR",
      time: "59 minutes ago",
    },
    {
      name: "Mr Jack",
      avatar: "/images/profile/IconSet (2).png",
      bank: "UCC Bank",
      balance: "45 PKG",
      time: "12 hours ago",
    },
    {
      name: "Paris",
      avatar: "/images/profile/IconSet (3).png",
      bank: "BTC Bank",
      balance: "465 BTC",
      time: "Today, 11:59 AM",
    },
    {
      name: "Mr Sarve",
      avatar: "/images/profile/IconSet.png",
      bank: "Btc Bank",
      balance: "4511 USD",
      time: "Feb 2, 2024",
    },
  ];

  const openModal = (modalName: string) => {
    // Reset all modals to false, then open the requested modal
    setIsMessageModalOpen(modalName === "Message");
    setIsOrderModalOpen(modalName === "Order");
    setIsSavingsModalOpen(modalName === "Savings");
    setIsPaymentModalOpen(modalName === "Payment");
    setIsWithdrawModalOpen(modalName === "Withdraw");
  };

  const closeModal = () => {
    setIsMessageModalOpen(false);
    setIsOrderModalOpen(false);
    setIsSavingsModalOpen(false);
    setIsPaymentModalOpen(false);
    setIsWithdrawModalOpen(false);
  };

  return (
    <header
      style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
      className="sticky top-0 z-999 flex w-full bg-[#F8F6F0] dark:bg-boxdark"
    >
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!w-full delay-300"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "delay-400 !w-full"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!w-full delay-500"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          {/* <div className="flex flex-1 items-center gap-4 sm:flex-grow-0 sm:justify-start">
           <form className="flex w-full max-w-md items-center border border-gray-300 bg-white px-3 py-2 rounded-md shadow-sm dark:bg-boxdark dark:border-strokedark"> 
           <input
              type="text"
              placeholder="Placeholder text"
              className="flex-grow rounded-l-md border border-white px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-none"
            />
            <button
              type="submit"
              className="rounded-r-md bg-[#ffb200] px-6 py-3 text-sm font-medium text-white hover:bg-yellow-600"
            >
              Search
            </button>    
           </form> 
          </div> */}

          <div className="flex justify-center lg:hidden">
            <button onClick={window.location.reload}>
              {/* <Image
                width={30}
                height={32}
                src={"/images/logo.svg"}
                alt="Logo"
              /> */}
            </button>
          </div>
        </div>

        <div
          className={`${
            isUsersAllRoute ? "flex" : "hidden"
          } flex-row justify-between w-[311px] h-[88px]'`}
        >
          <div className="flex flex-col justify-center">
            <span
              className={`${poppins.className} font-medium text-[24px] leading-[36px] text-[#3E435D]`}
            >
              {capitalizeFirstLetter(routeName)}
            </span>
          </div>
          <div
            className={`${
              pathName.includes("/profile") ? "flex" : "hidden"
            } flex-col`}
          >
            <span
              className={`${poppins.className} font-medium text-[24px] leading-[36px] text-[#3E435D]`}
            >
              Welcome,
            </span>
            <span
              className={`${poppins.className} font-light text-[16px] leading-[24px] text-[#3E435D]`}
            >
              abc@gmail.com
            </span>
            <span
              className={`${poppins.className} font-light text-[16px] leading-[24px] text-[#3E435D]`}
            >
              Tue, 07 June 2024 (GMT)
            </span>
          </div>
        </div>

        <form
          className={`${
            isUsersAllRoute &&
            !pathName.includes("/orders") &&
            !pathName.includes("/payments") &&
            !pathName.includes("/Withdraw")
              ? "hidden"
              : "lg:flex"
          } hidden  w-full max-w-lg items-center rounded-md bg-white shadow-md`}
        >
          <input
            type="text"
            placeholder={`${
              isUsersAllRoute && pathName.includes("/orders")
                ? "Search the Orders"
                : isUsersAllRoute && pathName.includes("/payments")
                ? "Search the withdraws"
                : "Placeholder Text"
            }`}
            className="flex-grow rounded-l-md border border-white px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-none"
          />
          <button
            type="submit"
            className="rounded-r-md bg-[#ffb200] px-6 py-3 text-sm font-semibold text-[#231F20] hover:bg-yellow-600"
          >
            Search
          </button>
        </form>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4"></ul>
        </div>
        <div
          className={`${
            isUsersAllRoute ? "hidden" : "flex"
          } flex justify-center gap-4`}
        >
          <ul className="flex items-center">
            <Link href="/">
              {/* <FaArrowRotateRight size={30} /> */}
              <Image
                src="/Rotate.png"
                alt="Rotate"
                width={35}
                height={32}
                className={"dark:invert"}
              />
            </Link>
          </ul>

          <ul className="flex items-center">
            {/* <Image src="/fullscreen.png" alt='Rotate' width={35} height={32} /> */}
            <FullScreen />
          </ul>
          <ul className="flex items-center">
            <DarkModeSwitcher />
            {/* <Image src="/switcher.png" alt='Rotate' width={35} height={32} /> */}
          </ul>
          <button onClick={() => openModal("Order")}>
            {/* <img width={30} height={32} src={"/icons/clipboard.svg"} alt="Order Icon" className="text-gray-500" /> */}
            <Image
              src="/orders.png"
              alt="orders"
              width={30}
              height={32}
              className={"dark:invert"}
            />
          </button>
          <OrderModal
            isOpen={isOrderModalOpen}
            onClose={closeModal}
            orders={orders}
          />

          <button onClick={() => openModal("Order")}>
            {/* <img width={30} height={32} src={"/icons/clipboard.svg"} alt="Order Icon" className="text-gray-500" /> */}
            <Image
              src="/email.png"
              alt="email"
              width={30}
              height={32}
              className={"dark:invert"}
            />
          </button>
          <OrderModal
            isOpen={isOrderModalOpen}
            onClose={closeModal}
            orders={orders}
          />
          {/* // Order Modal button */}
          <button onClick={() => openModal("Order")}>
            {/* <img width={30} height={32} src={"/icons/clipboard.svg"} alt="Order Icon" className="text-gray-500" /> */}
            <Image
              src="/agency.png"
              alt="orders"
              width={35}
              height={32}
              className={"dark:invert"}
            />
          </button>
          <OrderModal
            isOpen={isOrderModalOpen}
            onClose={closeModal}
            orders={orders}
          />

          <button onClick={() => openModal("Order")}>
            {/* <img width={30} height={32} src={"/icons/clipboard.svg"} alt="Order Icon" className="text-gray-500" /> */}
            <Image
              src="/email.png"
              alt="email"
              width={30}
              height={32}
              className={"dark:invert"}
            />
          </button>
          <OrderModal
            isOpen={isOrderModalOpen}
            onClose={closeModal}
            orders={orders}
          />

          {/* // Message Modal button */}
          {/* <button onClick={() => openModal("Message")}>

            <BiSolidMessageSquareDetail size={30} />
          </button> */}
          {/* <MessageModal isOpen={isMessageModalOpen} onClose={closeModal} messages={messages} /> */}

          {/* // Order Modal button */}

          {/* // Payment Modal button */}
          {/* <button onClick={() => openModal("Savings")}>

            <img width={35} height={30} src={"/icons/saving.svg"} alt="Payment Icon" className="text-gray-500" />
          </button>
          <SavingsModal isOpen={isSavingsModalOpen} onClose={closeModal} savings={savings} /> */}

          <button onClick={() => openModal("Payment")}>
            {/* <img width={35} height={30} src={"/icons/payment.svg"} alt="Payment Icon" /> */}
            <Image
              src="/payment.png"
              alt="payment"
              width={35}
              height={32}
              className={"dark:invert"}
            />
          </button>
          <PaymentModal
            isOpen={isPaymentModalOpen}
            onClose={closeModal}
            payments={payments}
          />
          {/* // Order Modal button */}
          <button onClick={() => openModal("Withdraw")}>
            {/* <img width={30} height={32} src={"/icons/clipboard.svg"} alt="Order Icon" className="text-gray-500" /> */}
            <Image
              src="/return.png"
              alt="return"
              width={35}
              height={32}
              className={"dark:invert"}
            />
          </button>
          <OrderModal
            isOpen={isWithdrawModalOpen}
            onClose={closeModal}
            orders={orders}
          />

          {/* // Withdraw Modal button */}
          {/* <button onClick={() => openModal("Withdraw")}>

            <img width={35} height={30} src={"/icons/withdraw.svg"} alt="Withdraw Icon" className="bg-gray-500" />
          </button>
          <WithdrawModal isOpen={isWithdrawModalOpen} onClose={closeModal} withdrawals={withdrawals} /> */}
        </div>
        <div className={`${isUsersAllRoute ? "flex" : "hidden"} `}>
          <div className="relative inline-block">
            {/* Dropdown Button */}
            <div
              onClick={toggleDropdown}
              className="flex flex-row justify-around items-center min-w-25 h-[45px] border-[1.5px] border-[#FFB200] rounded-lg mr-4 cursor-pointer"
            >
              <span className="font-inter font-normal text-base text-[#000000]">
                {selectedStatus}
              </span>
              <span>
                <FaArrowDown />
              </span>
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute mt-2 min-w-25 bg-white border border-[#FFB200] rounded-lg shadow-lg z-10">
                {statuses.map((status) => (
                  <div
                    key={status}
                    onClick={() => selectStatus(status)}
                    className="px-4 py-2 text-[#000000] font-inter font-normal text-base hover:bg-[#FFB200] hover:text-white cursor-pointer"
                  >
                    {status}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div
            onClick={handleSave}
            className={
              "flex flex-row justify-around items-center w-21 h-[45px] border-[1.5px] bg-[#FFB200] rounded-lg mr-4 cursor-pointer"
            }
          >
            <span className="font-inter font-normal text-base text-[#000000]">
              Save
            </span>
          </div>
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="flex flex-col justify-center bg-white p-6 rounded-[10px] border border-[#C3C3C3] shadow-lg w-[473px] h-[386px]">
                <div className="flex flex-col justify-center items-center w-12 h-12 bg-[#FFFFFF] border border-[#D9D9D9] rounded-full self-center mb-4">
                  <Image
                    src={"/icons/warning.png"}
                    alt={"warning"}
                    width={24}
                    height={24}
                  />
                </div>
                <h2 className="font-inter text-[24px] leading-[24px] text-[#0C0B0B] font-medium text-center mb-4">
                  Change Status
                </h2>
                <p className="font-inter font-normal text-[16px] leading-[22.24px] text-[#6B6B6B] text-center mb-6">
                  You proceed to change <br />
                  the status
                  <br /> {"Click no if you don't want to"}
                </p>
                <div className="flex flex-row justify-evenly">
                  <button
                    onClick={handleCancel}
                    className="w-[169px] h-[56px] px-4 py-2 border border-[#FFB200] text-[#FFB200] bg-white rounded-lg"
                  >
                    No
                  </button>
                  <button
                    onClick={handleConfirmSave}
                    className="w-[169px] h-[56px] px-4 py-2 bg-[#FFB200] text-black rounded-lg"
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="flex flex-row justify-center items-center">
            <Image
              src={"/icons/close.png"}
              width={21.5}
              height={21.5}
              alt="close-icon"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export const FullScreen = () => {
  const [showFullPage, setShowFullPage] = useState(false);
  const handleFullScreen = () => {
    if (showFullPage) {
      document.exitFullscreen();
    } else {
      const rootElement = document.documentElement;
      if (rootElement.requestFullscreen) {
        rootElement.requestFullscreen();
      }
    }

    setShowFullPage(!showFullPage);
  };
  return (
    <li className="relative cursor-pointer">
      <span
        onClick={handleFullScreen}
        // className="bg-slate relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
        className="bg-slate relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke hover:text-primary dark:border-strokedark dark:text-white"
      >
        {/* <HiOutlineArrowsPointingOut size={50} /> */}
        <Image
          src="/fullscreen.png"
          alt="Rotate"
          width={35}
          height={32}
          className={"dark:invert"}
        />
      </span>
    </li>
  );
};

export default Header;
