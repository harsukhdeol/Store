import React, { Component } from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import ProductList from "./components/categories/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal"
import Search from "./components/Search"
import Footer from "./components/Footer"
import Home from "./components/Home"



import New from "./components/categories/New"
import Dresses from "./components/categories/Dresses"
import Tops from "./components/categories/Tops"
import Bottoms from "./components/categories/Bottoms"
import Accessories from "./components/categories/Accessories"
import Outerwear from "./components/categories/Outerwear"
class App extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route path="/details" component={Details}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/dress" component={Dresses}></Route>
            <Route path="/top" component={Tops}></Route>
            <Route path="/bottom" component={Bottoms}></Route>
            <Route path="/outerwear" component={Outerwear}></Route>
            <Route path="/accessories" component={Accessories}></Route>
            <Route path="/search" component={Search}></Route>
            <Route path="/all" component={ProductList}></Route>
            <Route path="/new" component={New}></Route>

            <Route exact path="/" component={Home}></Route>
            <Route component={Default}></Route>
          </Switch>
          <Modal />
          <Footer />
        </React.Fragment>
      </div>
    )
  }
}
export default App