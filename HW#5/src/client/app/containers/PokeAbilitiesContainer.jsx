import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PokeAbilities from '../components/PokeAbilities'

export default class PokeAbilitiesContainer extends PureComponent {
  constructor(props){
    super(props);

    this.state = {
      pokeAbilities: [],
      abilitiesLoading: false
    };
  }

  showAbilities = (url) => {
    this.setState({
      abilitiesLoading: true,
    });

    fetch(url)
      .then(res => res.json())
      .then(pokeAbilities => {
        this.setState({
          pokeAbilities: pokeAbilities,
          abilitiesLoading: false
        });
        console.log('Click on ' + pokeAbilities.name + '. Weight: '+ pokeAbilities.weight);
      });

  }

  render() {
    const { abilitiesLoading, pokeAbilities, pokeUrl } = this.state;
    console.log(this.props.pokeUrl);
    return (
      <div>
        <button onClick={this.showAbilities(this.props.pokeUrl)}> Abilities</button>

        {abilitiesLoading && <PokeAbilities pokeAbilities={pokeAbilities} />}
      </div>
    );
  }
}
