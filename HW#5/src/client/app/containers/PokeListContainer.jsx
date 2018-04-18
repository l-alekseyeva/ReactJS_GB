import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PokeList from '../components/PokeList'

export default class PokeListContainer extends PureComponent {
  constructor(props){
    super(props);

    this.state = {
      pokemons: [],
      pokeAbilities: [],
      loading: false
    };
  }

  componentWillMount() {
    this.setState({
      loading: true
    });

    fetch('https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0')
      .then(res => res.json())
      .then(pokemons => {
        this.setState({
          loading: false,
          pokemons: pokemons.results
        });
      });
  }

  showPokeAbilities = (url) => {
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
      });
  }

  render() {
    const { loading, pokemons } = this.state;

    return (
      <div>
        {loading ? 'Идет загрузка' : <PokeList pokemons={pokemons} showAbilities={this.showPokeAbilities}/>}
      </div>
    );
  }
}
