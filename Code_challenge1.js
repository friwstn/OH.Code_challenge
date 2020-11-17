// Instruction
// Create a function that check if an input is a number
const readline = require('readline')
const rl =readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let input="";

function checkNumber() {
// CODE HERE
return;
}

console.log("Belajar angka!\n")
rl.question(`Masukkan angka ya bro:`, input => {
    if (!isNaN(input)){
        console.log("oke bro, mantap")
        rl.close()
    }
    else{
        console.log("itu huruf bro, ANGKA!!!")
    }
})


rl.on("close", () => {
    process.exit()
  })
  



// example
// input = "A" should return FALSE
// input = 10 should return TRUE