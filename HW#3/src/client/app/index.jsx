import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import Content from './components/Content';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return <div className="body">
      <Content />
      <Footer />
    </div>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
