/* document.write("This is written from JavaScript");
document.getElementsByTagName('h2');
var heading2 = document.getElementsByTagName('h2')[0];
heading2.style.color = 'red'; */

var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

/*let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
}

function test() {
	kdowkdpo;
}*/