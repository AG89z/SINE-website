import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
  bannerImage: {
    width: "100vw",
  },
})

export default () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/sine banner 1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <Img
        className={classes.bannerImage}
        fluid={data.file.childImageSharp.fluid}
        alt="Sine banner 1"
      />
    </div>
  )
}
