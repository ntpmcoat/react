import React from 'react'

export default function Home() {
     let s = "/portfolio/public/utility/passport.jpeg"
     return (

          <section id="home" className="flex s-around sw-80 m-auto">
               <div className="home-left flex items-center">
                    <div className="home-content">
                         <h6 className="poppinss">Hi, I'm</h6>
                         <h1 className="t-white">Nikhil Mishra</h1>
                         <h4 className="poppinss">Frontend Web Developer,Java developer and data analyst</h4>
                         <a href="https://drive.google.com/file/d/1CXvFLzmbGmA6oSaqaOzPmLzvwWAwPBer/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                              <button className="btn poppins">Resume</button></a>
                         <a className="btn live poppins" id="hireme" href="https://www.linkedin.com/in/nikhil-mishra-7a6bba259" rel="noopener noreferrer" target="_blank">Let's Talk</a>
                    </div>
               </div>
               <div className="home-right flex s-center items-center">
                    <div className="circle flex s-center items-center" id="mainImage">
                         <img  src={s}  alt="xxxxxxxxxx" />
                    </div>

               </div>
          </section>

     )
}
