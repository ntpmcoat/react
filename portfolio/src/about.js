import React from 'react'

export default function About() {
     // let s ={width: "50%",  }
  return (
  
  <section id="about">
    <h1 className="t-center my-2 t-white f-2">About Me</h1>
    <div className="about-container flex s-around ">
      <div className=" about-left flex s-center items-center">
        {/* <img src=" " alt="" style={s}/> */}
      </div>

      <div className="about-right flex">
        <div className="about-content">
          <h1 className="t-white m-b-1 poppins">Nikhil Mishra</h1>
          <p className="t-white poppins">A self-tought Frontend Web Developer(using HTML5, CSS, js), Backend developer
            (using java) BCA student seeking opportunities that leverage my skills in java and python for data analysis,
            alongside my proficiency in web development(HTML5, CSS, JS) <br/>
            Mindset to fullfill the life with
            wonderful memories and knowledge.</p>
          <a className="btn live poppins" id="hireme" href="https://www.linkedin.com/in/nikhil-

mishra-7a6bba259">Hire Me</a>
        </div>
      </div>

    </div>
  </section>
   
  )
}
