import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class PokeAbilities extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    weigth: PropTypes.string.isRequired,
    heigth: PropTypes.string.isRequired,
    base_experience: PropTypes.string.isRequired
  };

  render() {
    const { abilities } = this.props;

    return (
      <div className="pokeAbilities" id={`${name}`}>
        <ul>
          <li>Вес: {34}</li>
          <li>Рост: {44}</li>
          <li>Базовый опыт: {6}</li>
        </ul>

      </div>
    );
  }
}
