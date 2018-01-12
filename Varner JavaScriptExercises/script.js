//Exercise 1

var greeting= "Enter a number <5!"
var userNumber= prompt(greeting);
var total=0;
console.log(userNumber);

for (var num = 1; num <= userNumber; num++) {
  total= total + num;
}

console.log(total)




//Exercise 2


var word;
var sentence=''
var userAnswer= prompt("Do you want to play?");
  do{
    word= prompt("Enter a word");
    play= prompt("Do you want to play again?");
    sentence= sentence + ' ' + word;
    console.log(sentence);
  }while(play=='yes')



//Exercise 3

var again;

var firstName= prompt('What is your first name?');
var question= prompt('Would you like to print your name?');
alert ('Hello my name is'+ ' ' + firstName);
again= prompt('would you like to print this again?')

while (again=='yes') {
  alert( 'Hello my name is'+ ' ' + firstName + '!');
  again= prompt('would you like to print this again?')
  alert('Hello my name is' + ' ' + firstName + '!!');
  again= prompt('would you like to print this again?');
  alert('Hello my name is' + ' ' + firstName + '!!!');
  again= prompt('would you like to print this again?');
}


//Exercise 4

var start= "What time of day is it?";
var timeDay= prompt(start);
console.log(timeDay);
var morning= "since it is the morning. you should be eating breakfast. We suggest eggs and toast.";
var noon= "since it is the afternoon, you should be eating lunch. We suggest a salad.";
var evening= "since it is the evening, you should be eating dinner. We suggest chicken and rice.";

if (timeDay=='morning') {
  console.log(morning);
}
if (timeDay=='noon') {
  console.log(noon);
}
if (timeDay=='evening') {
  console.log(evening);
}
