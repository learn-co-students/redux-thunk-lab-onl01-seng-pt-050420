import React from 'react';
import { Component } from 'react';

export default class CatList extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        {this.props.catPics.map(cat => <img src={cat.url} alt={cat.id} />)}
      </div>
    )
  }
}