import React from 'react'
import img from '../../img/IMG-0.png'
import SidebarOption from './components/SidebarOption/SidebarOption'
import { Home, Search, LibraryMusic } from '@material-ui/icons';
import { useDataLayerValue } from '../../DataLayer';
import './Sidebar.scss'


const Sidebar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img className="sidebar-logo" src={img} alt="logo" />

      <SidebarOption Icon={Home} title="Home" />
      <SidebarOption Icon={Search} title="Search" />
      <SidebarOption Icon={LibraryMusic} title="Your Library" />
      <br />

      <strong className="sidebar-title">PLAYLISTS</strong>
      <SidebarOption title="Crear Playlist" />
      <SidebarOption title="Canciones que te gustan" />
      <hr />



      {playlists?.items?.map(playlist => (
        <SidebarOption title={playlist.name} />
      ))}

      <SidebarOption title="Rock" />
      <SidebarOption title="K-Pop" />

    </div >
  )
}

export default Sidebar;
