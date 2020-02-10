import React from 'react';
import { shallow } from 'enzyme';
import Dialog from '../Dialog.jsx';

describe('Dialog', () => {
  it('Dialog should be not display if "isOpen" is false', () => {
    const mockOnClose = jest.fn();
    const wrappedComponent = shallow(<Dialog isOpen={false} onClose={mockOnClose} />)
    expect(wrappedComponent.find('.dialog').exists()).toEqual(false);
  });

  it('Dialog should be display if "isOpen" is true', () => {
    const mockOnClose = jest.fn();
    const wrappedComponent = shallow(<Dialog isOpen onClose={mockOnClose} />)
    expect(wrappedComponent.find('.dialog').exists()).toBeTruthy();
  });

  it('"onClose" should close Dialog', () => {
    const mockOnClose = jest.fn();
    const wrappedComponent = shallow(<Dialog isOpen onClose={mockOnClose} />)
    wrappedComponent.find('.dialog__close-btn').simulate('click')
    expect(mockOnClose).toBeCalled();
  });

  it('should display title', () => {
    const mockOnClose = jest.fn();
    const wrappedComponent = shallow(<Dialog isOpen onClose={mockOnClose} />)
    expect(wrappedComponent.find('.dialog__title').exists()).toBeTruthy();
  });

  it('Dialog should display "children"', () => {
    const mockOnClose = jest.fn();
    const wrappedComponent = shallow(<Dialog isOpen onClose={mockOnClose} ><span>0</span></Dialog>)
    expect(wrappedComponent.find('.dialog__content').text()).toEqual('0');
  });
})