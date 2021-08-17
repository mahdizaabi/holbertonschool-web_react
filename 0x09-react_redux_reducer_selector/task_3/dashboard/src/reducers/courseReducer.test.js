import {
  fetchCourseSuccess,
  selectCourse,
  unSelectCourse,
} from "../actions/courseActionCreators";
import { courseReducer, fetchCourseSuccessAction } from "./courseReducer";

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

describe("courseReducer", () => {
  it("should return an empty array for the default state", () => {
    const newState = courseReducer(undefined, "");
    expect(newState).toEqual([]);
  });

  it("should return data from FETCH_COURSE_SUCCESS with isSelected === false", () => {
    // Task is unclear if we should use action creator for FETCH_COURSE_SUCCESS
    // So I tested using both const fetchCourseSuccessAction in courseReducer
    // And using the fetchCourseSuccess action creator
    const fetchCourseSuccessActionFromCreator = fetchCourseSuccess();
    const newState = courseReducer([], fetchCourseSuccessAction);
    expect(newState).toEqual(courseList);
    const secondNewState = courseReducer(
      [],
      fetchCourseSuccessActionFromCreator
    );
    expect(secondNewState).toEqual(courseList);
  });

  it("should returns the data with the right course property isSelected === true for SELECT_COURSE", () => {
    const selectCourseAction = selectCourse(2);
    const newState = courseReducer(courseList, selectCourseAction);
    expect(newState).toEqual(selectedCourseList);
  });

  it("should returns the data with the right course property isSelected === false for UNSELECT_COURSE", () => {
    const unSelectCourseAction = unSelectCourse(2);
    const newState = courseReducer(selectedCourseList, unSelectCourseAction);
    expect(newState).toEqual(courseList);
  });
});
