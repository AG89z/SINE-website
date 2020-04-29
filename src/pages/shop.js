import React, { useState } from "react"

import Helmet from "react-helmet"

import { graphql } from "gatsby"

import Modal from "../components/modal/Modal"
import ProductCard from "../components/productCard/ProductCard"
import ProductDialog from "../components/productDialog/ProductDialog"
import Layout from "../components/layout/Layout"

import "../style/shop.css"

export default ({ data }) => {
  const [currentProduct, setCurrentProduct] = useState(null)

  return (
    <>
      <Helmet>
        <script src="https://cdn.snipcart.com/themes/v3.0.6/default/snipcart.js"></script>
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.0.6/default/snipcart.css"
        />
      </Helmet>
      <Layout>
        <div
          id="snipcart"
          data-api-key="YjBkYjJlMTgtNGQzMS00YmMwLTkwMGMtMzI2MGJlODY2ZThlNjM3MTUzNzI0MTQ0NzQwNTg4"
          hidden
        ></div>
        <div className="shop">
          <div className="shop-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="shop-products-gallery">
            {data.allProductsYaml.edges.map(product => (
              <ProductCard
                key={product.node.code}
                fluid={product.node.thumbnail.childImageSharp.fluid}
                onClick={() => setCurrentProduct(product.node)}
              />
            ))}
          </div>
        </div>
        <Modal
          open={Boolean(currentProduct)}
          onClose={() => setCurrentProduct(null)}
        >
          {currentProduct && <ProductDialog product={currentProduct} />}
        </Modal>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allProductsYaml {
      edges {
        node {
          code
          name
          description
          price
          thumbnail {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          images {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
