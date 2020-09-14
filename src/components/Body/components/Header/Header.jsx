import React from 'react'
import { Search } from '@material-ui/icons'
import { Avatar } from '@material-ui/core'
import { useDataLayerValue } from '../../../../DataLayer'
import './Header.scss'

const Header = ({ spotify }) => {

  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="header">
      <div className="header-left">
        <Search />
        <input
          placeholder='Search for Artists, Songs or Podcasts'
          type='text' />
      </div>
      <div className="header-right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}

export default Header
