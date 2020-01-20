import React, { Component } from 'react';

class Dimensions extends Component {

  state = {
    height: null,
    width: null,
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    const { innerHeight, innerWidth } = window;
    this.setDimensions(innerHeight, innerWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = event => {
    const { innerHeight, innerWidth } = event.target;
    this.setDimensions(innerHeight, innerWidth);
  }

  setDimensions = (width, height) => {
    document.title = `${width} x ${height}`;
    this.setState({
      height,
      width,
    });
  }

  render() {

    return (
      <div className="dimensions">{`${this.state.width} x ${this.state.height}`}</div>
    );
  };
}

export default Dimensions;