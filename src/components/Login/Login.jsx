import React from 'react'
import './Login.scss'
import { loginUrl } from '../Spotify/Spotify'

const Login = () => (
  <div className="login">
    <div className="login-settings">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="logo"
        className="logo"
      />
      <a href={loginUrl} className="button-login">Login with Spotify</a>
    </div>
  </div>
)

export default Login
