// Write if-else statements to fulfill the following conditions:
// if score morethan 60 you pass otherwise you failed


function testScore(num) {
  // code below this line
  // Terniary operator
  return (num >= 60 ? `Passed` : `Failed`)
}

console.log(testScore(50));
console.log(testScore(90));

/*
// using if-else
function testScore(num){
  
  if (num > 60) {
      console.log("Passed")
      
  }else{
      console.log("Failed")
  }  
  return 
}
console.log(testScore(70))
console.log(testScore(50));
console.log(testScore(90));
*/


//testScore(50) should return "Failed"
//testScore(90) should return "Passed"

