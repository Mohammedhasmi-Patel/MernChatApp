import { useState } from "react";
import useConversation from "../Zustand/useConversation";
import axios from "axios";

function useSendMessage() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessage, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("jwt");

      const response = await axios.post(
        `/api/message/send/${selectedConversation._id}`,
        { message },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLoading(false);
      setMessage([...messages, response.data]);
    } catch (error) {
      console.log(`error on useSendMessage ${error}`);
    }
  };

  return { loading, sendMessage };
}

export default useSendMessage;
