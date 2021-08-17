import {
  fetchCourseSuccess,
  selectCourse,
  unSelectCourse,
} from "../actions/courseActionCreators";
import { courseReducer, fetchCourseSuccessAction } from "./courseReducer";
import coursesNormalizer from "../schema/courses";
import { fromJS, Map } from "immutable";

const initialState = Map([]);

const courseList = [
  {
    id: 1,
    name: "ES6",
    isSelected: false,
    credit: 60,
  },
  {
    id: 2,
    name: "Webpack",
    isSelected: false,
    credit: 20,
  },
  {
    id: 3,
    name: "React",
    isSelected: false,
    credit: 40,
  },
];

const normalizedCourseList = coursesNormalizer(courseList);

const selectedCourseList = [
  {
    id: 1,
    name: "ES6",
    isSelected: false,
    credit: 60,
  },
  {
    id: 2,
    name: "Webpack",
    isSelected: true,
    credit: 20,
  },
  {
    id: 3,
    name: "React",
    isSelected: false,
    credit: 40,
  },
];

const normalizedSelectedCourseList = coursesNormalizer(selectedCourseList);

describe("courseReducer", () => {
  it("should return an empty Map for the default state", () => {
    const newState = courseReducer(initialState, "");
    expect(newState).toEqual(initialState);
  });

  it("should return data from FETCH_COURSE_SUCCESS with isSelected === false", () => {
    // Task is unclear if we should use action creator for FETCH_COURSE_SUCCESS
    // So I tested using both const fetchCourseSuccessAction in courseReducer
    // And using the fetchCourseSuccess action creator
    const fetchCourseSuccessActionFromCreator = fetchCourseSuccess();
    const newState = courseReducer(initialState, fetchCourseSuccessAction);
    expect(newState.toJS()).toEqual(normalizedCourseList);
    const secondNewState = courseReducer(
      initialState,
      fetchCourseSuccessActionFromCreator
    );
    expect(secondNewState.toJS()).toEqual(normalizedCourseList);
  });

  it("should returns the data with the right course property isSelected === true for SELECT_COURSE", () => {
    const selectCourseAction = selectCourse(2);
    const newState = courseReducer(
      fromJS(normalizedCourseList),
      selectCourseAction
    );
    expect(newState.toJS()).toEqual(normalizedSelectedCourseList);
  });

  it("should returns the data with the right course property isSelected === false for UNSELECT_COURSE", () => {
    const unSelectCourseAction = unSelectCourse(2);
    const newState = courseReducer(
      fromJS(normalizedSelectedCourseList),
      unSelectCourseAction
    );
    expect(newState.toJS()).toEqual(normalizedCourseList);
  });
});
