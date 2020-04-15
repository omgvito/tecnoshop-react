import React, { Component } from "react";

import NewProducts from "../components/newProducts";
import Products from "../components/products";
import Inicial from "../components/inicial";
import ScrollDown from "../components/scrollDown";

import data from "../components/data/data";

class ProductList extends Component {
  render() {
    return (
      <>
        <Inicial />
        <ScrollDown href={"#shop"} />
        <div className="mt-48">
          <NewProducts
            data={data.filter((produto) => {
              return [1,2,3].includes(produto.id)
            })}
          />
          <Products
            data={data.filter((produto) => {
              return ![1,2,3].includes(produto.id)
            })}
          />
        </div>
      </>
    );
  } 
}

export default ProductList;
