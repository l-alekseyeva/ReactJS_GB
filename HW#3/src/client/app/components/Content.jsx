import React, { Component } from 'react';

import Header from './Header';
import Main from './Main';

export default class Content extends Component {
  render() {
    return (
      <div className="content">
        <Header />
        <Main />
      </div>
    );
  }
}
