import React from 'react';
import PropTypes from 'prop-types';

class Expand extends React.Component {
  state = {
    isShowed: false
  }

  onShow = () => {
    this.setState((state) => ({ isShowed: !state.isShowed }));
  }

  render() {
    const { title, children } = this.props;
    const icon = this.state.isShowed
      ? <i className="fas fa-chevron-up"></i>
      : <i className="fas fa-chevron-down"></i>;

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button onClick={this.onShow} className="expand__toggle-btn">{icon}</button>
        </div>
        {this.state.isShowed && <div className="expand__content">{children}</div>}
      </div>
    );
  }
}

Expand.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
}

Expand.defaultProps = {
  title: 'Default title',
}

export default Expand;