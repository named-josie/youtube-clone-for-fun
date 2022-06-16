import './sidebarRow.css';

 function SidebarRow({ selected, title, Icon }) {
  return (
    <div className= {`sidebarRow ${selected} && selected`}>
      {/* < Icon className={`sidebarIcon ${selected}` && 'selected'} /> */}
      <h2 className='sidebar-title'>{title}</h2>
    </div>
  );
}
export default SidebarRow