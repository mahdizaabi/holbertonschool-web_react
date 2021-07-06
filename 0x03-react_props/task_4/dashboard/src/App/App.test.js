import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { CourseList } from '../CourseList/CourseList'
import { LoginComponent } from '../Login/Login';

describe('<App />', () => {
  let wrapper;
  beforeAll(() => {
    return wrapper = shallow(<App />);
  });

  it('App renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('render 4 components', () => {
    expect(wrapper.find('.container').children()).toHaveLength(4);
  })

  test('<CourseList /> rendred when logedin is true', () => {
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper).toHaveLength(1);
    expect(wrapper.containsMatchingElement(<CourseList />)).toBeTruthy()
  });
  it('<CourseList /> is not rendred when logedin is false', () => {
    wrapper.setProps({ isLoggedIn: false });
    expect(wrapper.containsMatchingElement(<CourseList />)).toBeFalsy()
  });


  describe('IsLogedin: true', () => {
    let wrapper;
    wrapper = shallow(<App />);
    wrapper.setProps({ isLoggedIn: true });
    test('<Login /> is not rendred when logedin is true', () => {
      expect(wrapper.containsMatchingElement(<LoginComponent />)).toBeFalsy();
    });
    test('<CourseList /> is not rendred when logedin is true', () => {
      expect(wrapper.containsMatchingElement(<CourseList />)).toBeTruthy();
    });
  })

});
