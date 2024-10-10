import React, { useEffect } from "react";
import { useSocketContext } from "./SocketContext";
import useConversation from "../Zustand/useConversation.js";
import sound from "../../src/assets/sound.mp3";

function useGetSocketMessage() {
  const { socket } = useSocketContext();
  const { messages, setMessage } = useConversation();

  useEffect(() => {
    socket.on("newMessage", (newMessage) => {
      const notification = new Audio(sound);
      notification.play();

      setMessage([...messages, newMessage]);
    });
    return () => {
      socket.off("newMessage");
    };
  }, [socket, messages, setMessage]);

  return <div></div>;
}

export default useGetSocketMessage;
