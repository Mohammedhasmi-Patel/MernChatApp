import axios from "axios";
import React, { useState } from "react";
import { RiLogoutCircleLine } from "react-icons/ri";
import Cookies from "js-cookie";

function Logout() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await axios.post("/api/user/logout");
      localStorage.removeItem("chatApp");
      Cookies.remove("jwt");
      setLoading(false);
      alert("logout sucessfully...");
      window.location.reload();
    } catch (error) {
      console.log(`error occured in handleLogout function ${error}`);
    }
  };

  return (
    <div className="h-[10vh]">
      <div>
        <RiLogoutCircleLine
          onClick={handleLogout}
          className="text-5xl text-white hover:bg-slate-600 duration-300 cursor-pointer rounded-full p-2 ml-2 mt-1"
        />
      </div>
    </div>
  );
}

export default Logout;
