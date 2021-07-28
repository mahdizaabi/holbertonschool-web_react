import { Seq } from 'immutable';

const printBestStudents = (students) => {
  const filteredStudents = Seq(students)
    .filter((student) => student.score >= 70)
    .map((filtredStudent) => ({
      ...filtredStudent,
      firstName: student.firstName[0].toUpperCase() + student.firstName.slice(1),
      lastName: student.lastName[0].toUpperCase() + student.lastName.slice(1),
    })).toObject();

  console.log(filteredStudents);
};

export default printBestStudents;
