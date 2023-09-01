import React from 'react'

function scrolltop() {
     window.location.href = '#home';
 }
export default function Footer() {
     
  return (
   <>
   
  <footer id="footer">
    <ul className="flex s-center w-80 m-auto my-2 res">
      <li><a href="#home" className="poppinss">Home</a></li>
      <li><a href="#about" className="poppinss">About</a></li>
      <li><a href="#skills" className="poppinss">Skills</a></li>
      <li><a href="#projects" className="poppinss">Projects</a></li>
      <li><a href="#portfolio" className="poppinss">Portfolio</a></li>
    </ul>
    <ul className="flex s-center w-80 font-awesome ">
      <a href="https://www.linkedin.com/in/nikhil-mishra-7a6bba259" target="_blank" rel="noopener noreferrer">
        <li><i className="fa-brands fa-linkedin-in"></i></li>
      </a>
      <a href="https://github.com/ntpmcoat" target="_blank" rel="noopener noreferrer">
        <li><i className="fa-brands fa-github"></i></li>
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <li><i className="fa-brands fa-instagram"></i></li>
      </a>

    </ul>
    <p className="t-center my-2 poppins">&copy; All Rights Reserved - <span className="cpy-white poppins">Nikhil Mishra</span>
    </p>

  </footer>

  <div id="scroll-top" onClick={scrolltop}>
    <span><i className="fa-solid fa-arrow-up"></i></span>
  </div>
   </>
  )
}
