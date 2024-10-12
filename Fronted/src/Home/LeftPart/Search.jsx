import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import useGetAllUsers from "../../Context/useGetAllUsers";
import useConversation from "../../Zustand/useConversation.js";

function Search() {
  const [search, setSearch] = useState("");
  const [allUsers] = useGetAllUsers();
  const { setSelectedConversation } = useConversation();
  const [showPopup, setShowPopup] = useState(false); // State for showing popup

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    const conversation = allUsers.find((user) =>
      user.fullname?.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      setShowPopup(true); // Show the popup when user is not found
      setSearch("");
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
      <div className="px-6 py-4">
        <form onSubmit={handleSubmit}>
          <div className="flex space-x-3">
            <label className="border-gray-700 input input-bordered flex items-center gap-2 w-[80%] border-[1px] rounded-lg p-3">
              <input
                type="text"
                className="grow outline-none bg-transparent"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
            <button>
              <FaSearch className="text-5xl p-2 hover:bg-gray-500 hover:rounded-full duration-300" />
            </button>
          </div>
        </form>
      </div>

      {/* Popup Notification */}
      {showPopup && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-red-500 text-white py-2 px-4 rounded-lg">
          User not found
        </div>
      )}
    </div>
  );
}

export default Search;
