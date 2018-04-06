import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PokeCard from './PokeCard'

export default class PokeList extends PureComponent {
  static propTypes = {
    pokemons: PropTypes.arrayOf({
      name: PropTypes.string.isRequired,
      id: PropTypes.number,
    })
  };

  static defaultProps = {
    pokemons: [],
  }

  render() {
    const { pokemons } = this.props;
    return (
      <div className="pokeList">
        {pokemons.map(pokemon => <PokeCard {...pokemon} />)}
      </div>
    );
  }
}
