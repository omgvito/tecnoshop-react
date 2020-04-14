import React, { Component } from "react";

import NewProducts from "../components/newProducts";
import Products from "../components/products";
import Inicial from "../components/inicial";
import ScrollDown from "../components/scrollDown";

import data from "../components/data/data";
import dataNew from "../components/data/newdata";

class ProductList extends Component {
  render() {
    return (
      <>
        <Inicial />
        <ScrollDown href={"#shop"} />
        <div className="mt-48">
        <NewProducts dataNew={dataNew} />
        <Products data={data} />
        </div>
      </>
    );
  }
}

export default ProductList;
