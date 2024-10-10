import { useEffect } from "react";
import useConversation from "../../Zustand/useConversation";
import ChatUser from "./ChatUser";
import Messages from "./Messages";
import TypeSend from "./TypeSend";
import Loading from "../../Components/Loading";
import { useAuth } from "../../Context/AuthProvider";

function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="w-[80%] bg-slate-700 text-gray-300">
      <div>
        {!selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}

export default Right;

const NoChatSelected = () => {
  const [authUser] = useAuth();
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-center">
          Welcome{" "}
          <span className="font-semibold text-xl">
            {authUser.user.fullname}
            <br />
            No chat selected ,please start conversation by selecting anyone to
            your contacts.
          </span>
        </h1>
      </div>
    </>
  );
};
