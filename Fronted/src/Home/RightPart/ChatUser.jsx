import useConversation from "../../Zustand/useConversation.js";
function ChatUser() {
  const { selectedConversation } = useConversation();
  console.log(selectedConversation);
  return (
    <div className="flex space-x-3 items-center h-[8vh] justify-center bg-gray-700 hover:bg-gray-500 duration-300">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div>
        <h1 className="text-xl">Hasmmi</h1>
        <span className="text-sm">Online</span>
      </div>
    </div>
  );
}

export default ChatUser;
