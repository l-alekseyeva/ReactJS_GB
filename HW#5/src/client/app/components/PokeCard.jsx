import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PokeAbilities from './PokeAbilities'

export default class PokeCard extends PureComponent {
  static propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  };

  getId = (url) => {
    const urlArray = url.split('/');
    return urlArray[urlArray.length-2];
  }

  showAbilities = () => {
    const pokeA = document.getElementById(`bulbasaur`);
    if (pokeA.style.display = 'block') {
      pokeA.style.display = 'none';
    } else if (pokeA.style.display = 'none') {
      pokeA.style.display = 'block';
    }
  }

  render() {
    const { url, name } = this.props;


    return (
      <div className={`pokeCard`} id={`${name} ${this.getId(url)}`} onClick={this.showAbilities}>
        <p>{name}</p>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.getId(url)}.png`} />
        <PokeAbilities />

      </div>
    );
  }
}
