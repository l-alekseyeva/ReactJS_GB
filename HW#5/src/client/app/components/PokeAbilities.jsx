import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import style from './PokeAbilities.css'

export default class PokeAbilities extends PureComponent {
  static propTypes = {
    abilities: PropTypes.arrayOf({
      name: PropTypes.string,
      weigth: PropTypes.string,
      heigth: PropTypes.string,
      base_experience: PropTypes.string
    })

  };

  render() {
    const { abilities } = this.props;

    return (
      <div className={`pokeAbilities ${style}`} showAbilities= {this.showPokeAbilities}>
        <ul>
          <li>Вес: {abilities.weight}</li>
          <li>Рост: {abilities.height}</li>
          <li>Базовый опыт: {abilities.base_experience}</li>
        </ul>

      </div>
    );
  }
}
