import React, { useState } from "react"
import Img from "gatsby-image"

// @ts-ignore
import styles from "./productDialog.module.css"

export default ({ product }) => {
  const { name, code, description, thumbnail, images, price } = product

  const [imgFluid, setImgFluid] = useState(thumbnail.childImageSharp.fluid)

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{`${name} ${code}`}</h3>
      <div className={styles.checkout}>
        <div className={styles.description}>
          <p>{`Name: ${name}`}</p>
          <p>{`Code: ${code}`}</p>
          <p>{`Price: ${price} EUR`}</p>
        </div>
        <button
          className={`${styles.buyButton} snipcart-add-item buyBtn`}
          data-item-id={code}
          data-item-price={price}
          data-item-image={thumbnail.childImageSharp.fluid.src}
          data-item-name={name}
          data-item-description={description}
          data-item-url={"localhost:8000/shop"}
        >
          Add to cart
        </button>
      </div>
      <div className={styles.preview}>
        {images.map((img, idx) => (
          <div
            className={styles.previewImg}
            onClick={() => setImgFluid(img.childImageSharp.fluid)}
          >
            <Img key={idx} fluid={img.childImageSharp.fluid} />
          </div>
        ))}
      </div>
      <div className={styles.bigImage}>
        <div className={styles.bigImageImg}>
          <Img fluid={imgFluid} />
        </div>
      </div>
    </div>
  )
}
