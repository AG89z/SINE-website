import React from "react"

import Carousel from "../components/carousel/Carousel"

import "../style/style.css"

import img1 from "../data/images/sine banner 1.png"
import img2 from "../data/images/sine banner 2.jpg"


export default () => {
  return (
    <div style={{height: "100vh"}}>
      <Carousel>
        <img src={img1} />
        <img src={img2} />
      </Carousel>
    </div>
  )
}
