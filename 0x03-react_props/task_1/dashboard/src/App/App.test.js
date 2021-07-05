import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('App renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
	});

  it('render 4 components', ()=> {
    const wrapper = shallow(<App />)
    expect(wrapper.find('.container').children()).toHaveLength(4);
  })
});
