import { IoSend } from "react-icons/io5";
import useSendMessage from "../../Context/useSendMessage";
import { useState } from "react";

function TypeSend() {
  const { loading, sendMessage } = useSendMessage();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex space-x-2 h-[8vh]  bg-gray-800">
        <div className="w-[70%] mx-4 ">
          <input
            type="text"
            value={message}
            placeholder="Type here"
            className="border  border-gray-700 rounded-xl bg-black outline-none px-4 py-3 mt-1 w-full"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button>
          <IoSend className="text-3xl" />
        </button>
      </div>
    </form>
  );
}

export default TypeSend;
