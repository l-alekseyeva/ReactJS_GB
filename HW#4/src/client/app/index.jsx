import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Footer from './components/Footer';
import PokeList from './containers/PokeListContainer';

class App extends Component {
  render() {
    return <div className="body">
      <PokeList />
      <Footer />
    </div>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
