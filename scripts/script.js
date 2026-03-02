console.log("Script loaded!");


function moveTheThing(){
    const theThing = document.getElementById("theThing");
    const leftBlock = document.getElementById("leftBlock");
    const rightBlock = document.getElementById("rightBlock");
    // rightBlock.className = "box2";
    
    // rightBlock.appendChild(theThing)

    if (theThing.parentElement===leftBlock) {
        rightBlock.appendChild(theThing)
    } else {
        leftBlock.appendChild(theThing)
    }
    
    // leftBlock.appendChild(theThing)
    

}

function styleTheText(){
    const fancyText = document.getElementById("fancyText")

    fancyText.style.color="red";
    fancyText.style.font="Courier New, monospace";
    fancyText.style.fontSize="24px";
}

function getFormValues(){
    const firstField = document.getElementById("firstField");
    const secondField = document.getElementById("secondField");
    const thirdField = document.getElementById("thirdField");
    const firstResult = document.getElementById("firstResult");
    const secondResult = document.getElementById("secondResult");
    const thirdResult = document.getElementById("thirdResult")
    firstResult.textContent=firstField.value
    secondResult.textContent=secondField.value
    if (thirdField.checked) {
        thirdResult.textContent="Checked"
    } else {
        thirdResult.textContent="Not Checked"
    }

}

function countTheStuff(){
    const countOfP = document.getElementById("countOfP");
    const countOfH2 = document.getElementById("countOfH2");
    const countOfTD = document.getElementById("countOfTD");
    const countP = document.getElementsByTagName("p")
    const countH2 = document.getElementsByTagName("h2")
    const countTD = document.getElementsByTagName("td")
    countOfP.textContent=countP.length;
    countOfH2.textContent=countH2.length;
    countOfTD.textContent=countTD.length;
    

}

function addNewRow(){
    const addRowsTable = document.getElementById("addRowsTable");
    const addRow = addRowsTable.insertRow(-1);
    const rowCount = document.getElementsByTagName("td").length;
    const cell1 = addRow.insertCell(0);
    // const cell2 = addRow.insertCell(1);
    cell1.textContent=rowCount-5


}

function yourBonusChallenge(){
    // Your code here
}