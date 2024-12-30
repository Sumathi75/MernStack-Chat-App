import { useState } from "react";
import Conversation from "./Conversation";
import { useAuthContext } from "../../context/AuthContext";
import { RiFilter3Fill } from "react-icons/ri";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import useGetConversations from "../../hooks/useGetConversations";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdPersonAddAlt1 } from "react-icons/md";

const Profile = () => {
  const { authUser } = useAuthContext();
  const [isListVisible, setIsListVisible] = useState(false);
  const [addChat, setAddChat] = useState(false);
	const { conversations } = useGetConversations();


  const toggleListVisibility = () => {
    setIsListVisible((prev) => !prev);
  };
  const toggleAddChat = () => {
    setAddChat((prev) => !prev);
  };

  return (
    <div className="m-auto py-2 rounded-md relative ">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <div className="w-14 h-14">
            <img
              src={authUser.profilePic}
              alt="Profile Avatar"
              className="w-full h-full  rounded-full border-4 border-green-400 object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl text-zinc-200 font-bold hover:text-sky-500">
              {authUser.fullName}
            </h1>
            <p className="text-md text-green-500">Available</p>
          </div>
        </div>{" "}
      <div className="divider px-3 "></div>
      {/* <div className="divider py-3"></div> */}
        <button
          onClick={toggleAddChat}
          className="text-2xl hover:text-sky-500  p-2  relative"
        >
          <FiEdit />
          {" "}
        </button>
        <button
          onClick={toggleListVisibility}
          className="text-3xl hover:text-sky-500  p-2  relative"
        >
          <RiFilter3Fill />{" "}
        </button>
      </div>
      

      {addChat && (
        <div
          className="absolute right-0 mt-2 bg-sky-500 text-white rounded-md 
         p-3 w-3/4"
        >
          <ul>
            <li className="hover:bg-blue-300 p-2 rounded-md cursor-pointer flex items-center gap-1 hover:text-gray-800">
              <span className="rounded-full border p-2 text-xl hover:border-gray-800"><MdPersonAddAlt1 /></span>
             New Chat
            </li>
            <li className="hover:bg-blue-300 p-2 rounded-md cursor-pointer flex items-center gap-1 hover:text-gray-800">
              <span className="rounded-full border p-2 text-xl hover:border-gray-800"><HiMiniUserGroup /></span>
              New Group
            </li>
          </ul>
          <div className="py-2">
      <p className="text-gray-800 mb-2 font-semibold">All Contacts</p>
      <div className="flex flex-col gap-2 max-h-60 overflow-y-scroll scrollbar-hidden">
        {conversations.map((conversation, idx) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            lastIdx={idx === conversations.length - 1}
          />
        ))}
      </div>
    </div>
        </div>
      )}
      {isListVisible && (
        <div
          className="absolute right-0 mt-2 bg-sky-500 text-white rounded-md 
         p-3 w-32 "
        >
          <ul >
          <p className="text-sm text-gray-600">Filter chat by</p>
            <li className="hover:bg-blue-300 p-2 rounded-md cursor-pointer flex items-center gap-1">
              <span className=" text-xl"><MdOutlineMarkUnreadChatAlt />
              </span>
              Unread
            </li>
            <li className="hover:bg-blue-300 p-2 rounded-md cursor-pointer flex items-center gap-1">
            <span className=" text-xl"> <FaRegStar />
            </span>
             Favourite
            </li>
            <li className="hover:bg-blue-300 p-2 rounded-md cursor-pointer flex items-center gap-1">
            <span className=" text-xl"> <IoPeopleCircleOutline />
            </span>
              Contacts
            </li>
          </ul>
        </div>
      )}

    </div>
  );
};

export default Profile;
