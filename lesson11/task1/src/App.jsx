import React from 'react';
import Numbers from './Numbers';
import EvenNumbers from './EvenNumbers';
import OddNumbers from './OddNumbers';
import './app.scss';

class App extends React.Component {
  state = {
    number: 0,
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((state) => ({ number: state.number + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="app">
        <OddNumbers number={this.state.number} />
        <EvenNumbers number={this.state.number} />
        <Numbers title={'All numbers'} number={this.state.number} />
        <Numbers title={'Just 17'} number={17} />
      </div>
    );
  }
}

export default App;