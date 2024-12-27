import { TfiHome } from "react-icons/tfi";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { SlDrop } from "react-icons/sl";
import { CgSearch } from "react-icons/cg";
import { FaPlus } from "react-icons/fa6";
import LogoutButton from "../SideBar/LogoutButton";
import { TiMessages } from "react-icons/ti";


const Iconbar = () => {
  return (
    <div className=" border-slate-500  pl-2 flex flex-col justify-between items-center border-r pr-2 ">
      <div className="mt-5 text-blue-100 hover:text-blue-400">
                <TiMessages className="text-5xl text-center" />
        
        </div>
      <div className="border rounded-xl p-3 text-gray-200 h-1/2 gap-3 border-slate-600 
      ">
    <TfiHome className="hover:bg-slate-500 hover:bg-opacity-30 h-10 py-2  mb-5 mt-5
    hover:cursor-pointer w-10  rounded-full hover:text-blue-400" />
    <HiOutlineChatBubbleOvalLeft className="hover:bg-slate-500 hover:bg-opacity-30 h-10 py-2 mb-5 hover:cursor-pointer w-10  rounded-full hover:text-blue-400"  />
    <SlDrop className="hover:bg-slate-500 hover:bg-opacity-30 h-10 mb-5 py-2 hover:cursor-pointer w-10  rounded-full hover:text-blue-400"  />
    <CgSearch className="hover:bg-slate-500 hover:bg-opacity-30 h-10 mb-5 py-2 hover:cursor-pointer w-10  rounded-full hover:text-blue-400"  />
    <FaPlus className="hover:bg-slate-500 hover:bg-opacity-30 h-10 mb-5 py-2 hover:cursor-pointer w-10  rounded-full hover:text-blue-400"  />
    </div>
    <div className="mb-5">
      <LogoutButton />
      </div>
  
</div>
  )
}

export default Iconbar