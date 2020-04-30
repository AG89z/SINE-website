import React from "react"

import Carousel from "../components/carousel/Carousel"

import "../style/index.css"

import Img from "gatsby-image"
import { graphql } from "gatsby"

// @ts-ignore
import logo from "../data/images/SINE logo.svg"

export default ({ data }) => {
  return (
    <>
      <div className="home-landing">
        <div className="home-logo-area">
          <img id="logo" alt="SINE logo" src={logo} />
        </div>
        <Carousel className="home-carousel">
          <Img
            fluid={data.banner1.childImageSharp.fluid}
            alt="SINE studio 1"
            className="home-carousel-img"
          />
          <Img
            fluid={data.banner2.childImageSharp.fluid}
            alt="SINE studio 1"
            className="home-carousel-img"
          />
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

export const query = graphql`
  query {
    banner1: file(relativePath: { eq: "images/sine banner 1.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    banner2: file(relativePath: { eq: "images/sine banner 2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
