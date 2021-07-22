import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe("<BodySection />", () => {
    it('render correctly the props', () => {
        const wrapper = shallow(<BodySection title="test" />);
        expect(wrapper.children()).toHaveLength(1);
        expect(wrapper.children().text() === "test").toBeTruthy();
        expect(wrapper.children().text()).toBe("test");
        expect(wrapper.children().html()).toBe("<h2>test</h2>");
    })
    it('render correctly both the children component and titel passed as prop', () => {
        const wrapper = shallow(<BodySection title="proptitle">
            <p>childcomponent</p>
        </BodySection>);
        expect(wrapper.children()).toHaveLength(2);
        expect(wrapper.childAt(0).text()).toBe("proptitle");
        expect(wrapper.childAt(1).text()).toBe("childcomponent");
    })
   
})