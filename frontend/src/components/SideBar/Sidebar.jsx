import Conversations from "./Conversations";
import Profile from "./Profile";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500  pl-0 flex flex-col ">
      <Profile />
      <SearchInput />
      <div className="divider px-3 "></div>
      <div className="flex justify-evenly m-3 text-gray-200 text-lg gap-14">
        <p className="underline hover:text-blue-400  ">All</p>
        <p>Group</p>
      </div>
      <Conversations />
    </div>
  );
};

export default Sidebar;
