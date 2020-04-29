import React from "react"
import Img from "gatsby-image"
// @ts-ignore
import styles from "./productCard.module.css"

export default ({ fluid, onClick }) => {
  return (
    <div className={styles.productCard} onClick={onClick}>
      <Img fluid={fluid} />
    </div>
  )
}
