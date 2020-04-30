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
        <script src="https://cdn.snipcart.com/themes/v3.0.12/default/snipcart.js"></script>
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.0.12/default/snipcart.css"
        />
      </Helmet>
      <Layout>
        <div
          id="snipcart"
          data-api-key={process.env.GATSBY_SNIPCART_API_KEY}
          hidden
        ></div>
        <div className="shop">
          <div className="shop-description">
            <p>
              A collection of parametric wall panels and decors. Each model is
              available in digital download for CNC manufacturing.
            </p>
          </div>
          <div className="shop-products-gallery">
            {data.allProductsYaml.edges.map(product => (
              <ProductCard
                key={product.node.code}
                name={product.node.name}
                price={product.node.price}
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
          dimensions
          formats
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
