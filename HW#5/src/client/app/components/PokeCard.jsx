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
    abilities: [],
  }

  constructor(props){
    super(props);

    this.state = {
      abilities: [],
      loading: false
    };
  }

  getId = (url) => {
    const urlArray = url.split('/');
    return urlArray[urlArray.length-2];
  }

  showPokeAbilities = (url) => {
    this.setState({
      loading: true,
      abilities: []
    });

    fetch(url)
      .then(res => res.json())
      .then(abilities => {
        this.setState({
          loading: false,
          abilities: abilities
        });
        console.log(abilities)
      });
  }

  render() {
    const { url, name } = this.props;


    return (
      <div className={`pokeCard`} id={`${this.getId(url)}`} onClick={this.showPokeAbilities}>
        <p>{name}</p>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.getId(url)}.png`} />
        <PokeAbilities />

      </div>
    );
  }
}
