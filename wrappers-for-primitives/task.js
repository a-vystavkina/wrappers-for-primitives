'use strict';
function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    function checkInputData (value) {
        let object;
        if (typeof(value) === 'number') {
            object = value;
            return object;
        } else  if (typeof (value) === 'string'){
            object  = parseInt(value);
        }
        if (typeof(object) === 'number'&& ! isNaN(object)){
            return object;
        } else {
          console.log(`Параметр ${value} содержит неправильное значение ${object}`);
        }
        
    }
    function loanPeriod(date) {
      let date2 = new Date();
      let date1 = new Date(date);
      let year2 = date2.getFullYear();
      let year1 = date1.getFullYear();
      let months= (year1 - year2) * 12;
      months += date1.getMonth() - date2.getMonth();
      return months;
    }

    let payMonth = loanPeriod(date);
    let returnAmount = checkInputData(amount) - checkInputData(contribution);
    let P = checkInputData(percent) / 1200;
    let monthlyPayment = returnAmount * (P + (P / (((1 + P)^payMonth) - 1)));
    let totalAmount = returnAmount + monthlyPayment * payMonth;
    return totalAmount.toFixed(2);

}


function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    let greeting;
    if (typeof(name) === 'string' || name != '') {
    greeting = `Привет, мир! Меня зовут ${name}`;
    } else if (typeof(name) != 'string' || name === '' || name === null){
    greeting = 'Привет, мир! Меня зовут Аноним';
    }
    return greeting;
}