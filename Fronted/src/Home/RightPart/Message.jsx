function Message({ message }) {
  const authUser = JSON.parse(localStorage.getItem("chatApp"));
  const itsMe = message.senderId === authUser.user._id;

  const chatName = itsMe ? "chat-end" : "chat-start";
  const chatColor = itsMe ? "bg-blue-500" : "";

  const createdAt = new Date(message.createdAt);
  const isValidDate = !isNaN(createdAt.getTime());

  const formattedTime = isValidDate
    ? createdAt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    : "Sending...";

  return (
    <div>
      <div className="p-4">
        <div className={`chat ${chatName}`}>
          <div className={`chat-bubble text-white ${chatColor}`}>
            {message.message}
          </div>
          <div className="chat-footer">{formattedTime}</div>
        </div>
      </div>
    </div>
  );
}

export default Message;
