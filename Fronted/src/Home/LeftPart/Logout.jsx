import axios from "axios";
import React, { useState, useEffect } from "react";
import { RiLogoutCircleLine } from "react-icons/ri";
import Cookies from "js-cookie";

function Logout() {
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // State for showing popup

  const handleLogout = async () => {
    setLoading(true);
    try {
      await axios.post("/api/user/logout");
      localStorage.removeItem("chatApp");
      Cookies.remove("jwt");
      setLoading(false);
      setShowPopup(true); // Show popup on successful logout
      setTimeout(() => {
        window.location.reload();
      }, 1000); // Reload the page after 1 second
    } catch (error) {
      console.log(`error occurred in handleLogout function: ${error}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 1000); // Hide popup after 1 second
      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [showPopup]);

  return (
    <div className="h-[10vh] relative">
      <div>
        <RiLogoutCircleLine
          onClick={handleLogout}
          className="text-5xl text-white hover:bg-slate-600 duration-300 cursor-pointer rounded-full p-2 ml-2 mt-1"
        />
      </div>

      {/* Logout success popup */}
      {showPopup && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-red-500 text-white py-2 px-4 rounded-lg">
          Logout successfully...
        </div>
      )}
    </div>
  );
}

export default Logout;
