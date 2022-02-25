var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0;


adicionar.addEventListener ("click",increment);

function increment () {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
 
}

subtrair.addEventListener ("click",decrement);

function decrement () {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    {
    if (currentNumber <= 0)
        currentNumber++;
    }
}