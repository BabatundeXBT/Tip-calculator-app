const bill = document.querySelector('#bill');
const numberOfPerson = document.getElementById('person');
const tipAmount = document.querySelector('.tip-amount');
const totalPerson = document.querySelector('.total-person');
let tip;

// reset button
const reset = document.querySelector('.reset');

const clear = () => {
  bill.value = 0;
  numberOfPerson.value = 0;
  tipAmount.textContent = "0.00";
  totalPerson.textContent = "0.00";
};
reset.addEventListener('click', clear);

// button containing percentage
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');
const custom = document.querySelector('.custom');

btn1.addEventListener('click', function () {
  tip = (bill.value * (5 / 100)) / numberOfPerson.value;
  tipAmount.textContent = tip.toFixed(2);
  totalPerson.textContent = (bill.value / numberOfPerson.value + tip).toFixed(2);
});

btn2.addEventListener('click', function () {
  tip = (bill.value * (10 / 100)) / numberOfPerson.value;
  tipAmount.textContent = tip.toFixed(2);
  totalPerson.textContent = (bill.value / numberOfPerson.value + tip).toFixed(2);
});

btn3.addEventListener('click', function () {
  tip = (bill.value * (15 / 100)) / numberOfPerson.value;
  tipAmount.textContent = tip.toFixed(2);
  totalPerson.textContent = (bill.value / numberOfPerson.value + tip).toFixed(2);
});
btn4.addEventListener('click', function () {
  tip = (bill.value * (25 / 100)) / numberOfPerson.value;
  tipAmount.textContent = tip.toFixed(2);
  totalPerson.textContent = (bill.value / numberOfPerson.value + tip).toFixed(2);
});
btn5.addEventListener('click', function () {
  tip = (bill.value * (50 / 100)) / numberOfPerson.value;
  tipAmount.textContent = tip.toFixed(2);
  totalPerson.textContent = (bill.value / numberOfPerson.value + tip).toFixed(2);
});

custom.addEventListener('keypress',function(e){
    console.log(e)
    tip = (bill.value * (e.key / 100)) / numberOfPerson.value;
  tipAmount.textContent = tip.toFixed(2);
  totalPerson.textContent = (bill.value / numberOfPerson.value + tip).toFixed(2);
})