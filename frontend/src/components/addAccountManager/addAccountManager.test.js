import React from 'react';
import { shallow, render, mount } from 'enzyme';
import addAccountManager from './addAccountManager';

describe('addAccountManager', () => {
  let props;
  let shallowaddAccountManager;
  let renderedaddAccountManager;
  let mountedaddAccountManager;

  const shallowTestComponent = () => {
    if (!shallowaddAccountManager) {
      shallowaddAccountManager = shallow(<addAccountManager {...props} />);
    }
    return shallowaddAccountManager;
  };

  const renderTestComponent = () => {
    if (!renderedaddAccountManager) {
      renderedaddAccountManager = render(<addAccountManager {...props} />);
    }
    return renderedaddAccountManager;
  };

  const mountTestComponent = () => {
    if (!mountedaddAccountManager) {
      mountedaddAccountManager = mount(<addAccountManager {...props} />);
    }
    return mountedaddAccountManager;
  };  

  beforeEach(() => {
    props = {};
    shallowaddAccountManager = undefined;
    renderedaddAccountManager = undefined;
    mountedaddAccountManager = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
