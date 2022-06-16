
import React from 'react'
import "./sidebar.css";
import SidebarRow from "./SidebarRow";






export default function Sidebar() {
    return (
      <div className='sidebar'>
      <SidebarRow  title="Home"/>
      <SidebarRow  title="Trending"/>
      <SidebarRow  title="Subscription"/>
      <hr/>
      <SidebarRow  title="Library"/>
      <SidebarRow  title="History"/>
      <SidebarRow  title="Your videos"/>
      <SidebarRow  title="Watch later"/>
      <SidebarRow  title="Liked videos"/>
      <SidebarRow  title="Show more"/>
      <hr/>
      </div>
    );
  };