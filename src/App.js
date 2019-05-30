import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Burgerbuilder from './containers/Burgerbuilder/Burgerbuilder';

function App() {
  return (
    <div>
      <Layout ></Layout>
      <Burgerbuilder></Burgerbuilder>
    </div>
  );
}

export default App;
