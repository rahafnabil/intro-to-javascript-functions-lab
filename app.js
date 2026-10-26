



//////////////////////////////
//exercise 1
function generateEmail(username, domain) {
  return `${username}@${domain}`
}

// Test the function
console.log('Exercise 1 Result:', generateEmail("sara", "company.com")) // sara@company.com
console.log('Exercise 1 Result:', generateEmail("ali", "example.com")) // ali@example.com
console.log('Exercise 1 Result:', generateEmail("fatima", "school.edu")) // fatima@school.edu
////////////////////////////////

/////////////////////////
//exercise 2
// Write your function here

function greetUser(name, timeOfDay){
    return`Good ${timeOfDay}, ${name}!`
}


console.log('Exercise 2 Result:', greetUser("Sara", "morning")) // Good morning, Sara!
console.log('Exercise 2 Result:', greetUser("Ali", "afternoon")) // Good afternoon, Ali!
console.log('Exercise 2 Result:', greetUser("Fatima", "evening")) // Good evening, Fatima!
////////////////////////////////////////
//exercise 3


function calculateVAT(price,vatPercentage){
    return  (price/100)*vatPercentage

}



// Test your function
console.log('Exercise 3 Result:', calculateVAT(50, 10)) // 5
console.log('Exercise 3 Result:', calculateVAT(100, 10)) // 10
console.log('Exercise 3 Result:', calculateVAT(200, 5)) // 10

/////////////////////////
//exercise 4

function checkStock(quantity){
    if (quantity>0){
        return "in stock"
    }
    else{
        return "out of stock"
    }
}



// Test your function
console.log('Exercise 4 Result:', checkStock(10)) // In stock
console.log('Exercise 4 Result:', checkStock(0))  // Out of stock
console.log('Exercise 4 Result:', checkStock(1))  // In stock
////////////////////
//exercise 5
// Write your function here

function maxOfTwoNumbers(numA,numB){
    if(numA>=numB){
        return numA
    }
    else{
        return numB
    }

}


console.log('Exercise 5 Result:', maxOfTwoNumbers(3, 9)) // 9
console.log('Exercise 5 Result:', maxOfTwoNumbers(15, 4)) // 15
console.log('Exercise 5 Result:', maxOfTwoNumbers(7, 7)) // 7
////////////////////////
//exercise 6


function isCharAVowel(char){
    if((char==='a')||(char==='e')||(char==='i')||(char==='o')||(char==='u')){
        return true
    }
    else{ return false}
}


console.log('Exercise 6 Result:', isCharAVowel("a")) // true
console.log('Exercise 6 Result:', isCharAVowel("e")) // true
console.log('Exercise 6 Result:', isCharAVowel("b")) // false
console.log('Exercise 6 Result:', isCharAVowel("y")) // false

//////////////////////////
//exercise 7

function maxOfThree(numA,numB,numC){
    if ((numA<numB)&&(numC<numB)){
        return numB
    }
    else if ((numA<numC)&&(numB<numC)){
        return numC
    }
    else{return numA}
}


// Test your function
console.log('Exercise 7 Result:', maxOfThree(5, 10, 8)) // 10
console.log('Exercise 7 Result:', maxOfThree(20, 5, 10)) // 20
console.log('Exercise 7 Result:', maxOfThree(3, 7, 15)) // 15
console.log('Exercise 7 Result:', maxOfThree(8, 8, 4)) // 8
///////////////////
//exercise 8

function convertTemperature(temperature,scale){
    if (scale==="C"){
        return ((temperature * 9 / 5) + 32)
    }
    else if (scale==="F"){
        return ((temperature - 32) * 5 / 9)
    }
}



// Test your function
console.log('Exercise 8 Result:', convertTemperature(0, "C")) // 32
console.log('Exercise 8 Result:', convertTemperature(32, "C")) // 89.6
console.log('Exercise 8 Result:', convertTemperature(32, "F")) // 0
console.log('Exercise 8 Result:', convertTemperature(212, "F")) // 100
////////////////////////////////////
//exercise 9
// Write your function here
function basicCalculator(numA,numB,operation){
    if (operation==="add"){
        return numA+numB
    }
    else if(operation==="subtract"){
        return numA-numB
    }
    else if (operation==="divide"){
        return numA/numB
    }
    else if (operation==="multiply"){
        return numA*numB
    }
}


// Test your function
console.log('Exercise 9 Result:', basicCalculator(10, 5, "add")) // 15
console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract")) // 5
console.log('Exercise 9 Result:', basicCalculator(10, 5, "multiply")) // 50
console.log('Exercise 9 Result:', basicCalculator(10, 5, "divide")) // 2
//////////////////////////////////
//exercise 10

function calculateGrade(grade){
    if(grade>=90){
        return "A"
    }
    else if(grade>=80&&grade<90){
        return "B"
    }
    else if(grade>=70&&grade<80){
        return "C"
    }
    else if(grade>=60&&grade<70){
        return "D"
    }
    else if(grade<60){
        return "F"
    }
}


console.log('Exercise 10 Result:', calculateGrade(85)); //B
console.log('Exercise 10 Result:', calculateGrade(100)); //A
console.log('Exercise 10 Result:', calculateGrade(72)); //C
console.log('Exercise 10 Result:', calculateGrade(59)); //F
/////////////////////////////
//exercise 11

function createUsername (fName, lName){
    return (fName.slice(0, 3)+lName.slice(0, 3)+((fName+lName).length))
}


console.log('Exercise 11 Result:', createUsername("Samantha", "Green")); //SamGre13
console.log('Exercise 11 Result:', createUsername("Rahaf", "Nabil")); //RahNab10
console.log('Exercise 11 Result:', createUsername("Sara", "Hassan")); //SarHas10
////////////////////////////
//exercise 12
/*
Exercise 12: numArgs()

Challenge yourself with numArgs. 
This function should return the count of arguments passed to it when called.

Complete the exercise in the space below:
*/
function numArgs (...score){
    return score.length
}


console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4)); //4
console.log('Exercise 12 Result:', numArgs(231, 92, 93, 189,68,89,67,568,67)); //9
