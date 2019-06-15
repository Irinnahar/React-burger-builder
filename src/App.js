import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Burgerbuilder from './containers/Burgerbuilder/Burgerbuilder';
import Checkout from './containers/Checkout/Checkout';
import { NavLink, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Layout >
        <Switch>
          <Route path='/checkout' component = {Checkout}/>
          <Route path='/' exact component = {Burgerbuilder}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
