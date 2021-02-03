let resetBorder;

function changeBorder(id) {
    let input = document.getElementById(id);

    if (!resetBorder) {
        input.style.borderColor = "black";
        resetBorder = true;
    }
    else {
        input.removeAttribute("style", "border-color");
        resetBorder = false;
    }
}

let num_a = document.getElementById("num_a");
let num_b = document.getElementById("num_b");
let btnCalcul = document.getElementById("btnCalcul");

// Method 1
btnCalcul.addEventListener("click", calculMultiplication.bind(this, num_a, num_b));

// Method 2
// btnCalcul.addEventListener("click", function() {
//     test2(num_a, num_b);
// });

function calculMultiplication (a, b) {
    let result = a.value * b.value;
    console.log(result);
    return result; 
}