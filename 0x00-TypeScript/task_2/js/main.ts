interface DirectorInterface {
    workFromHome():string;
    getCoffeeBreak():string;
    workDirectorTasks():string;
}

interface TeacherInterface {
    workFromHome():string;
    getCoffeeBreak():string;
    workTeacherTasks():string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        throw new Error("Working from home");
    }
    getCoffeeBreak(): string {
        throw new Error("Getting a coffee break");
    }
    workDirectorTasks(): string {
        throw new Error("Getting to director tasks");
    }
    
}

class Teacher implements TeacherInterface{
    workFromHome(): string {
        throw new Error("Cannot work from home");
    }
    getCoffeeBreak(): string {
        throw new Error("Cannot have a break");
    }
    workTeacherTasks(): string {
        throw new Error("Getting to work");
    }
    
}

const createEmployee = (salary: (number | string)): (Director | Teacher) => {
    if(salary < 500)
        return new Teacher();
    return new Director();
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee(2000));
