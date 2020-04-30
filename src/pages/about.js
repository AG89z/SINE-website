import React from "react"

import Layout from "../components/layout/Layout"

import "../style/textPage.css"
import "../style/about.css"

import Img from "gatsby-image"
import { graphql } from "gatsby"

export default ({ data }) => {
  return (
    <Layout>
      <div className="container">
        <div className="content">
          <h1>About</h1>
          <p>
            My name is Alberto Giachino. After a degree in Urban Planning I
            discovered a passion for programming which turned into a job in the
            3D printing industry. I kept an interest in design and in particular
            parametric design, which is at the crossroad of the two worlds.
            S-I-N-E is a way to show the projects that come from this interest.
            In the free time I write about digital manufacturing in my blog{" "}
            <a href="http://www.codeplastic.com">codeplastic.com</a>.
          </p>
          <Img className="image" fluid={data.file.childImageSharp.fluid} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "images/profile-2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
