import React, { useState, useEffect } from "react"

import styles from "../carousel/carousel.module.css"

export const Carousel = props => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const next = (current + 1) % props.children.length
    const id = setTimeout(() => setCurrent(next), 5000)
    return () => clearTimeout(id)
  }, [current])

  return (
    <div className={props.className}>
      <div className={styles.container}>
        {props.children.map((child, idx) => (
          <div
            key={idx}
            className={styles.carouselElement}
            style={{ opacity: idx === current ? "0" : "1" }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
