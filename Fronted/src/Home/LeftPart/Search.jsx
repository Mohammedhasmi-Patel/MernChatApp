import React from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className="h-[10vh]">
      <div className="px-6 py-4">
        <form action="">
          <div className="flex space-x-3">
            <label className="border-gray-700 input input-bordered flex items-center gap-2 w-[80%] border-[1px] rounded-lg p-3">
              <input
                type="text"
                className="grow outline-none"
                placeholder="Search"
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
