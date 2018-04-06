import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class PokeCard extends PureComponent {
  static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string
  };

  static defaultProps = {
    image: 0,
  }

  render() {
    const { id, name } = this.props;
    return (
      <div className="pokeCard">
        <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+id+'.png'} />
        <p>{name}</p>
      </div>
    );
  }
}
