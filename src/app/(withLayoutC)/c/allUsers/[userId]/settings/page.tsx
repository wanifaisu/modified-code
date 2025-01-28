import { FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { SiFacebook, SiYoutube } from "react-icons/si";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

const icons = [
  <SiFacebook
    key={"1"}
    width={25}
    height={24.85}
    color="#172554"
    className="self-center"
  />,
  <SiYoutube
    key={"2"}
    width={25}
    height={24.85}
    color="#172554"
    className="self-center"
  />,
  <FaTwitter
    key={"3"}
    width={25}
    height={24.85}
    color="#172554"
    className="self-center"
  />,
  <FaInstagramSquare
    key={"4"}
    width={25}
    height={24.85}
    color="#172554"
    className="self-center"
  />,
];

function page() {
  return (
    <div className="w-full h-[calc(h-screen - 76px)] mt-[150px]">
      <div className="w-[516px] h-[288px] mx-auto bg-white border-[#D9D9D9] border-[0.52px] rounded-[15.69px] p-4">
        <div className="flex flex-col h-full justify-around">
          <div className="flex flex-row justify-center mt-7">
            <span className="font-inter font-medium text-[33.47px] leading-[33.47px] text-left text-[#131212]">
              Confirm Account Deletion
            </span>
          </div>
          <div className="flex flex-row justify-start">
            <span>
              Are you sure you want to delete your account and customer data
              from DoorDash?
            </span>
          </div>
          <div className="flex flex-row justify-start">
            <span>This action is permanent and cannot be undone</span>
          </div>
          <div className="flex flex-row justify-end mr-4">
            <button className="font-inter font-bold text-[16px] leading-[22.4px] text-[#000000] mr-8">
              Cancel
            </button>
            <button
              className={`bg-[#EE404C] text-white ${poppins.className} font-medium text-base rounded-[5px] w-[185.15px] h-[39.68px]`}
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
