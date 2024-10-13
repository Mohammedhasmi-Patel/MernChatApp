import { useEffect, useState } from "react";
import useConversation from "../Zustand/useConversation.js";
import axios from "axios";

function useGetMessage() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessage, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessage = async () => {
      setLoading(true);
      if (selectedConversation && selectedConversation._id) {
        try {
          const token = localStorage.getItem("jwt");
          const response = await axios.get(
            `/api/message/get/${selectedConversation._id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setLoading(false);
          setMessage(response.data);
        } catch (error) {
          console.log(`error on useGetMessage ${error}`);
        }
      }
    };
    getMessage();
  }, [selectedConversation, setMessage]);

  return { loading, messages };
}

export default useGetMessage;
