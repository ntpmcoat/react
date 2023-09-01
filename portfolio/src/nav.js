import React from 'react'

export default function Nav() {
  return (
     <>
  <nav id="navbar" className="flex s-around bg-color">
    <div className="nav">
      <ul className="flex">
        <li><a href="#home" className=" t-white   fa fa-house"> Home</a></li>
        <li><a href="#about" className=" t-white   fa fa-user"> About Me</a></li>
        <li><a href="#skills" className=" t-white   fa fa-code"> Skills</a></li>
        <li><a href="#services" className=" t-white   fa fa-rocket"> Services</a></li>
        <li><a href="#projects" className=" t-white   fa fa-layer-group"> Projects</a></li>
      </ul>
    </div>
  </nav>

  </>

  )
}
