import { useState } from "react";
import { TbSend2 } from "react-icons/tb";
import useSendMessage from "../../hooks/useSendMessage";
import { VscSmiley } from "react-icons/vsc";

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
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative input flex justify-between rounded-full   border-gray-600">
        <div className="flex items-center w-5/6 ">
          <button
            type="submit"
            className="absolute  start-1 flex items-center  text-3xl ml-2"
          >
            <VscSmiley />{" "}
          </button>
          <input
            type="text"
            className="ml-10 w-full overflow-scroll"
            placeholder="Send a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="flex items-center">
          <button type="submit" className="absolute  end-1   text-3xl mr-3 ">
            <TbSend2 />
          </button>
        </div>
      </div>
    </form>
  );
};
export default MessageInput;
