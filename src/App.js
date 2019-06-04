import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Burgerbuilder from './containers/Burgerbuilder/Burgerbuilder';

function App() {
  return (
    <div>
      <Layout >
        <Burgerbuilder />
      </Layout>
    </div>
  );
}

export default App;
