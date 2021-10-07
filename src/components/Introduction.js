import React from 'react'
import { init } from "ityped";
import { useEffect, useRef } from 'react'

export default function Introduction() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Software Engineer", "Mechanical Engineer", "Full-Stack Web Developer", "Content Creator"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left" id="intro-image">
        <div className="imgContainer">
          <img src="assets/Intro4.gif" alt="" />
        </div>
      </div>
      <div className="right" id="intro-right">
        <div className="intro-wrapper" id="intro-wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Ryan Craig</h1>
          <h3><span ref={textRef}></span></h3>
        </div>
      </div>
    </div>
  )
}
