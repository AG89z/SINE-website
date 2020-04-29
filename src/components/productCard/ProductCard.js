import React from "react"
import Img from "gatsby-image"
// @ts-ignore
import styles from "./productCard.module.css"

export default ({ fluid, name, price, onClick }) => {
  return (
    <div className={styles.productCard}>
      {/* <div className={styles.header}>
        <h3>{name}</h3>
        <p>{`${price} EUR`}</p>
      </div> */}
      <div className={styles.thumbnail} onClick={onClick}>
        <Img fluid={fluid} />
        <div className={styles.hover}>
          <div className={styles.description}>
            <p>{`${name}`}</p>
            {/* <p>{`${price} EUR`}</p> */}
          </div>
        </div>
      </div>
      {/* <div className={styles.action}>
        <button onClick={onClick}>View</button>
        <button>Add to cart</button>
      </div> */}
    </div>
  )
}
