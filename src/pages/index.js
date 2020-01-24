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
        <Carousel>
          <img alt="SINE studio 1" src={img1} />
          <img alt="SINE studio 2" src={img2} />
        </Carousel>
      </div>
      <div className="home-info">
        <div className="home-logo-area">
          <img id="logo" alt="SINE logo" src={logo} />
        </div>
        <div className="home-links-area">
          <a href="shop">SHOP</a>
          <a href="/">BESPOKEN DESIGNS</a>
          <a href="/">ABOUT</a>
        </div>
      </div>
    </>
  )
}
