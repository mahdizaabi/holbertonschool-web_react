import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { CourseList } from '../CourseList/CourseList'
import { LoginComponent } from '../Login/Login';
import {Footer} from '../Footer/Footer';
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

  test('<CourseList /> rendred when logedin is false', () => {
   const  wrapper = shallow(<App />);
  
    wrapper.setProps({ "isLoggedIn": false });
    expect(wrapper).toHaveLength(1);
    expect(wrapper.containsMatchingElement(<CourseList />)).toBeFalsy()
  });
  it('<CourseList /> is not rendred when logedin is false', () => {
    wrapper.setProps({ "isLoggedIn": false });
    expect(wrapper.containsMatchingElement(<CourseList />)).toBeFalsy()
  });


  describe('IsLogedin: true', () => {
    let wrapper;
    wrapper = shallow(<App />);
    wrapper.setProps({ "isLoggedIn": true});
    it('<Login /> is not rendred when logedin is true', () => {
      expect(wrapper.containsMatchingElement(<LoginComponent />)).toBeFalsy();
    });

    it('<CourseList /> is  rendred when logedin is true', () => {
      let wrapper;
    wrapper = shallow(<App />);
    wrapper.setProps({ "isLoggedIn": true, "listCourses":[
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ]});
      expect(wrapper.containsMatchingElement(<CourseList />)).toBeTruthy();
    });
  })

});
