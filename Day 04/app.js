///**
// * Created by robert on 7/11/16.
// */
//var doSomething = prompt("What do you like to do?");
//var trimmedDoSomething = doSomething.trim();
//console.log(trimmedDoSomething);
//
//if(trimmedDoSomething === ""){
//    alert("you need to type something.");
//}
//else{
//    alert("awesome!")
//}

//var firstNum = prompt("first number");
//var secondNum = prompt("second number");
//var thirdNum = parseInt(firstNum);
//var fourthNum = parseInt(secondNum);
//
//var fifthNum = alert(thirdNum * fourthNum);
//var sixthNum = alert(thirdNum / fourthNum);
//

//var firstNum = parseInt(prompt("first number"));
//var secondNum = parseInt(prompt("second number"));
//
//if(isNaN(firstNum) || isNaN(secondNum)){
//    alert("please enter a number")
//}
//else{
//    alert(firstNum * secondNum);
//    alert(firstNum / secondNum);
//}
//
//
//var whateverYouWant = "red, blue, yellow, green";
//var array = whateverYouWant.split(",");
//var yellow = array[2];
//console.log(yellow);

//var randomNumber = Math.floor(Math.random() * 11);

function capitalizer(name){
    alert(name.charAt(0).toUpperCase() + name.slice(1));
}

capitalizer('rob');