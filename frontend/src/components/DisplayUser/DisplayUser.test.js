import React from 'react';
import { shallow, render, mount } from 'enzyme';
import DisplayUser from './DisplayUser';

describe('DisplayUser', () => {
  let props;
  let shallowDisplayUser;
  let renderedDisplayUser;
  let mountedDisplayUser;

  const shallowTestComponent = () => {
    if (!shallowDisplayUser) {
      shallowDisplayUser = shallow(<DisplayUser {...props} />);
    }
    return shallowDisplayUser;
  };

  const renderTestComponent = () => {
    if (!renderedDisplayUser) {
      renderedDisplayUser = render(<DisplayUser {...props} />);
    }
    return renderedDisplayUser;
  };

  const mountTestComponent = () => {
    if (!mountedDisplayUser) {
      mountedDisplayUser = mount(<DisplayUser {...props} />);
    }
    return mountedDisplayUser;
  };  

  beforeEach(() => {
    props = {};
    shallowDisplayUser = undefined;
    renderedDisplayUser = undefined;
    mountedDisplayUser = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
