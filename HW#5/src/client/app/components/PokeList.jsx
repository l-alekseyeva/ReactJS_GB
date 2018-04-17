import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PokeCard from './PokeCard'
import PokeAbilities from './PokeAbilities';

export default class PokeList extends PureComponent {
  static propTypes = {
    pokemons: PropTypes.arrayOf({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      showAbilities: PropTypes.func
    })
  };

  static defaultProps = {
    pokemons: [],
  }

  clickHandler = (event) => {
    const { showAbilities, id } = this.props;

    if (typeof showAbilities === 'function') {
      showAbilities(id);
    }
  }

  render() {
    const { pokemons } = this.props;
    return (
      <div className="pokeList">
        {pokemons.map(pokemon => <PokeCard {...pokemon} showAbilities={this.clickHandler}/>)}
      </div>
    );
  }
}
