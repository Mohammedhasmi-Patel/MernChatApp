import { IoSend } from "react-icons/io5";

function TypeSend() {
  return (
    <div className="flex space-x-2 h-[8vh]  bg-gray-800">
      <div className="w-[70%] mx-4 ">
        <input
          type="text"
          placeholder="Type here"
          className="border  border-gray-700 rounded-xl outline-none px-4 py-3 mt-1 w-full"
        />
      </div>
      <button>
        <IoSend className="text-3xl" />
      </button>
    </div>
  );
}

export default TypeSend;
