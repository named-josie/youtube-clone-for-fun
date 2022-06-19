import React from 'react';
import './Header.css'
import MenuIcon from '@mui/icons-material/MenuSharp';
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall"
import AppsIcon from "@mui/icons-material/Apps"
import  NotificationsIcon  from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';

export default function Header() {
  return (
    <div className='header'>
      <div className='header-left'>
      <MenuIcon className='menu-icon' />
      <img
        className='logo'
        src='https://www.citypng.com/public/uploads/preview/-51609605598ayjq9eaidi.png'
        alt='youtube'
      />
      </div>
      <div className='input-container'>
      <input type="text" placeholder='Search' />
      <SearchIcon className='input-button' />
      </div>
      <div className='special-icons'>
      <VideoCallIcon className='iconic'/>
      <AppsIcon className='iconic'/>
      <NotificationsIcon className='iconic'/>
      <Avatar 
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTg6Q04yDlYkuGUoyxui_kxISq6xI233mtpA&usqp=CAU' alt='RICK' />
      </div>
    </div>
  );
}
