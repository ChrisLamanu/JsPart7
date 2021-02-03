let stringTest = "Yippee Ki Yay, motherfucker";

// Method 1
// let getStringLength = string => { 
//     if (string.length == 1) return `La chaîne contient qu'un seul caractère`;  
//     else return `La chaîne contient ${string.length} caractères`;
// };

// Method 2
let getStringLengthShort = str => (str.length == 1) ? `La chaîne contient qu'un seul caractère` : `La chaîne contient ${str.length} caractères`;

console.log(getStringLength(stringTest));