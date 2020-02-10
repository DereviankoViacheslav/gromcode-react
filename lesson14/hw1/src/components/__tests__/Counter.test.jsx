import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../Counter';

describe('Counter', () => {
  it('default value should be 0', () => {
    const wrappedComponent = shallow(<Counter />);
    expect(wrappedComponent.find('.counter__value').text()).toEqual('0');
  });

  it('should increment value on click +', () => {
    const wrappedComponent = shallow(<Counter />);
    wrappedComponent.find('.counter__button').last().simulate('click');
    expect(wrappedComponent.find('.counter__value').text()).toEqual('1');
  });

  it('should decrement value on click -', () => {
    const wrappedComponent = shallow(<Counter />);
    wrappedComponent.find('.counter__button').first().simulate('click');
    expect(wrappedComponent.find('.counter__value').text()).toEqual('-1');
  });

  it('value should be reset to 0', () => {
    const wrappedComponent = shallow(<Counter />);
    wrappedComponent.find('.counter__button').first().simulate('click');
    wrappedComponent.find('.counter__value').simulate('click');
    expect(wrappedComponent.find('.counter__value').text()).toEqual('0');
  });
})