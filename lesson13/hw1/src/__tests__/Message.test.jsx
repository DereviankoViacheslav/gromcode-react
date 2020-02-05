import React from 'react';
import { shallow } from 'enzyme';
import Message from '../Message';

describe('Message', () => {
  it('should render message', () => {
    const wrappedComponent = shallow(<Message text={'Test message'} />);
    expect(wrappedComponent.find('.message').exists()).toEqual(true);
  });

  it('should not render if props.text is undefined', () => {
    const wrappedComponent = shallow(<Message />);
    expect(wrappedComponent.find('.message').exists()).toEqual(false);
  });
});