import React, { Component } from 'react';

export default class Menu extends Component {
  render() {
    const { menuItems } = this.props;
    return (
      <div >
        <ul className="menu">
          {menuItems.map(menuItem => <li> <a href={menuItem.link}>{menuItem.title}</a></li>)}
        </ul>
      </div>
    );
  }
}
