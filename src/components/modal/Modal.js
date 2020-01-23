import React from "react"

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
      id="modal"
      className={styles.modal}
      style={{
        display: open ? "block" : "none",
      }}
      onClick={e => {
        if (e.target.id == "modal") onClose()
      }}
    >
      <div className={styles.modalContent}>{children}</div>
    </div>
  )
}
