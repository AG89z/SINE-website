import React, { useState, useEffect } from "react"

// @ts-ignore
import styles from "../carousel/carousel.module.css"

/**
 * @param {{children: any, className?: string}} param0
 */
export const Carousel = ({ children, className }) => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const next = (current + 1) % children.length
    const id = setTimeout(() => setCurrent(next), 5000)
    return () => clearTimeout(id)
  }, [current])

  return (
    <div className={className}>
      <div className={styles.container}>
        {children.map((child, idx) => (
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
