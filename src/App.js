import React from 'react';
import './style.css';

export default class App extends React.Component {
  constructor() {
    super();
    console.log('constructor');
    this.state = {
      name: 'sachin',
      counter: 0
    };
  }
  componentDidUpdate(prevProps, preState, snapshot) {
    console.log('componentDidUpdate', preState);
  }
  render() {
    console.log('render');
    return (
      <div>
        <h1>Component Did Update {this.state.counter}</h1>
        <button
          onClick={() => {
            this.setState({ name: 'Shukla' });
          }}
        >
          Update Name
        </button>
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          Update counter
        </button>
      </div>
    );
  }
}
