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
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}
class StudentClass implements StudentClassInterface {
     firstName: string;
     lastName: string;
    constructor(firstName:string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework():string{
        return "Currently working";
    }
    displayName():string{
        return this.firstName;
    }
}

interface StudentConstructor {
    (firstName: string, lastName: string): StudentClassInterface;
  } 

  
  
  const ins = new StudentClass("émahd", "émlml");
  console.log(ins.displayName())
  console.log(ins.workOnHomework())
