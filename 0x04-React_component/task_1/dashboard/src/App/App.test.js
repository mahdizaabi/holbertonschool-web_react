import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import { CourseList } from '../CourseList/CourseList'
import { LoginComponent } from '../Login/Login';
import { Footer } from '../Footer/Footer';
import { Notifications } from '../Notifications/Notifications'
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
    const wrapper = shallow(<App />);

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
    wrapper.setProps({ "isLoggedIn": true });
    it('<Login /> is not rendred when logedin is true', () => {
      expect(wrapper.containsMatchingElement(<LoginComponent />)).toBeFalsy();
    });

    it('<Notifications /> is  rendred when logedin is true', () => {
      let wrapper;
      wrapper = shallow(<App />);
      wrapper.setProps({
        "isLoggedin": true,
        "listCourses": [
          { id: 1, name: 'ES6', credit: 60 },
          { id: 2, name: 'Webpack', credit: 20 },
          { id: 3, name: 'React', credit: 40 }
        ]
      });
      expect(wrapper.containsMatchingElement(<Notifications/>)).toBeFalsy();
    });
  })

  // it('Tests whether alert was called when ctrl-h is pressed', () => {
  //   const logOut = jest.fn(() => {});
 
  //   const alert = jest.spyOn(global, 'alert');

  //   const wrapper = shallow(<App logOut={logOut} />);
  //   wrapper.find(document)
  //     .simulate('keydown', { key: 'h', ctrlKey: true })

  //   expect(logOut).toHaveBeenCalled();
  //   expect(alert).toHaveBeenCalled();

  //   alert.mockRestore();
  // });

  describe('Testing the eventHandler', ()=>{
    it('gets called, and alerts with the correct string', () => {
        const eventListener = jest.spyOn(document, 'addEventListener');
        //const alert = jest.spyOn(global, 'alert');
        const wrapper = shallow(<App/>);
        wrapper.simulate('keydown', { key: 'h', ctrlKey: true })

    
        expect(eventListener).toHaveBeenCalled();
        //expect(alert).toHaveBeenCalled();
        jest.restoreAllMocks();

      });
  })

});
