import React, { Component } from "react";
import "react-multi-carousel/lib/styles.css";

//CSS
import "./App.css";

//Components
import NavBar from "./components/navbar";
import Inicial from "./components/inicial";
import NewProducts from "./components/newProducts";
import Products from "./components/products";
import Footer from "./components/footer";
import ScrollDown from "./components/scrollDown";

//Dados
import data from "./components/data/data";
import dataNew from "./components/data/newdata";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Inicial />
        <ScrollDown href={"#shop"}/>
        <div className="mt-48">
          <NewProducts dataNew={dataNew} />
          <Products data={data} />
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
