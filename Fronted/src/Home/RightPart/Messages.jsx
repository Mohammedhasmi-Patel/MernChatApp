import Message from "./Message";
import useGetMessage from "../../Context/useGetMessage";
import Loading from "../../Components/Loading";
import { useEffect, useRef } from "react";
import useGetSocketMessage from "../../Context/useGetSocketMessage";

function Messages() {
  const { loading, messages } = useGetMessage();

  useGetSocketMessage(); // listening incoming msg

  const lastMsgRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      if (lastMsgRef.current) {
        lastMsgRef.current.scrollIntoView({ behaviour: "smooth" });
      }
    }, 100);
  }, [messages]);
  return (
    <div
      className="flex-1 overflow-y-auto"
      style={{ minHeight: "calc(92vh - 8vh)" }}
    >
      {loading ? (
        <Loading />
      ) : (
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMsgRef}>
            <Message message={message} />
          </div>
        ))
      )}

      {!loading && messages.length === 0 && (
        <div className="text-center mt-[20%]">
          Say hi to start your amazing conversation..
        </div>
      )}
    </div>
  );
}

export default Messages;
