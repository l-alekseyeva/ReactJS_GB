import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Content from './components/content';
import Footer from './components/footer';

class App extends Component {
  render() {
    return <div className="body">
      <Content />
      <Footer />
    </div>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
