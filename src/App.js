import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Details from './components/Details'
import ProductList from './components/ProductList'
import Default from './components/Default'
import Modal from './components/Modal'

class App extends Component {
  render(){
  return (
    //react.fragment simulates the html tag
    <React.Fragment>
      <Navbar/>

      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>

      {/* we do not put Modal inside switch because it appear 1x
      when we click on the image */}
      <Modal />
    </React.Fragment>
  );
}
}

export default App;
