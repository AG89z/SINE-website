import React from "react"

// @ts-ignore
import styles from "./modal.module.css"

export default ({ open, onClose, children }) => {
  const escFunction = e => {
    if (e.keyCode === 27) {
      onClose()
    }
  }

  React.useEffect(() => {
    document.addEventListener("keydown", escFunction, false)

    return () => {
      document.removeEventListener("keydown", escFunction, false)
    }
  }, [])

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto"
  }, [open])

  return (
    <div
      className={styles.modal}
      style={{
        display: open ? "block" : "none",
      }}
    >
      <div
        id="modal"
        className={styles.content}
        onClick={e => {
          if (e.target["id"] == "modal") onClose()
        }}
      >
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  )
}
