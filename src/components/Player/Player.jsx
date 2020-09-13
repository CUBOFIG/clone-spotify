import React from 'react'
import Body from '../Body/Body'
import Sidebar from '../Sidebar/Sidebar'
import './Player.scss'

const Player = ({ spotify }) => {
  return (
    <div>
      <div className="player_body">
        <Sidebar />
        {/* SIDEBAR */}
        <Body />
        {/* BODY */}
      </div>
      {/* FOOTER */}
    </div>
  )
}

export default Player;
