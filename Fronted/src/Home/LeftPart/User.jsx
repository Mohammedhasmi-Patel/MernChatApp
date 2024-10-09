import useConversation from "../../Zustand/useConversation.js";

function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === user._id;

  const { fullname, email } = user;
  return (
    <div
      className={`hover:bg-slate-600 duration-300 ${
        isSelected ? "bg-slate-800" : ""
      }`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="flex space-x-6 px-8 py-3 hover:bg-gray-700 duration-300 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div>
          <h1 className="font-bold  ">{fullname}</h1>
          <span>{email}</span>
        </div>
      </div>
    </div>
  );
}

export default User;
