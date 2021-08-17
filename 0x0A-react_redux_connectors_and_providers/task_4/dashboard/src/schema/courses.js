import { normalize, schema } from "normalizr";

const courseSchema = new schema.Entity("courses");

export default function coursesNormalizer(data) {
  return normalize(data, [courseSchema]);
}
