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
    return num1 / num2
};
function calc(num1, operator, num2) {
   return operator(num1, num2)};
   const one = document.querySelector('#one');
   const screenContent = document.querySelector('#screenContent')
   screenArray = [0]
   function setscreen() {
       screenContent.textContent = screenArray;};
       document.querySelectorAll('.num').forEach(item => {
        item.addEventListener('click', () => {
            if (screenArray.length < 7) {
          screenArray += item.textContent;
          setscreen();}
        })
      })
      




setscreen();
