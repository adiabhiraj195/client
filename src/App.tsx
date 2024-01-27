import Profile from "./sections/profile";
import Base from "./sections/base";
import Navigation from "./sections/navigation";
import { LuDownload } from "react-icons/lu";

function App() {
  return (
    <div className="App flex justify-between h-full pl-2 pr-2">
      {/* <div className="App grid grid-cols justify-around h-full pl-2 pr-2"> */}
      <video className='fixed w-full h-full left-0 top-0 -z-10 object-cover' loop autoPlay muted>
        <source src="https://wpriverthemes.com/drake/wp-content/themes/drake/assets/images/video1.mp4" type='video/mp4'></source>
      </video>
      <div className="w-fit min-h-screen max-h-screen h-screen ">
        {/* <div className="w-fit min-h-screen max-h-screen h-screen top-0 fixed left-0 bg-pink-300"> */}
        <Profile />
      </div>

      <div className=" w-fit">
        <Base />
      </div>

      <div className="w-fit min-h-screen max-h-screen flex flex-col items-center relative justify-center ">
        <div className='absolute text-white top-0 border rounded-full border-gray-400 p-2 mt-8 mr-7 '>
          <a href="https://drive.google.com/file/d/17UtCUA4sarevmJuezY2DdINs8ZqVgr9N/view?usp=drive_link" download target='_blank' className="" >
            <LuDownload />
          </a>
        </div>
        {/* <div className="w-fit fixed right-0 top-0 min-h-screen max-h-screen flex items-center bg-yellow-300"> */}
        <Navigation />
      </div>
    </div>
  );
}

export default App;
