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
    let answer = num1 / num2;
    return (Math.round(answer * 100) / 100) }
};
function calc(num1, operator, num2) {
    let a =parseFloat(num1);
    let b =parseFloat(num2);
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
            if (screenArray.length === undefined) {
            screenArray = []
            screenArray += item.textContent;
            setscreen();
          } else {
            screenArray += item.textContent;
            setscreen();
          }
          if (screenContent.textContent.length > 7) {
            let newFont = 80;
           for (let i = 7; i<screenContent.textContent.length; i++) 
           {newFont *= 7/8;};
           screenContent.style.fontSize = `${newFont}px`;
          }
        })
      });
calcArray = [];
document.querySelectorAll('.operators').forEach(item => {
    item.addEventListener('click', () => { 
        
        calcArray.push(screenArray);
        if (calcArray.length === 3) {
            screenArray = calc(calcArray[0], calcArray[1], calcArray[2]);
            setscreen();
            calcArray = [];
            calcArray.push(screenArray);
            calcArray.push(item.id);
        } else {
    calcArray.push(item.id);
    screenArray = [0];
    setscreen();
 }
 if (screenContent.textContent.length > 7) {
    let newFont = 80;
   for (let i = 7; i<screenContent.textContent.length; i++) 
   newFont *= 7/8;
   screenContent.style.fontSize = `${newFont}px`}
    })
})







      let equal = document.querySelector('#equal');
      equal.addEventListener('click', () => {
          if (calcArray === 2) {} else {

          
        calcArray.push(screenArray);
    screenArray = calc(calcArray[0], calcArray[1], calcArray[2]);
    setscreen();
    if (screenContent.textContent.length > 7) {
        let newFont = 80;
       for (let i = 7; i<screenContent.textContent.length; i++) 
       newFont *= 7/8;
       screenContent.style.fontSize = `${newFont}px`}
    };
    calcArray = [];
    })

    let clear = document.querySelector('#clear');
clear.addEventListener('click', () => 
    {screenArray = [0];
    calcArray = [];
    setscreen();
    });
setscreen();