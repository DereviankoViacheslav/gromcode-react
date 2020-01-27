import React from 'react';
import PropTypes from 'prop-types';

class EvenNumbers extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.number % 2 === 0;
  }

  render() {
    return (
      <div className="number">
        <span className="number__title">Even number</span>
        <span className="number__value">{this.props.number}</span>
      </div>
    );
  }
}

EvenNumbers.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number.isRequired
}

EvenNumbers.defaultProps = {
  title: 'Default Title'
}

export default EvenNumbers;