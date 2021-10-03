import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Topbar(props) {
  return (
    <div className= {"topbar " + (props.menuOpen && "active")} >
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Portfolio</a>
          <div className="itemContainer">
            <LocationOnIcon className="icon"/>
            <span>Houston, TX</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon"/>
            <span>Ryanpcraig1@gmail.com</span>
          </div>
          <div className="itemContainer">
            <LinkedInIcon className="icon"/>
            <span>https://www.linkedin.com/in/ryancraigeit/</span>
          </div>
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
