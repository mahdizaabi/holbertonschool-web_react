import { Seq } from 'immutable';

const printBestStudents = (students) => {
  const filteredStudents = Seq(students)
    .filter((student) => student.score >= 70)
    .map((filtredStudent) => ({
      ...filtredStudent,
      firstName: filtredStudent.firstName[0].toUpperCase() + filtredStudent.firstName.slice(1),
      lastName: filtredStudent.lastName[0].toUpperCase() + filtredStudent.lastName.slice(1),
    })).toObject();

  console.log(filteredStudents);
};

export default printBestStudents;
