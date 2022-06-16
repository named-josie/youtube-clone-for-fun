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
      <MenuIcon />
      <img
        className='logo'
        src='https://www.citypng.com/public/uploads/small/51609620783uc927um4fsecn8ujdlnfdqe6vno4kjnxyb3hyv3yatqwsg5kyuwz5ukduz8anllw7azyduy8fpjih9hzg2u61lt84vn1iqhzfb55.png'
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
      src='https://i.pinimg.com/originals/0f/e8/8f/0fe88f5ec14560e515ff42350b254c69.png' alt='RICK' />
      </div>
    </div>
  );
}
