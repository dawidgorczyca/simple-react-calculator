import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import App from './App';

// THIS IS ONLY A MOCKUP, would still need to set up the state for tests and proper rendering

describe('<App />', () => {

  it('renders', () => {
    const wrapper = mount(
      <App/>
    );
    expect(wrapper.contains('.current-result')).toEqual(true);
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount(
      <App onButtonClick={onButtonClick} />
    );
    wrapper.find('.btn-plus').simulate('click');
    expect(onButtonClick.calledOnce).to.equal(true);
  });

});