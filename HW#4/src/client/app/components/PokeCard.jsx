import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class PokeCard extends PureComponent {
  static propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  };

  getId = (url) => {
    const urlArray = url.split('/');
    return urlArray[urlArray.length-2];
  }

  render() {
    const { url, name } = this.props;


    return (
      <div className="pokeCard">
        <p>{name}</p>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.getId(url)}.png`} />

      </div>
    );
  }
}
