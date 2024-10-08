import useGetAllUsers from "../../Context/useGetAllUsers";
import User from "./User";

function Users() {
  const [allUsers, loading] = useGetAllUsers();
  console.log(allUsers);
  return (
    <div>
      <h1 className="px-8 py-2 text-white font-semibold bg-slate-600 rounded-md mx-2">
        Mesasges
      </h1>
      <div
        className=" py-2 flex-1 overflow-y-auto"
        style={{ maxHeight: "calc(84vh - 10vh)" }}
      >
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </div>
  );
}

export default Users;
