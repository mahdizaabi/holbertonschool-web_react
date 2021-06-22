
interface myInterface {
    firstName:string,
    lastName: string,
    age:number,
    location:string

}

const studentList: myInterface[] = [];
const student1: myInterface = {
    firstName: "st1",
    lastName: "st11",
    age: 1,
    location:"std"
}
const student2: myInterface = {
    firstName: "st2",
    lastName: "st12",
    age: 2,
    location:"std"
}

const studentsList: Array<myInterface> = [student1, student2];

const body = document.getElementsByTagName("body")[0];

const tableComponent = document.createElement("table");
tableComponent.innerHTML  += `<tr>
<th>firstName</th>
<th>location</th>
</tr>`
body.appendChild(tableComponent);

const studentComponent = (student: myInterface):string => `<tr>
<td>${student.firstName}</td>
<td>${student.location}</td>
</tr>`

studentsList.forEach((student: myInterface)=>{
    tableComponent.innerHTML += studentComponent(student);
})








