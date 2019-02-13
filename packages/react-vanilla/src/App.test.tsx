import { mount } from 'enzyme';
import React from 'react';

import App from './App';
import { testContextBuilder } from './utils/test-context.builder';

it('renders without crashing', () => {
  const { componentInContext } = testContextBuilder(<App />)
    .withIntl()
    .build();
  const wrapper = mount(componentInContext);
  expect(wrapper).toExist();
});
