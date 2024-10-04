import ChatUser from "./ChatUser";
import Messages from "./Messages";
import TypeSend from "./TypeSend";

function Right() {
  return (
    <div className=" w-[70%]  bg-slate-900 text-gray-300">
      <ChatUser />
      <div
        className="flex-1 overflow-y-auto"
        style={{ maxHeight: "calc(92vh - 8vh)" }}
      >
        <Messages />
      </div>
      <TypeSend />
    </div>
  );
}

export default Right;
