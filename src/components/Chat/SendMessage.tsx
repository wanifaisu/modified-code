import { GrAttachment } from "react-icons/gr";
import { IoSendSharp } from "react-icons/io5";

const SendMessage = () => {
  return (
    <div className="w-full  px-8 py-2 dark:bg-[#24303F]">
      <form className="flex w-full items-center justify-between gap-5">
        <GrAttachment className="h-6 w-6 text-slate-800 dark:text-white" />
        <input
          className="w-full rounded-full border px-3 py-2 bg-whiten outline-none  dark:bg-slate-800"
          type="text"
          name="search"
          placeholder="Enter your message..."
          id="search"
        />
        <IoSendSharp className="h-6 w-6 text-slate-800 dark:text-white" />
      </form>
    </div>
  );
};

export default SendMessage;
