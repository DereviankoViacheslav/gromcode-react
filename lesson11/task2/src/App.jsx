import React from 'react';
import Dialog from './Dialog';
import './app.scss';

class App extends React.Component {
  state = {
    isOpen: false
  }

  showDialog = () => {
    this.setState({ isOpen: true });
  }

  onClose = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const elem = <p>Use immutable array methods to work with data. It will help to avoid bugs</p>;

    return (
      <div className="app">
        <button className="btn" onClick={this.showDialog}>Show dialog</button>
        {this.state.isOpen && <Dialog onClose={this.onClose} title={'Recommendation'}>{elem}</Dialog>}
      </div >
    );
  }
}

export default App;