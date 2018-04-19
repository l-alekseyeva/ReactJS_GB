import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import PokeAbilities from './PokeAbilities';

export default class PokeCard extends PureComponent {
  static propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
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

  clickHandler = (event) => {
    const { showPokeAbilities, url } = this.props;

    if(typeof showPokeAbilities === 'function') {
      showPokeAbilities(url);
    }
  };

  render() {
    const { url, name, pokeAbilities } = this.props;

    return (
      <div className={`pokeCard`} id={`${this.getId(url)}`} onClick={this.clickHandler}>
        <p>{name}</p>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.getId(url)}.png`} />
        <PokeAbilities pokeAbilities={this.props.pokeAbilities}/>

      </div>
    );
  }
}
