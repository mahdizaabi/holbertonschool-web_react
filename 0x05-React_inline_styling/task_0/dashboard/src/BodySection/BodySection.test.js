import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe("<BodySectionWithMarginBottom />", () => {
    it('render correctly the child component', () => {
        const wrapper = shallow(<BodySectionWithMarginBottom title="test">
            <BodySection />
            </BodySectionWithMarginBottom>);
            expect(wrapper.containsMatchingElement(<BodySection/>)).toBeTruthy()
    })
    it('Called the child component with the right arguments', () => {
        const wrapper = shallow(<BodySectionWithMarginBottom title="test">
            <BodySection />
            </BodySectionWithMarginBottom>);
            expect(wrapper.childAt(0).props().title).toBeTruthy();
            expect(wrapper.childAt(0).props().title).toBe('test');
    })
    
   
   
})