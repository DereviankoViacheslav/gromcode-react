import React from 'react';
import { shallow } from 'enzyme';
import User from '../User.jsx';
import { getUsersList } from '../userGateway.js';

jest.mock('../userGateway', () => {
  return {
    getUsersList: jest.fn(() => Promise.resolve())
  }
})

describe('User', () => {
  it('should not render User without data', () => {
    const wrappedComponent = shallow(<User />);
    expect(wrappedComponent.find('.user').exists()).toEqual(false);
  });

  it('should render User with data', () => {
    const wrappedComponent = shallow(<User />);
    wrappedComponent.setState({
      userData: {
        avatar_url: 'https://example.com',
        name: 'John',
        location: 'Anywhere'
      }
    })
    expect(wrappedComponent.find('.user')).toMatchSnapshot();
  });

  it('should be called getUsersList()', () => {
    shallow(<User />);
    expect(getUsersList).toBeCalled();
  });
})