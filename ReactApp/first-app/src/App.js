
import React from 'react';
import items from './items'
import Alert from './Alert';
import Greeting from './Greeting';
import ShoppingCart from './ShoppingCart';
import moreItems from "./moreItems";
import logo from './logoipsum-289.svg'
import './App.css';


function App() {
  return (

      <div>
          <Alert variant="success">
              <h1> Welcome Back!</h1>
              <Greeting />
          </Alert>

          <Alert variant="danger">
              <h1>OHH NO !</h1>
          </Alert>

          <img src = {logo}  alt="logo" id="logo"/>
        <ShoppingCart items={items} username="Carly"/>
        <ShoppingCart items={moreItems} username="Daria"/>
      </div>



  )
}

export default App;
