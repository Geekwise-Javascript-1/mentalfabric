/**
 * Created by robert on 7/13/16.
 */


function ask(){
    var question = prompt("what would you like to do?");
    console.log(question);
    console.log(typeof(question));
    if ( !question ){
        alert("no really, what do you want to do?");
        ask();
    }
    else{
        alert("YASSSS!");
    }
}
ask();

//for (ask = prompt('what would you like to do?'); ask == ''; ask){
//    alert('no really, what would you like to do?');
//    var ask = prompt('what would you like to do?');
//}
//
//
//var ask = prompt('what would you like to do?')



