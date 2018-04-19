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

  showAbilities = (url) => {
    this.setState({
      loading: true,
    });

    fetch(url)
      .then(res => res.json())
      .then(pokeAbilities => {
        this.setState({
          loading: false,
          pokeAbilities: pokeAbilities
        });
        console.log('Click on ' + pokeAbilities.name + '. Weight: '+ pokeAbilities.weight);
      });
  }

  render() {
    const { pokemons, pokeAbilities } = this.props;
    return (
      <div className="pokeList">
        {pokemons.map(pokemon => <PokeCard {...pokemon} pokeAbilities={this.pokeAbilities} showPokeAbilities={this.showAbilities}/>)}
      </div>
    );
  }
}
