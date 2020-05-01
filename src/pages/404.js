import React from "react"

import Layout from "../components/layout/Layout"

import "../style/textPage.css"

export default () => {
  return (
    <Layout>
      <div className="container">
        <div className="content">
          <h1>404</h1>
          <p>
            It seems like what you are looking for doesn't exist.
          </p>
        </div>
      </div>
    </Layout>
  )
}
