import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PokeList from '../components/PokeAbilities'

export default class PokeAbilitiesContainer extends PureComponent {
  constructor(props){
    super(props);

    this.state = {
      pokeAbilities: [],
      loading: false
    };
  }

  showPokeAbilities = (url) => {
    this.setState({
      loading: true
    });

    fetch(url)
      .then(res => res.json())
      .then(pokeAbilities => {
        this.setState({
          loading: false,
          pokeAbilities: pokeAbilities
        });
      });
  }

  render() {
    const { loading, pokeAbilities } = this.state;

    return (
      <div>
        {loading ? 'Идет загрузка' : <PokeAbilities pokeAbilities={pokeAbilities} showAbilities={this.showPokeAbilities}/>}
      </div>
    );
  }
}
