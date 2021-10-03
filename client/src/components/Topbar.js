import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

export default function Topbar(props) {
  return (
    <div className= {"topbar " + (props.menuOpen && "active")} >
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">genius.</a>
          <div className="itemContainer">
            <PhoneIcon className="icon"/>
            <span>(281) 408-0338</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon"/>
            <span>Ryanpcraig1@gmail.com</span>
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
