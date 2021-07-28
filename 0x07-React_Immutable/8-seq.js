import { Seq } from 'immutable';

const printBestStudents = (students) => {
  const filteredStudents = Seq(students)
    .filter((student) => student.score >= 70)
    .map((studentObj) => {
      const student = studentObj;
      student.firstName = student.firstName[0].toUpperCase() + student.firstName.slice(1);
      student.lastName = student.lastName[0].toUpperCase() + student.lastName.slice(1);
      return student;
    }).toObject();

  console.log(filteredStudents);
};

export default printBestStudents;