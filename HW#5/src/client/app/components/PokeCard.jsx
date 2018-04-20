import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import PokeAbilities from '../containers/PokeAbilitiesContainer';

export default class PokeCard extends PureComponent {
  static propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    pokeAbilities: PropTypes.shape({
      name: PropTypes.string,
      weight: PropTypes.number,
      height: PropTypes.number,
      base_experience: PropTypes.number
    })
  };

  static defaultProps = {
    pokeAbilities: [],
  }

  constructor(props){
    super(props);

    this.state = {
      pokeAbilities: this.pokeAbilities,
      loading: false
    };
  }

  getId = (url) => {
    const urlArray = url.split('/');
    return urlArray[urlArray.length-2];
  }

  render() {
    const { url, name } = this.props;

    return (
      <div className={`pokeCard`} id={`${this.getId(url)}`} >
        <p>{name}</p>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.getId(url)}.png`} />
        <PokeAbilities pokeUrl={url} />

      </div>
    );
  }
}
