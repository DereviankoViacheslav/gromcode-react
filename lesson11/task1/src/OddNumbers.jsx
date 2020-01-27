import React from 'react';
import PropTypes from 'prop-types';

class OddNumbers extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.number % 2 !== 0;
  }

  render() {
    return (
      <div className="number">
        <span className="number__title">Odd number</span>
        <span className="number__value">{this.props.number}</span>
      </div>
    );
  }
}

OddNumbers.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number.isRequired
}

OddNumbers.defaultProps = {
  title: 'Default Title'
}

export default OddNumbers;