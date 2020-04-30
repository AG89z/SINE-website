import React from "react"

import Layout from "../components/layout/Layout"

import "../style/textPage.css"

export default () => {
  return (
    <Layout>
      <div className="container">
        <div className="content">
          <h1>Bespoken designs</h1>
          <p>
            I am available for bespoken design jobs that require
            parametric/computational design, coding, noding, scripting and this
            sort of things. Just drop me a message at{" "}
            <a href="mailto:albertomaria.giachino@gmail.com">
              albertomaria.giachino@gmail.com
            </a>
          </p>
        </div>
      </div>
    </Layout>
  )
}
