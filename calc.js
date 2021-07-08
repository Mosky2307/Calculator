function add(num1, num2) {
    return num1 + num2
};
function subtract(num1, num2) {
    return num1 - num2
};
function multiply(num1, num2) {
    return num1 * num2
};
function divide(num1, num2) {
    if (num2 === 0) {
        return 'und'
    } else {
    return num1 / num2}
};
function calc(num1, operator, num2) {
    let a =parseInt(num1);
    let b =parseInt(num2);
    if (operator === 'add') {
    return add(a, b)} else 
    if (operator === 'subtract') {
            return subtract(a, b)} else 
            if (operator === 'multiply') {
                return multiply(a, b)
            } else {
                return divide(a, b)
            };
    
}
   const screenContent = document.querySelector('#screenContent')
   screenArray = [0];
   function setscreen() {
       screenContent.textContent = screenArray;};
       document.querySelectorAll('.num').forEach(item => {
        item.addEventListener('click', () => {
            if (screenArray[0] === 0) {
                screenArray = []
            };
            if (screenArray.length < 7) {
          screenArray += item.textContent;
          setscreen();};
        })
      });
calcArray = [];
document.querySelectorAll('.operators').forEach(item => {
    item.addEventListener('click', () => { calcArray.push(screenArray);
    calcArray.push(item.id);
    screenArray = [0];
    setscreen();
    })
})







      let equal = document.querySelector('#equal');
      equal.addEventListener('click', () => {calcArray.push(screenArray);
    screenArray = calc(calcArray[0], calcArray[1], calcArray[2]);
    setscreen();
    screenArray = [0];
    calcArray = [];
    })

    let clear = document.querySelector('#clear');
clear.addEventListener('click', () => 
    {screenArray = [0];
    calcArray = [];
    setscreen();
    })
      




setscreen();
