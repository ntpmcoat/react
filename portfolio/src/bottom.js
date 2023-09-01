import React from 'react'

export default function Bottom() {
  return (
    <>
  <section id="bottom">
    <div className="bottom-nav flex s-center items-center">
      <ul className="flex s-around items-center">
        <a href="#home">
          <li className="bottomo-hover flex s-center items-center"><i className="fa-solid fa-house"></i></li>
        </a>
        <a href="#about">
          <li className="bottomo-hover flex s-center items-center"><i className="fa-solid fa-user"></i></li>
        </a>
        <a href="#skills">
          <li className="bottomo-hover flex s-center items-center"><i className="fa-solid fa-code"></i></li>
        </a>
        <a href="#services">
          <li className="bottomo-hover flex s-center items-center">
            <i className="fa-solid fa-rocket"></i>
          </li>
        </a>
      </ul>
    </div>
  </section>
    </>
  )
}
