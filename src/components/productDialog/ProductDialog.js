import React, { useState } from "react"
import Img from "gatsby-image"

// @ts-ignore
import styles from "./productDialog.module.css"

export default ({ product }) => {
  const {
    name,
    code,
    description,
    thumbnail,
    images,
    price,
    formats,
    dimensions,
  } = product

  const [imgFluid, setImgFluid] = useState(thumbnail.childImageSharp.fluid)

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{name}</h3>
      <div className={styles.checkout}>
        <div className={styles.description}>
          <p>{`Dimensions (resizable): ${dimensions}`}</p>
          <p>{`Download formats: ${formats}`}</p>
          <p className={styles.price}>{`Price: ${price} EUR`}</p>
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
