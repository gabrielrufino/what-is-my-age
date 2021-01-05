import React from 'react';
import 'bulma/css/bulma.min.css'
import './App.css';

import Header from './components/Header';
import Form from './components/Form';
import Result from './components/Result';

class App extends React.Component {
  render () {
    return (
      <div className="container">
        <Header />

        <div className="columns">
          <div className="column">
            <Form />
          </div>
          <div className="column">
            <Result />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
