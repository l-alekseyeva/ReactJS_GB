import React, { Component } from 'react';

import Menu from './Menu';
import Login from './Login';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <Menu menuItems={[
            {link: '#', title: 'Главная'},
            {link: '#', title: 'О нас'},
            {link: '#', title: 'Контакты'},
            {link: '#', title: 'Каталог'}
          ]}/>
        <Login />
      </header>
    );
  }
}
