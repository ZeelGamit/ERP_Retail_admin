import React from 'react';
import { shallow, render, mount } from 'enzyme';
import AddUser from './AddUser';

describe('AddUser', () => {
  let props;
  let shallowAddUser;
  let renderedAddUser;
  let mountedAddUser;

  const shallowTestComponent = () => {
    if (!shallowAddUser) {
      shallowAddUser = shallow(<AddUser {...props} />);
    }
    return shallowAddUser;
  };

  const renderTestComponent = () => {
    if (!renderedAddUser) {
      renderedAddUser = render(<AddUser {...props} />);
    }
    return renderedAddUser;
  };

  const mountTestComponent = () => {
    if (!mountedAddUser) {
      mountedAddUser = mount(<AddUser {...props} />);
    }
    return mountedAddUser;
  };  

  beforeEach(() => {
    props = {};
    shallowAddUser = undefined;
    renderedAddUser = undefined;
    mountedAddUser = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
