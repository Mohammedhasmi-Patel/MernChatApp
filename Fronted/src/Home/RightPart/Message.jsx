function Message({ message }) {
  console.log("Message received:", message); // Check if the message is received

  return (
    <div>
      <div className="p-4">
        <div className="chat chat-end">
          <div className="chat-bubble text-white chat-bubble-info">
            {message.message}
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-warning">
            To be on the Council at your age.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
