import React from 'react';
import { shallow, render, mount } from 'enzyme';
import dashboard from './Dashboard';

describe('dashboard', () => {
  let props;
  let shallowdashboard;
  let rendereddashboard;
  let mounteddashboard;

  const shallowTestComponent = () => {
    if (!shallowdashboard) {
      shallowdashboard = shallow(<dashboard {...props} />);
    }
    return shallowdashboard;
  };

  const renderTestComponent = () => {
    if (!rendereddashboard) {
      rendereddashboard = render(<dashboard {...props} />);
    }
    return rendereddashboard;
  };

  const mountTestComponent = () => {
    if (!mounteddashboard) {
      mounteddashboard = mount(<dashboard {...props} />);
    }
    return mounteddashboard;
  };  

  beforeEach(() => {
    props = {};
    shallowdashboard = undefined;
    rendereddashboard = undefined;
    mounteddashboard = undefined;
  });


  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
