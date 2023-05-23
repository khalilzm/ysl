import React, { Component } from 'react';
import LibHeader from './LibHeader';
import LibList from './LibList';

export default class Library extends Component {

  render() {
    return(
      <div>
        <LibHeader/>
        <LibList/>
      </div>
    )
  }
}