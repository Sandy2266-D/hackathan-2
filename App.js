import './App.css';
import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/NavBar';
import ProductList from './Components/ProductList';
import Details from './Components/Details';
import Default from './Components/Default';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Model from "./Components/Model";
import Cart  from "./Components/CartPackage/Cart";

class App extends Component
{
  render()
  {
    return(
  <React.Fragment>
<NavBar/>
<Switch>
<Route exact path="/">{<ProductList/>}</Route> 
<Route path="/details">{<Details/>}</Route> 
<Route path="/cart">{<Cart/>}</Route> 
<Route >{<Default/>}</Route>
</Switch>
<Model/>
</React.Fragment> 
);
}
}

export default App;

