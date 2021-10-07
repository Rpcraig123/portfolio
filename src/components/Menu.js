import React from 'react'

export default function Menu(props) {
  return (
    <div className={"menu " + (props.menuOpen && "active1")}>
      <ul id="menu-list">
        <li onClick={()=>props.setMenuOpen(false)}>
          <a href="#intro">Introduction</a>
        </li>
        <li onClick={()=>props.setMenuOpen(false)}>
          <a href="#aboutme">About Me</a>
        </li>
        <li onClick={()=>props.setMenuOpen(false)}>
          <a href="#projects">Projects</a>
        </li>
        <li onClick={()=>props.setMenuOpen(false)}>
          <a href="#contact">Contact Info</a>
        </li>
      </ul>
    </div>
  )
}
