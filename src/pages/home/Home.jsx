import React from 'react'
import Profile from "../../assets/home.jpg"
import { Link } from 'react-router-dom'
import {FaArrowRight } from "react-icons/fa"
import "./Home.css"

function Home() {
  return (
    <section className='home section grid'>
      <img src={Profile} alt="" className='home__img' />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Egemen Kurt.</span> Front-End Web Developer
          </h1>
          <p className="home__description">
            Hello, I am Front-End Web Developer. I really enjoy what I'm doing.
            I'm focusing on crafting clean and user-friendly websites. I am passionate about building
            exellent software that makes peoples life easier. I'm curious about learning more usefull things in development.
          </p>

          <Link to='/about' className='button'>
            More About Me 
            <span className='button__icon'>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  )
}

export default Home