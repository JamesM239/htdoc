var firstadject = prompt("The _______ man walked into the * ");
var firstnoun = prompt("The * man walked into the _____");
var firstverb = prompt("He _____ at the places bar to order a cold drink.");
var secondverb = prompt("The waiter asked what he _____");
var secondnoun = prompt("so he ordered an ice-cold ______");
var secondadject = prompt("He paid for his _____ drink");

var output = "A " + firstadject + " man walked into the " + firstnoun + ". He " + firstverb + " at the places bar to order a cold drink. The waiter asked what he " + secondverb + " so he ordered an ice-cold " + secondnoun + ". He paid for his " + secondadject + " drink and left without saying another word.";

var element = document.getElementById("AnswerField").innerHTML = output;
