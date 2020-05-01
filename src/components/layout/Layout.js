import React from "react"

import Helmet from "react-helmet"

// @ts-ignore
import logo from "../../data/images/SINE logo.svg"

// @ts-ignore
import styles from "./layout.module.css"

const Menu = ({ open, onClose, children }) => {
  React.useEffect(() => {
    const escFunction = e => {
      if (e.keyCode === 27) {
        onClose()
      }
    }
    document.addEventListener("keydown", escFunction, false)
    return () => {
      document.removeEventListener("keydown", escFunction, false)
    }
  }, [])

  return (
    <>
      <div
        id="menu"
        className={styles.menu}
        style={{ width: open ? "400px" : "0px" }}
      >
        {children}
      </div>
      <div
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "all" : "none",
        }}
        className={styles.menuOverlay}
        onClick={onClose}
      />
    </>
  )
}

const AllLinks = () => (
  <>
    <a href="/">Home</a>
    <a href="/shop">Shop</a>
    <a href="/bespoken">Bespoken designs</a>
    <a href="/about">About</a>
  </>
)

export default props => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  const openMenu = () => setMenuOpen(true)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <Helmet></Helmet>
      <header className={styles.header}>
        <img src={logo} onClick={openMenu} />
      </header>
      <main>{props.children}</main>
      <footer className={styles.footer}>
        <p>Links:</p>
        <div className={styles.links}>
          <AllLinks />
        </div>
        <p className={styles.copyright}>
          Copyright 2020 Alberto Maria Giachino
        </p>
      </footer>
      <Menu open={menuOpen} onClose={closeMenu}>
        <AllLinks />
      </Menu>
    </>
  )
}
