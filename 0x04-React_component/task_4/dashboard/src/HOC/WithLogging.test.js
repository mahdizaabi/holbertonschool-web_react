import React from 'react';
import { shallow, mount } from 'enzyme';
import withLogging from './WithLogging';
import { Footer } from '../Footer/Footer';
describe('<HOC Component />', () => {
    let consoleLogMock;
    beforeEach(() => {
        consoleLogMock = jest.spyOn(console, 'log');
    });

    it('Console.log works with pure html', () => {
        const HOComponent = withLogging("<b>Test!<b>");

        const wrapper = shallow(<HOComponent />);
        expect(consoleLogMock).toHaveBeenCalledWith("Component Component is mounted");
        consoleLogMock.mockClear();
        wrapper.unmount();
        expect(consoleLogMock).toHaveBeenCalledWith("Component Component is going to unmount");
        consoleLogMock.mockClear();

    });


    it('Console.log works with React Component', () => {
        const HOComponent = withLogging(Footer);
        const wrapper = shallow(<HOComponent />);
        expect(consoleLogMock).toHaveBeenCalledWith("Component Footer is mounted");
        consoleLogMock.mockClear();
        wrapper.unmount();
        expect(consoleLogMock).toHaveBeenCalledWith("Component Footer is going to unmount");
        consoleLogMock.mockRestore();
    });


});