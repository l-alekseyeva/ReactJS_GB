import React, { Component } from 'react';

import Menu from './menu';
import Login from './login';

export default class Header extends Component {
  render() {
    return <header className="header">
      <Menu />
      <Login />
    </header>;
  }
}
