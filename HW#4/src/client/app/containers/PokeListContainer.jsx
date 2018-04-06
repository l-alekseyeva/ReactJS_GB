import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PokeList from '../components/PokeList'

export default class PokeListContainer extends PureComponent {
  constructor(props){
    super(props);

    this.state = {
      pokemons: [],
      loading: false
    };
  }

  componentWillMount() {
    this.setState({
      loading: true
    });

    fetch('https://pokeapi.co/api/v2/pokemon/?limit=949')
      .then(res => res.json())
      .then(pokemons => {
        this.setState({
          loading: false,
          pokemons
        });

      });
  }
  render() {
    const { loading, pokemons } = this.state;
    return (
      <div>
        {loading ? 'Идет загрузка' : <PokeList pokemons={pokemons} />}
      </div>
    );
  }
}