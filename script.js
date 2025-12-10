console.log("Welcome to JavaScript Demonstration!");

console.log("\n---Demonstrating String Methods: replaceAll() and trim()---");
let input1 = "ba l am an";
console.log("Input 1:", input1);
let output1 = input1.replaceAll(" ","");
console.log("Output 1:", output1); 

let input2 = "Cl yde Balama n ";
console.log("\nInput 2:", input2);
let output2 = input2.replaceAll(" ","");
console.log("Output 2:", output2);

let input3 ="       CCIS ";
console.log("\nInput 3:", input3);
let output3 = input3.trim();
console.log("Output 3:", output3);


console.log("\n---Demonstrating String Method: includes()---");
let sentence1 = "JavaScript is easy";
console.log(sentence1);
let word1 = "easy";
console.log("Keyword: " + word1);
let find1 = sentence1.includes(word1);
if(find1){
    console.log("The word \"" + word1 +"\" is found in the sentence.");
}else{
    console.log("The word \"" + word1 + "\" is not found in the sentence." );
}

console.log("\n");
let sentence2 = "Web Programming";
console.log(sentence2);
let word2 = "Java";
console.log("Keyword: " +   word2);
let find2 = sentence2.includes(word2);
if(find2){
    console.log("The word \"" + word2 +"\" is FOUND in the sentence.");
}else{
    console.log("The word \"" + word2 + "\" is NOT found in the sentence." );
}

console.log("\n---Demonstrating String Method: replaceAll()---");
let sentence = "I love PHP PHP Javascript";
console.log("Input 1:", sentence);
let output = sentence.replaceAll("PHP","");
console.log("Output 1:", output); 


console.log("\n---Demonstrating String Method: trim() and length---");
let count = "Hello World";
console.log("Word:", count);
let trimmed = count.trim();
console.log("Count:", trimmed.length);


console.log("\n---Demonstrating String Method: includes() for Email Validation---");
let email1 = "student@email.com";
console.log(email1);
let check1 = "@";
console.log("Check: " + check1);
let validity1 = email1.includes(check1);
if(validity1){
    console.log("The email \"" + check1 +"\" is VALID.");
}else{
    console.log("The email \"" + check1 + "\" is INVALID." );
}

console.log("\n");
let email2 = "studentemail.com";
console.log(email2);
let check2 = "@";
console.log("Check: " + check2);
let validity2 = email2.includes(check2);
if(validity2){
    console.log("The email \"" + check2 +"\" is VALID.");
}else{
    console.log("The email \"" + check2 + "\" is INVALID." );
}





function replaceAll() {
    let input = document.getElementById("input1").value;
    let result = input.replaceAll(" ", "");
    document.getElementById("result1").textContent = result;
}


function searchWord() {
    let sentence = document.getElementById("sentence2").value;
    let word = document.getElementById("word2").value;
    let found = sentence.includes(word);
    
    if (found) {
        document.getElementById("result2").textContent = "Found";
    } else {
        document.getElementById("result2").textContent = "Not Found";
    }
}


function removeWord() {
    let sentence = document.getElementById("sentence3").value;
    let word = document.getElementById("word3").value;
    let result = sentence.replaceAll(word, "");
    document.getElementById("result3").textContent = result;
}


function countCharacters() {
    let input = document.getElementById("input4").value;
    let trimmed = input.trim();
    let count = trimmed.length;
    document.getElementById("result4").textContent = count;
}


function validateEmail() {
    let email = document.getElementById("email5").value;
    let isValid = email.includes("@");
    
    if (isValid) {
        document.getElementById("result5").textContent = "Valid";
    } else {
        document.getElementById("result5").textContent = "Invalid";
    }
}

// Author: Arl Dominyq A. Frani
// Description: M1-FA3 created by Arl Dominyq A. Frani.