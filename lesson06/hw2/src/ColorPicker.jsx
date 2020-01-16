import React, { Component } from 'react';
import './color-picker.scss';

class ColorPicker extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  setTitle = (value) => {
    this.setState({
      title: value,
    });
  }
  
  reset = () => {
    this.setState({
      title: '',
    });
  }

  render() {
    return (
      <div>
        <div className="picker__title">
          {this.state.title}
        </div>
        <div>
          <button onMouseOver={() => this.setTitle('Coral')} onMouseOut={this.reset}
            className="picker__button picker__button_coral" />
          <button onMouseOver={() => this.setTitle('Aqua')} onMouseOut={this.reset}
            className="picker__button picker__button_aqua" />
          <button onMouseOver={() => this.setTitle('Bisque')} onMouseOut={this.reset}
            className="picker__button picker__button_bisque" />
        </div>
      </div>
    );
  };
}

export default ColorPicker;