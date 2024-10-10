import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useGetAllUsers from "../../Context/useGetAllUsers";
import useConversation from "../../Zustand/useConversation.js";

function Search() {
  const [search, setSearch] = useState("");
  const [allUsers] = useGetAllUsers();
  const { setSelectedConversation } = useConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    const conversation = allUsers.find(
      (user) => user.username.toLowerCase() === search.toLowerCase()
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      alert("User not found");
    }
  };
  return (
    <div className="h-[10vh]">
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
    </div>
  );
}

export default Search;
