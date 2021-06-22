
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;

}

const student1: Istudent = {
    firstName: "Ptarick",
    lastName: "Jean luca",
    age: 1,
    location:"Paris sur mer"
}
const student2: Istudent = {
    firstName: "Lisa",
    lastName: "Sandrino",
    age: 2,
    location:"New York"
}
const headers: string[] = ["firstName", "location"];

const studentsList: Array<Istudent> = [student1, student2];

function generateTableHead(table: HTMLTableElement,headers: string[]): void {
    const thead: HTMLTableSectionElement  = table.createTHead();
    const row: HTMLTableRowElement   = thead.insertRow();

    headers.forEach((headerTitle, index) =>{
        const cell: HTMLTableDataCellElement = row.insertCell(index);
        const text: Text = document.createTextNode(headerTitle);
        cell.appendChild(text)
        thead.appendChild(row)
    })
  }

function generateTable(table: HTMLTableElement, data: Istudent[]): void{
    const tbody: HTMLTableSectionElement = document.createElement("tbody");
    table.appendChild(tbody);
    data.forEach((element: Istudent)=> {
        const row: HTMLTableRowElement = tbody.insertRow();
        const cell1: HTMLTableDataCellElement = row.insertCell(0);
        const text1: Text = document.createTextNode(element.firstName);
        cell1.appendChild(text1)
        const cell2: HTMLTableDataCellElement = row.insertCell(1);
        const text2: Text = document.createTextNode(element.location);
        cell2.appendChild(text2);
    });
}

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement("table");
body.appendChild(table)

generateTableHead(table, headers);
generateTable(table, studentsList);






