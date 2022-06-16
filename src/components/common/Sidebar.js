
import React from 'react'
import "./sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";





export default function Sidebar() {
    return (
      <div className='sidebar'>
      <SidebarRow Icon={HomeIcon} title="Home"/>
      <SidebarRow Icon={WhatshotIcon} title="Trending"/>
      <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
      <SidebarRow/>
      <SidebarRow/>
      <SidebarRow/>
      <SidebarRow/>
      <SidebarRow/>
      <SidebarRow/>
      
      
      
      </div>
    );
  };