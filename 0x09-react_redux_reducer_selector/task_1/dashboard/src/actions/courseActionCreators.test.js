import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { selectCourse, unSelectCourse } from "./courseActionCreators";

describe("courseActions", () => {
  it("should return correct value for selectCourse()", () => {
    const result = selectCourse(1);
    expect(result).toEqual({ type: SELECT_COURSE, index: 1 });
  });

  it("should return correct value for unselectCourse()", () => {
    const result = unSelectCourse(1);
    expect(result).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });
});
