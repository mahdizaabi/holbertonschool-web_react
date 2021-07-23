import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Footer />', () => {
  it('renders a <Footer /> component', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toHaveLength(1);
	});

	it('renders a <Footer /> component and checks contents', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('footer p').text()).toContain('Copyright');
	});
});
