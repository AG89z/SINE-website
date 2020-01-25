import React from "react"

import Carousel from "../components/carousel/Carousel"

import "../style/index.css"

import img1 from "../data/images/sine banner 1.png"
import img2 from "../data/images/sine banner 2.jpg"

import logo from "../data/images/SINE logo.svg"

export default () => {
  return (
    <>
      <div className="home-landing">
        <div className="home-logo-area">
          <img id="logo" alt="SINE logo" src={logo} />
        </div>
        <Carousel className="home-carousel">
          <img className="home-carousel-img" alt="SINE studio 1" src={img1} />
          <img className="home-carousel-img" alt="SINE studio 2" src={img2} />
        </Carousel>
        <div className="home-links-area">
          <a href="shop">SHOP</a>
          <a href="/bespoken">BESPOKEN DESIGNS</a>
          <a href="/about">ABOUT</a>
        </div>
      </div>
    </>
  )
}
