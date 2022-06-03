let board = [
    {"ref":"A0", "cellChar":"O"},
    {"ref":"A1", "cellChar":"-"},
    {"ref":"A2", "cellChar":"X"},
    {"ref":"B0", "cellChar":"-"},
    {"ref":"B1", "cellChar":"O"},
    {"ref":"B2", "cellChar":"X"},
    {"ref":"C0", "cellChar":"X"},
    {"ref":"C1", "cellChar":"X"},
    {"ref":"C2", "cellChar":"O"},
];

let rows = ["A","B","C"];
let columns = [1,2,3];

//let displayBoard = board.filter(row => row.ref.indexOf("A") > -1).forEach(row => process.stdout.write(` ${row.cellChar} | `+"\n"));

// let displayBoardNew = rows.forEach(rowid => {
//     board.filter(row => row.ref.indexOf(rowid) > -1).forEach(row => process.stdout.write(` ${row.cellChar} | `));
//     process.stdout.write("\n---------------\n")
// })



// let populateTable = board.forEach(cell => document.getElementById(cell.ref).value(cell.cellChar));

// let populateTableTest = board.forEach(cell => console.log(cell.ref));
// let hello = console.log('Hello')

// let testcellwrite = document.getElementById("A0").innerText("hello");

function populateTable() {
    board.forEach(cell => writeCellValue(cell.ref, cell.cellChar));
} 
    

function getCellValue(cellRef) {
        let element = document.getElementById(cellRef);
        //console.log(`the cell ${cellRef} is: ${element.innerHTML}`);
        return element.innerHTML;
};

function writeCellValue(cellRef, value) {
    let element = document.getElementById(cellRef);
    //console.log(`the cell ${cellRef} is being upddated:\n\tFrom:${element.innerHTML}\n\tTo:${value}`);
    element.innerHTML = value;
};

function setClickEvents() {
    board.forEach(cell => {
        document.getElementById(cell.ref).onclick = () => {
            console.log(`${cell.ref} was clicked with a value of ${cell.cellChar}`);
            toggleCellValue(cell);
        }
    });
}

function refreshTableCell(cell){
    let tbc = document.getElementById(cell.ref);
    tbc.innerHTML = cell.cellChar;
}

function checkBoard() {
    const winLines = [
    // winning horisontal
     ["A0", "A1", "A2"],
     ["B0", "B1", "B2"],
     ["C0", "C1", "C2"],
    // wining vertical
     ["A0", "B0", "C0"],
     ["A1", "B1", "C1"],
     ["A2", "B2", "C2"],
    // wining diagnal
     ["A0", "B1", "C2"],
     ["A2", "B1", "C0"]
    ]
    //  need to read about _.pick https://stackoverflow.com/questions/42773366/compare-object-with-an-array

    var result = _.pick(winLines, _.map(board.ref, function(e) {
        return e;
      }));
}
    


function toggleCellValue(cell) {
    let x = cell.cellChar;
    console.log(`start switch case for ${x}`);
    switch (x) {
        case 'X':
            cell.cellChar = 'O';
            console.log("case x executed")
            refreshTableCell(cell);
            break;
        case 'O':
            cell.cellChar = '-';
            console.log("case O executed")
            refreshTableCell(cell);
            break;
        case '-':
            cell.cellChar = 'X';
            console.log("case - executed")
            refreshTableCell(cell);
            break;
    }
}

//console.log(displayBoardNew);
function init(){
    console.log("Page is now loaded");
    // getCellValue("A0");
    // writeCellValue("A0","newValue");
    //checkValue("C0");
    setClickEvents();
    populateTable();
}

document.addEventListener("DOMContentLoaded", () => init());