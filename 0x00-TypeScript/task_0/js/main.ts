
interface Istudent {
    firstName: string;
    lastName: string;
    age: number;
    location: string;

}


const student1: Istudent = {
    firstName: "st1",
    lastName: "st11",
    age: 1,
    location:"std"
}
const student2: Istudent = {
    firstName: "st2",
    lastName: "st12",
    age: 2,
    location:"std"
}
const headers = ["firstName", "location"];

const studentsList: Array<Istudent> = [student1, student2];


function generateTableHead(table: HTMLTableElement,headers: string[]): void {
    const thead = table.createTHead();
    const row = thead.insertRow();

    headers.forEach((headerTitle) =>{
        const th = document.createElement("th");
        const text = document.createTextNode(headerTitle);
        th.appendChild(text);
        row.appendChild(th);
    })
  }



function generateTable(table: HTMLTableElement, data: Istudent[]): void{
    data.forEach((element: Istudent)=> {
        let row = table.insertRow();
        let cell1 = row.insertCell();
        let text1 = document.createTextNode(element.firstName);
        cell1.appendChild(text1)
        let cell2 = row.insertCell();
        let text2 = document.createTextNode(element.location);
        cell2.appendChild(text2);
    });
}


const body = document.getElementsByTagName("body")[0];
const table = document.createElement("table");
body.appendChild(table)

generateTableHead(table, headers);
generateTable(table, studentsList);






