interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
    
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}
const printTeacher:printTeacherFunction =  (firstName: string,lastName: string): string => `${firstName.charAt(0)}. ${lastName}`;

console.log(printTeacher("mahdi", "zaabi"));
