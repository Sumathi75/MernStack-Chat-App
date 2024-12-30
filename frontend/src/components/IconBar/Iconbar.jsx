import { TfiHome } from "react-icons/tfi";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { SlDrop } from "react-icons/sl";
import { CgSearch } from "react-icons/cg";
import { FiPlus } from "react-icons/fi";
import LogoutButton from "../SideBar/LogoutButton";
import { TiMessages } from "react-icons/ti";

const Iconbar = () => {
  return (
    <div className=" border-slate-500  pl-2 flex flex-col justify-between items-center border pr-2 ">
      <div className="mt-5 text-blue-100 hover:text-sky-500">
        <TiMessages className="text-5xl text-center" />
      </div>
      <div
        className="border rounded-xl px-3 py-0 text-gray-200  gap-3 border-slate-600 
      "
      >
        <TfiHome
          className="hover:bg-slate-500 hover:bg-opacity-30 h-10 py-2  my-3
    hover:cursor-pointer w-10  rounded-full hover:text-sky-500"
        />
        <HiOutlineChatBubbleOvalLeft className="hover:bg-slate-500 hover:bg-opacity-30 h-10 py-2 my-3 hover:cursor-pointer w-10  rounded-full hover:text-sky-500" />
        <SlDrop className="hover:bg-slate-500 hover:bg-opacity-30 h-10 my-3 py-2 hover:cursor-pointer w-10  rounded-full hover:text-sky-500" />
        <CgSearch className="hover:bg-slate-500 hover:bg-opacity-30 h-10 my-3 py-2 hover:cursor-pointer w-10  rounded-full hover:text-sky-500" />
        <FiPlus className="hover:bg-slate-500 hover:bg-opacity-30 h-10 my-3 py-2 hover:cursor-pointer w-10  rounded-full hover:text-sky-500" />
      </div>
      <div className="my-4">
        <LogoutButton />
      </div>
    </div>
  );
};

export default Iconbar;
