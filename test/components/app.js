import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import App from '../../src/components/App';


test('render with container div', t => {
  const wrapper = shallow(React.createElement(App));
  t.is(wrapper.length, 1);
});
