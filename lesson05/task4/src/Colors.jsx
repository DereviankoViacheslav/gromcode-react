import React, { Component } from 'react';
import './colors.scss';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends Component {

  setBodyColor = color => {
    document.body.style.backgroundColor = color;
  }

  render() {
    return (
      <div className="colors">
        <button
          onClick={() => this.setBodyColor(RED)}
          className="colors__button"
          style={{
            backgroundColor: RED,
          }} />
        <button
          onClick={() => this.setBodyColor(GREEN)}
          className="colors__button"
          style={{
            backgroundColor: GREEN,
          }} />
        <button
          onClick={() => this.setBodyColor(BLUE)}
          className="colors__button"
          style={{
            backgroundColor: BLUE,
          }} />
      </div>
    );
  };
}

export default Colors;