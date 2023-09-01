import React from 'react'

export default function Project() {
  return (

  <section id="projects">
    <h1 className=" t-center my-2 t-white f-2">Projects</h1>
    <div className="projects-container flex s-center">

      <div className="projects-item flex f-col s-center items-center">
        <div className="image-container p-one">
          <img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/422/213/datas/original.png"  width="300rem"  alt=""/>
        </div>
        <h1 className="t-white poppins">Web Scrapping</h1>
        <p className="t-white poppins">A web Scrapping app using python, flask with deployment using aws cloud. Also storing
          fetch data in mongoDB</p>
        <div className="buttons flex s-around">
          <a href="https://github.com/ntpmcoat/Web-scrapper-aws/tree/main" target="_blanks"
            className="btn mx-1 m-top">GitHub</a>
        </div>
      </div>


      <div className="projects-item flex f-col s-center items-center">
        <div className="image-container p-three">
          <img src=" https://cdn3.f-cdn.com//files/download/183544786/Screenshot_2022-11-18-23-58-47-03_40deb401b9ffe8e1df2f1cc5ba480b12.jpg?width=780&height=438&fit=crop " width="300rem" alt=""/>
        </div>
        <h1 className="t-white poppins">flipkart clone</h1>
        <p className="t-white poppins">Crafted a Flipkart-inspired experience by designing a responsive navbar and search bar using HTML and CSS.</p>
        <div className="buttons flex s-around">
          <a rel="noopener noreferrer" href="https://github.com/ntpmcoat/Flipkart-clone" target="_blank" className="btn mx-1 m-top">GitHub</a>
        </div>
      </div>

      <div className="projects-item flex f-col s-center items-center">
        <div className="image-container p-three">
          <img src="https://www.involve.me/img/containers/assets/blog/how-to-create-a-simple-price-calculator-and-capture-more-leads/calculator-L.png/1d337dac18fe9f13d53e02a92d7ff4cf.png " width="300rem" alt=""/>
        </div>
        <h1 className="t-white poppins">simple calculator</h1>
        <p className="t-white poppins">A simple calculator built with HTML and CSS, capable of performing fundamental arithmetic operations. Clean design and intuitive functionality for basic calculations.</p>
        <div className="buttons flex s-around">
          <a rel="noopener noreferrer" href="https://github.com/ntpmcoat/simple-cal" target="_blank" className="btn mx-1 m-top">GitHub</a>
        </div>
      </div>

    </div>
  </section>
  )
}
