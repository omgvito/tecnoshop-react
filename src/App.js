import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//CSS
import "./App.css";

//Components
import Default from "./pages/Default";
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
          <Route exact path="/" component={ProductList} />
          <Route path="/404" component={Default} />
          <Redirect to="/404" />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
