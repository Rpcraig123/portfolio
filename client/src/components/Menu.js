import React from 'react'

export default function Menu(props) {
  return (
    <div className={"menu " + (props.menuOpen && "active1")}>
      <ul>
        <li onClick={()=>props.setMenuOpen(false)}>
          <a href="#intro">Introduction</a>
        </li>
        <li onClick={()=>props.setMenuOpen(false)}>
          <a href="#projects">Projects</a>
        </li>
        <li onClick={()=>props.setMenuOpen(false)}>
          <a href="#contact">Contact Info</a>
        </li>
        <li onClick={()=>props.setMenuOpen(false)}>
          <a href="https://drive.google.com/file/d/1vaHpVviMyryVGPDGgw1fMp--xAurdvAV/view?usp=sharing">Resume</a>
        </li>
      </ul>
    </div>
  )
}
