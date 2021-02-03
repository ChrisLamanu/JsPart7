let imgBody = document.getElementById("imgBody");

let imgResize = () => (imgBody.style.transform != "scale(1.5)") ? imgBody.style.transform = "scale(1.5)" : imgBody.style.transform = "scale(1)";

imgBody.addEventListener("click", imgResize);