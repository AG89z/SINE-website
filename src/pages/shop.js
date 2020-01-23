import React, { useState } from "react"

import Helmet from "react-helmet"

import { graphql } from "gatsby"

import Img from "gatsby-image"

import Modal from "../components/modal/Modal"
import ProductCard from "../components/productCard/ProductCard"

import "../style/style.css"


const ProductDialog = ({ product }) => {
  const { name, code, description, image, price } = product

  return (
    <div style={{ flex: "auto" }}>
      <h3>{`${name} ${code}`}</h3>
      <Img fluid={image.childImageSharp.fluid} />
      <button
        className="snipcart-add-item buyBtn"
        data-item-id={code}
        data-item-price={price}
        data-item-image={image.childImageSharp.fluid.src}
        data-item-name={name}
        data-item-description={description}
        data-item-url={"localhost:8000/shop"}
      >
        Buy
      </button>
    </div>
  )
}

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
      <div
        id="snipcart"
        data-api-key="YjBkYjJlMTgtNGQzMS00YmMwLTkwMGMtMzI2MGJlODY2ZThlNjM3MTUzNzI0MTQ0NzQwNTg4"
        hidden
      ></div>
      <div className="shop">
        <div className="shop-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="shop-products-gallery">
          {data.allProductsYaml.edges.map(product => (
            <ProductCard
              key={product.node.code}
              fluid={product.node.image.childImageSharp.fluid}
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
          image {
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
