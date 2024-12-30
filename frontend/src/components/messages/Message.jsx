import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-sky-500" : "bg-gray-800";
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName} `}>
      <div className="chat-image avatar">
        <div className="w-10 h-10 rounded-full">
          <img alt="Profile Avatar" src={profilePic} />
        </div>
      </div>

      <div
        className={`chat-bubble text-white  max-w-[80%] ${bubbleBgColor} ${shakeClass} p-3 break-words whitespace-pre-wrap`}
      >
        {message.message}
      </div>

      <div className="chat-footer opacity-50 text-xs text-gray-100 flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
