import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

//CSS
import "./App.css";

//Components
// import Default from "./pages/default";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import ProductList from "./pages/ProductList";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          {/* <Route component={Default} /> */}
            <Route path="/" component={ProductList} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
