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
      pokeAbilities: [],
      loading: false
    };
  }

  getId = (url) => {
    const urlArray = url.split('/');
    return urlArray[urlArray.length-2];
  }

  clickHandler = (url) => {
    const { onPokeClick } = this.props;

    if(typeof onPokeClick === 'function') {
      onPokeClick(url);
    }
  };

  render() {
    const { url, name, pokeAbilities } = this.props;

    return (
      <div className={`pokeCard`} id={`${this.getId(url)}`} onClick={this.clickHandler(url)}>
        <p>{name}</p>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.getId(url)}.png`} />
        <PokeAbilities pokeAbilities={pokeAbilities}/>

      </div>
    );
  }
}
