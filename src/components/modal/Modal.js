import React from "react"

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
      style={{
        display: open ? "block" : "none",
        position: "fixed",
        zIndex: 1,
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        overflow: "auto",
        backgroundColor: "rgba(0,0,0,0.4)",
      }}
      onClick={e => {
        if (e.target.id == "modal") onClose()
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "5%",
        }}
      >
        {children}
      </div>
    </div>
  )
}
