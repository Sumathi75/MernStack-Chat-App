import { useAuthContext } from "../../context/AuthContext";

const Profile = () => {
    const { authUser } = useAuthContext();
  
  return (
    <div className="flex items-center gap-4 p-4  rounded-md">
    <div className="w-16 h-16">
      <img
        src={authUser.profilePic}
        alt="Profile Avatar"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
    <div>
      <h1 className="text-2xl text-gray-300 font-bold">{authUser.fullName}</h1>
      <p className="text-sm text-green-500">Available</p>
    </div>
  </div>  
          )
}

export default Profile