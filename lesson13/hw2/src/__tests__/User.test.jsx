import React from 'react';
import { shallow } from 'enzyme';
import User from '../User';

describe('User', () => {
  it('should render name', () => {
    const wrappedComponent = shallow(<User name={'Test Name'} />);
    expect(wrappedComponent.find('.user__name').text()).toEqual('Test Name');
  });

  it('should render age', () => {
    const wrappedComponent = shallow(<User age={25} />);
    expect(wrappedComponent.find('.user__age').text()).toEqual('25');
  });
});