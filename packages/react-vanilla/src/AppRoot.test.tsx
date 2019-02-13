import { mount } from 'enzyme';
import React from 'react';

import AppRoot from './AppRoot';
import { testContextBuilder } from './utils/test-context.builder';

describe('Router', () => {
  it('should render <App /> for / path', () => {
    const { componentInContext } = testContextBuilder(<AppRoot />)
      .withIntl()
      .withRouter('/')
      .build();
    const wrapper = mount(componentInContext);
    expect(wrapper.find('App').exists()).toBe(true);
  });

  it('should render <App /> for /welcome path', () => {
    const { componentInContext } = testContextBuilder(<AppRoot />)
      .withIntl()
      .withRouter('/welcome')
      .build();
    const wrapper = mount(componentInContext);
    expect(wrapper.find('App').exists()).toBe(true);
  });

  it('should render <NotFound /> for an unknown path', () => {
    const { componentInContext } = testContextBuilder(<AppRoot />)
      .withIntl()
      .withRouter('/unknown-path')
      .build();
    const wrapper = mount(componentInContext);
    expect(wrapper.find('NotFound').exists()).toBe(true);
  });
});
