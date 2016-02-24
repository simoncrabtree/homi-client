import React, { Component } from 'react';
import {ON, OFF} from './colors';

var Main = function() {
  return (
    <div style={{color: OFF}}>Hello</div>
  );
}

export class App extends Component {
  render() {
    return (
      <Main />
    );
  }
}