import { useEffect, useState, useRef } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import { useSocketContext } from "../../context/SocketContext";
import { FaPhoneAlt, FaVideo } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers, socket } = useSocketContext();
  const [isTyping, setIsTyping] = useState(false);
  const typingTimeout = useRef(null); 

  const isOnline =
    selectedConversation && onlineUsers.includes(selectedConversation._id);

  useEffect(() => {
    if (!socket || !selectedConversation) return;

    const handleTyping = (userId) => {
      if (userId === selectedConversation._id) {
        setIsTyping(true);

        if (typingTimeout.current) clearTimeout(typingTimeout.current);
        typingTimeout.current = setTimeout(() => setIsTyping(false), 2000); // Reset after 2 seconds
      }
    };

    socket.on("typing", handleTyping);

    return () => {
      socket.off("typing", handleTyping);
      if (typingTimeout.current) clearTimeout(typingTimeout.current);
    };
  }, [socket, selectedConversation]);

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="flex flex-col w-full">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2 h-16 flex items-center justify-between">
            <div className="flex items-center">
              <span className="rounded-full">
                <img
                  src={selectedConversation.profilePic || "/default-avatar.png"}
                  alt={`${selectedConversation.fullName}'s avatar`}
                  className={`avatar w-12 rounded-full ${
                    isOnline ? "ring-2 ring-green-500" : "ring-2 ring-gray-300"
                  }`}
                />
              </span>
              <div className="ml-3">
                <span className="text-gray-900 font-bold text-lg">
                  {selectedConversation.fullName}
                </span>
                <p
                  className={`text-sm ${
                    isTyping
                      ? "text-yellow-400"
                      : isOnline
                      ? "text-green-400"
                      : "text-gray-300"
                  }`}
                >
                  {isTyping ? "Typing..." : isOnline ? "Online" : "Offline"}
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <FaPhoneAlt className="w-12 hover:text-blue-500" />
              <FaVideo className="w-12 hover:text-blue-500" />
              <BsThreeDotsVertical className="w-12 hover:text-blue-500" />
            </div>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome ❄️ {authUser.fullName} 💜</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl text-center" />
      </div>
    </div>
  );
};
