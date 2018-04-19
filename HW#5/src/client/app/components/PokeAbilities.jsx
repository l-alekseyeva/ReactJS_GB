import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import style from './PokeAbilities.css'

export default class PokeAbilities extends PureComponent {
  static propTypes = {
    pokeAbilities: PropTypes.arrayOf({
      name: PropTypes.string,
      weight: PropTypes.number,
      height: PropTypes.number,
      base_experience: PropTypes.number
    })

  };

  render() {
    const { pokeAbilities } = this.props;

    return (
      <div className={style.pokeAbilities} >
        <ul >
          <li>Вес: {pokeAbilities.weight}</li>
          <li>Рост: {pokeAbilities.height}</li>
          <li>Базовый опыт: {pokeAbilities.base_experience}</li>
        </ul>

      </div>
    );
  }
}
