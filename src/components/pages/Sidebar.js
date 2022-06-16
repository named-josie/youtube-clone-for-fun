
import React from 'react'
import "./sidebar.css";
import SidebarRow from "./SidebarRow";






export default function Sidebar() {
    return (
      <div className='sidebar'>
      <SidebarRow  title="Home"/>
      <SidebarRow  title="Trending"/>
      <SidebarRow  title="Subscription"/>
      <SidebarRow/>
      <SidebarRow/>
      <SidebarRow/>
      <SidebarRow/>
      <SidebarRow/>
      <SidebarRow/>
      
      
      
      </div>
    );
  };