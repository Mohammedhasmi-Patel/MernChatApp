import Message from "./Message";
import useGetMessage from "../../Context/useGetMessage";
import Loading from "../../Components/Loading";

function Messages() {
  const { loading, messages } = useGetMessage();
  console.log(`in Messages component `);
  console.log(messages);

  return (
    <div
      className="flex-1 overflow-y-auto"
      style={{ minHeight: "calc(92vh - 8vh)" }}
    >
      {loading ? (
        <Loading />
      ) : (
        messages.length > 0 &&
        messages.map((message) => {
          return <Message key={message._id} message={message} />;
        })
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
