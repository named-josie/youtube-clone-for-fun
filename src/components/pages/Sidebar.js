
import React from 'react'
import "./sidebar.css";
import SidebarRow from "./SidebarRow";
import { BrowserRouter as  Routes, Route } from 'react-router-dom';





export default function Sidebar() {
    return (
      <div className='sidebar'>
     <Routes>
     {/* <Route path="/" element={<SidebarRow  title="Home"/>} /> */}
   <SidebarRow  title="Home"/>
      <SidebarRow  title="Explore"/>
      <SidebarRow  title="Subscriptions"/>
      <SidebarRow  title="Originals"/>
      <SidebarRow  title="YouTube Music"/>
      <hr/>
      <SidebarRow  title="Library"/>
      <SidebarRow  title="History"/>
      <SidebarRow  title="Your videos"/>
      <SidebarRow  title="Watch later"/>
      <SidebarRow  title="Downloads"/>
      <SidebarRow  title="Your clips"/>
      <SidebarRow  title="Show more"/>
      <hr/>
      </Routes>
      </div>
    );
  };