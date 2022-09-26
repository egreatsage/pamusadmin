
import { IconButton,Tooltip } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {AiFillSetting} from 'react-icons/ai'
import './App.css'; 
import Dashboard from './componets/Dashboard';
import {AdminProfile,Footer,Sidebar,Navbar} from './componets'
import {Bookings,Employees,Home,Messages,Rooms} from './Pages'
function App() {

  const activeMenu = false;

  return (
    <div>
    <BrowserRouter>
       <div className='flex relative bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4
          'style={{zIndex:'1000'}}>
            <Tooltip title='Settings'placement='top' >
              <IconButton className='text-3xl p-3 hover:drop-shadow-xl
              hover:bg-light-gray text-white'>
                  <AiFillSetting/>
              </IconButton>
            </Tooltip>
          </div>
          {activeMenu ? (
            <div className='w-72 sidebar fixed dark:bg-secondary-dark-bg
            bg-white'>
             <Sidebar/>
            </div>
          ) : ( 
            <div className='w-0 dark:bg-secondary-dark-bg'>
             <Sidebar/>
            </div>
          )}
          <div className={` dark:bg-main-bg bg-main-bg min-h-screen
          w-full ${activeMenu ? 'mid:ml-72' : 'flex-2'}`   
          }>
         <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg
         navbar w-full'>
           <Navbar/>
         </div>
          </div>
          <div>
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/Bookings" element={<Bookings/>}/>
              <Route path="/Messages" element={<Messages/>}/>
              <Route path="/Employees" element={<Employees/>}/>
              <Route path="/Rooms" element={<Rooms/>}/>
            </Routes>
          </div>
       </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
