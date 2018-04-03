import React, { Component } from 'react';

export default class Menu extends Component {
  render() {
    return <div >
      <ul className="menu">
        <li><a href="#">Главная</a></li>
        <li><a href="#">О нас</a></li>
        <li><a href="#">Контакты</a></li>
      </ul>
    </div>;
  }
}
