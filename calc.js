const display = document.getElementById('display');
function appendToDisplay(input){
    const operators = ['+', '-', '*', '/'];
    const lastChar = display.value.slice(-1);

    // If input is an operator and lastChar is also an operator, do nothing
    if (operators.includes(input) && operators.includes(lastChar)) {
        return;
    }
    display.value += input;
}
function calculate(){
    try{
        display.value = eval(display.value);
    }catch(error){
        display.value = 'Error';
    }
}
function clearDisplay(){
    display.value = '';
}
function deleteLast(){
    display.value = display.value.slice(0, -1);
}