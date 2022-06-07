// let board = [
//     {"ref":"A0", "cellChar":"O"},
//     {"ref":"A1", "cellChar":"-"},
//     {"ref":"A2", "cellChar":"X"},
//     {"ref":"B0", "cellChar":"-"},
//     {"ref":"B1", "cellChar":"O"},
//     {"ref":"B2", "cellChar":"X"},
//     {"ref":"C0", "cellChar":"X"},
//     {"ref":"C1", "cellChar":"X"},
//     {"ref":"C2", "cellChar":"O"},
// ];

let boardObj = {
    "A0":"-", 
    "A1":"-",
    "A2":"-",
    "B0":"-",
    "B1":"-",
    "B2":"-",
    "C0":"-",
    "C1":"-",
    "C2":"-"
};

let cellrefs = Object.keys(boardObj);
let playerOne = true;
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
    cellrefs.forEach(cellref => refreshTableCell(cellref));
} 
    

// function getCellValue(cellRef) {
//         let element = document.getElementById(cellRef);
//         //console.log(`the cell ${cellRef} is: ${element.innerHTML}`);
//         return element.innerHTML;
// };

// function writeCellValue(cellRef, value) {
//     let element = document.getElementById(cellRef);
//     //console.log(`the cell ${cellRef} is being upddated:\n\tFrom:${element.innerHTML}\n\tTo:${value}`);
//     element.innerHTML = value;
// };

function refreshTableCell(cellref){
    let tbc = document.getElementById(cellref);
    tbc.innerHTML = boardObj[cellref];
}

function setClickEvents() {
    cellrefs.forEach(cellref => {
        document.getElementById(cellref).onclick = () => {
            console.log(`${cellref} was clicked with a value of ${boardObj[cellref]}`);
            setCellValue(cellref);
            document.getElementById(cellref).onclick = null;
        }
    });
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

    for(let i = 0; i < winLines.length; i++){
        console.log(winLines[i]);
        if (winningLineCheck(winLines[i])){
            console.log("We have a winner");
            document.getElementById("winnerMsg").innerHTML = "WE HAVE A WINNER!";
            document.getElementById("winnerMsg").style.visibility = "visible";
            disableBoardClicks();
            document.getElementById("btnReset").style.visibility = "visible";
        }
        else{checkForDraw()}
    }
}

function disableBoardClicks() {
    let ids = Object.keys(boardObj);
    for (let i = 0; i < ids.length; i++){
        document.getElementById(ids[i]).onclick = null;
    }
}

function checkForDraw() {
    let values = Object.values(boardObj);
    if (values.every(e => e !== "-")){
        document.getElementById("header").innerHTML = "THIS IS A DRAW";
    }
}
function loadResetBtn(){
    
    document.getElementById("resetBtm").addEventListener("click",reloadPage);
}

function reloadPage(){
    window.location.reload();
}
    
function winningLineCheck(line){
    let chars = [];
    for (let i=0; i < line.length; i++) {
        let cellref = line[i];
        chars.push(boardObj[cellref]);
        console.log(`cell ${line[i]} = ${boardObj[cellref]}`);
    }
    if (chars[0] == "X" || chars[0] == "O"){
        if (chars[0] == chars[1] && chars[0] == chars[2]){
            for (let i=0; i < line.length; i++) {
                document.getElementById(line[i]).style.backgroundColor = "Green";
            }
            return true;
        }   
    }
    else{ return false}
}

function setCellValue(cellref) {
    let counter = "";
    if (playerOne){counter = "X"}else{counter = "O"}
    boardObj[cellref] = counter; 
    refreshTableCell(cellref);
    checkBoard();
    playerOne = !playerOne;
}

// function toggleCellValue(cellref) {
//     let value = boardObj[cellref];
//     console.log(`start switch case for ${value}`);
//     switch (value) {
//         case 'X':
//             boardObj[cellref] = 'O';
//             console.log("case X executed")
//             refreshTableCell(cellref);
//             checkBoard();
//             break;
//         case 'O':
//             boardObj[cellref] = '-';
//             console.log("case O executed")
//             refreshTableCell(cellref);
//             checkBoard();
//             break;
//         case '-':
//             boardObj[cellref] = 'X';
//             console.log("case - executed")
//             refreshTableCell(cellref);
//             checkBoard();
//             break;
//     }
// }

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