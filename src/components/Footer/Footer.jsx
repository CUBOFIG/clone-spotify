import React from 'react'
import {
  PlayCircleOutline, SkipPrevious, SkipNext, Shuffle, Repeat, PlaylistPlay, VolumeDown
} from '@material-ui/icons'
import { Slider, Grid } from '@material-ui/core'
import './Footer.scss'


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <img className="footer-imglogo" src="https://image.freepik.com/vector-gratis/album-musica-electro_53876-67225.jpg" alt="logo" />
        <div className="footer-songinfo">
          <h4>No song is Playing</h4>
          <p>...</p>
        </div>
      </div>
      <div className="footer-center">
        <Shuffle className="footer-green" />
        <SkipPrevious className="footer-icon" />
        <PlayCircleOutline fontSize="large" className="footer-icon" />
        <SkipNext className="footer-icon" />
        <Repeat className="footer-green" />
      </div>
      <div className="footer-right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer;
