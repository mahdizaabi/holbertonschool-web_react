
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

studentList.push(student1);
studentList.push(student2);

const body = document.getElementsByTagName("body")[0];

const tableComponent = document.createElement("table");
tableComponent.innerHTML  += `<tr>
<th>Firstname</th>
<th>Lastname</th>
<th>Location</th>
</tr>`
body.appendChild(tableComponent);

const studentComponent = (student: myInterface) => `<tr>
<td>${student.firstName}</td>
<td>${student.lastName}</td>
<td>${student.location}</td>
</tr>`

studentList.forEach((student)=>{
    tableComponent.innerHTML += studentComponent(student);
})








