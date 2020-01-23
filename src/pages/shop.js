import React from "react"

import productsYaml from "../data/products/products.yaml"

const ProductCard = ({ data }) => {
  const { name, code, description } = data
  return (
    <div>
      <h3>{`${name} ${code}`}</h3>
      <button>Buy</button>
    </div>
  )
}

export default () => {
    console.log(productsYaml);

  return (
    <div className="shop">
      <div className="shop-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div>
        {productsYaml.map(product => (
          <ProductCard key={product.code} data={product} />
        ))}
      </div>
    </div>
  )
}