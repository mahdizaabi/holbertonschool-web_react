import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from "../actions/courseActionTypes";

export function courseReducer(state = [], action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS: {
      return action.data.map((course) => ({
        id: course.id,
        name: course.name,
        isSelected: false,
        credit: course.credit,
      }));
    }
    case SELECT_COURSE: {
      return state.map((course) => {
        if (course.id === action.index) {
          return {
            ...course,
            isSelected: true,
          };
        } else return { ...course };
      });
    }
    case UNSELECT_COURSE: {
      return state.map((course) => {
        if (course.id === action.index) {
          return {
            ...course,
            isSelected: false,
          };
        } else return { ...course };
      });
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
