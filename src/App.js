import React, { Component } from 'react';

var Main = function() {
  return (
    <div style={{color: "red"}}>Hello</div>
  );
}

export class App extends Component {
  render() {
    return (
      <Main />
    );
  }
}