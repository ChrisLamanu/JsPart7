let boldBtn = document.getElementById("boldBtn");
let colorBtn = document.getElementById("colorBtn");
let sizeBtn = document.getElementById("sizeBtn");
let txt = document.getElementById("txt");

let sizeIndex = 0; // Define&Incrementing the index of the array on click, if the index if the array lenght he will be reset to 0 
let sizeMaxNbOfChange = 5; // Define the max size store in the array
let sizeChangeValue = 0.2; // Define the size added on each click
let sizeArray = []; // Define where all the value size are stored
for (let i = 0; i < sizeMaxNbOfChange; i++) {
    sizeArray[i] = 1 + (sizeChangeValue * i);
    // console.log(`Size array contain ${sizeArray[i]} at index : ${i}`);
}

boldBtn.addEventListener("click", boldFunction);
colorBtn.addEventListener("click", colorFunction);
sizeBtn.addEventListener("click", sizeFunction);

function boldFunction() {
    (txt.style.fontWeight == "bold") ? txt.style.fontWeight = "normal" : txt.style.fontWeight = "bold";

    // if (txt.style.fontWeight == "bold") {
    //     txt.style.fontWeight = "normal";
    // }
    // else {
    //     txt.style.fontWeight = "bold";
    // }
}

function colorFunction() {
    // Randomize colors on click
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    // console.log(`rgb(${r}, ${g}, ${b})`);
    txt.style.color = `rgb(${r}, ${g}, ${b})`;
}

function sizeFunction() {
    (sizeIndex < sizeArray.length - 1) ? sizeIndex++ : sizeIndex = 0;
    txt.style.fontSize = sizeArray[sizeIndex] + "rem";

    // if (sizeIndex < sizeArray.length - 1) {
    //     sizeIndex++;
    // }
    // else {
    //     sizeIndex = 0;
    // } 
}

