// Instruction
// Create a function to multiply the inputs
// Your code should validate the input only accept the NUMBER type and cannot BLANK

function multiply(num1, num2) {
// Validation
if (typeof num1 !== "number" || typeof num2 !== "number"){
    console.log("Please provide number")
}else if(typeof num1 == "string" || typeof num2 == "null"){
    console.log("angka bos")
}else if(typeof num1 == "undefined" || typeof num2 == "undefined"){
    console.log("masukan nilainya")
}else{
    console.log("bagus, hasilnya dibawah")
}  
return num1*num2
}

var resultMultiply = multiply( 12, 3 );
console.log(resultMultiply)


// example
// num1 = 2, num2 = 4, return 8
// num1 = "2", num2 = 4, return "Please provide a number only!"
// num1 = true, num2 = null, return "Please provide a number only!"
// num1 UNDEFINED, num2 = "2", return "Please provide a value!"