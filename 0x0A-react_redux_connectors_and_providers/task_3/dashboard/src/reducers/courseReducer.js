import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from "../actions/courseActionTypes";
import { Map } from "immutable";
import coursesNormalizer from "../schema/courses";

const initialState = Map();

export function courseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS: {
      const fullCourseObjs = action.data.map((course) => ({
        id: course.id,
        name: course.name,
        isSelected: false,
        credit: course.credit,
      }));
      const allCourses = coursesNormalizer(fullCourseObjs);
      return state.merge(allCourses);
    }
    case SELECT_COURSE: {
      return state.setIn(
        ["entities", "courses", action.index.toString(), "isSelected"],
        true
      );
    }
    case UNSELECT_COURSE: {
      return state.setIn(
        ["entities", "courses", action.index.toString(), "isSelected"],
        false
      );
    }
    default:
      return state;
  }
}

export const fetchCourseSuccessAction = {
  type: FETCH_COURSE_SUCCESS,
  data: [
    {
      id: 1,
      name: "ES6",
      credit: 60,
    },
    {
      id: 2,
      name: "Webpack",
      credit: 20,
    },
    {
      id: 3,
      name: "React",
      credit: 40,
    },
  ],
};
