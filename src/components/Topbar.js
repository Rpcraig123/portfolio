import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Topbar(props) {
  return (
    <div className= {"topbar " + (props.menuOpen && "active")} >
      <div className="wrapper">
        <div className="left">
          <a href="#intro" id="title-text" className="logo">Ryan's Portfolio</a>
          <div className="itemContainer" id="address">
            <LocationOnIcon className="icon"/>
            <span>Houston, TX</span>
          </div>
          <div className="itemContainer" id="email">
            <MailIcon className="icon"/>
            <span>Ryanpcraig1@gmail.com</span>
          </div>
          <a href="https://www.linkedin.com/in/ryancraigeit/" className="logo">
          <div className="itemContainer" id="linkedin">
            <LinkedInIcon className="icon"/>
            <span>LinkedIn</span>
          </div>
          </a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>props.setMenuOpen(!props.menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
