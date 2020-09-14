import React from 'react'
import './Body.scss'
import Header from './components/Header/Header'
import { useDataLayerValue } from '../../DataLayer'

const Body = ({ spotify }) => {

  const [{ discover_weekly }, dispatch] = useDataLayerValue()

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body-info">
        <img
          src={discover_weekly?.images[0].url}
          alt="" />
        <div className="body-infotext">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Body;
