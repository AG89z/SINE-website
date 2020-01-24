import React from "react"
import Img from "gatsby-image"

import styles from "./productDialog.module.css"

export default ({ product }) => {
  const { name, code, description, image, price } = product

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{`${name} ${code}`}</h3>
      <Img className={styles.image} fluid={image.childImageSharp.fluid} />
      <button
        className={`${styles.buyButton} snipcart-add-item buyBtn`}
        // className="snipcart-add-item buyBtn"
        data-item-id={code}
        data-item-price={price}
        data-item-image={image.childImageSharp.fluid.src}
        data-item-name={name}
        data-item-description={description}
        data-item-url={"localhost:8000/shop"}
      >
        Buy
      </button>
    </div>
  )
}
