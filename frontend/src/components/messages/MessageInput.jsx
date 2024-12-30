import { useState } from "react";
import { TbSend2 } from "react-icons/tb";
import useSendMessage from "../../hooks/useSendMessage";
import { VscSmiley } from "react-icons/vsc";
import { GrAttachment } from "react-icons/gr";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim() === "") return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <div className="flex items-center justify-between p-3">
      <form
        className="flex items-center w-full bg-gray-800 rounded-full px-3 py-2 justify-between"
        onSubmit={handleSubmit}
      >
        <button
          type="button"
          className="text-2xl text-gray-400 hover:text-gray-200 mr-2"
        >
          <VscSmiley />
        </button>

        <input
          type="text"
          className="flex-grow bg-transparent outline-none text-white placeholder-gray-300"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          type="button"
          className="text-2xl text-gray-400 hover:text-gray-200 end-0"
        >
          <GrAttachment />
        </button>
      </form>

      <button
        type="submit"
        className="text-3xl  hover:text-blue-500 ml-3"
        onClick={handleSubmit}
      >
        <TbSend2 />
      </button>
    </div>
  );
};

export default MessageInput;
