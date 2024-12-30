import MessageContainer from '../components/messages/MessageContainer'
import Sidebar from '../components/SideBar/Sidebar'
import Iconbar from '../components/IconBar/Iconbar';

const HomePage = () => {
  return (
    <div className='flex w-full h-full justify-between overflow-hidden  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0  gap-2 '>
      <Iconbar />
      <Sidebar />
      <MessageContainer />

    </div>
  )
}

export default HomePage