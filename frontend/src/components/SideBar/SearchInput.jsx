import { useState } from "react";
import { TbMessageCircleSearch } from "react-icons/tb";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState(""); 
  const {setSelectedConversation} = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      return
    }
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long")
    }

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch('');
    }
    else{
      toast.error("No result");
    }
  }


  return (
    <form className='flex items-center gap-2 pl-3 pt-3' onSubmit={handleSubmit}>
      <div className='flex input input-bordered rounded-full mr-2'>
        <input type="text" placeholder='Search' 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit' className='text-white '>
        <TbMessageCircleSearch className="w-7 h-7 "/>
        </button>
        </div>
    </form>
  )
}

export default SearchInput