



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
