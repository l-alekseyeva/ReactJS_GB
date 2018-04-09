import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PokeAbilities from '../components/PokeAbilities'

export default class PokeAbilitiesContainer extends PureComponent {
  constructor(props){
    super(props);

    this.state = {
      abilities: [],
      loading: false
    };
  }

  componentWillMount() {
    this.setState({
      loading: true
    });

    fetch(`https://pokeapi.co/api/v2/pokemon/`)
      .then(res => res.json())
      .then(abilities => {
        this.setState({
          loading: false,
          abilities: abilities
        });
      });

  }
  render() {
    const { loading, abilities } = this.state;

    return (
      <div>
        {loading ? 'Идет загрузка' : <PokeAbilities abilities={abilities} />}
      </div>
    );
  }
}
