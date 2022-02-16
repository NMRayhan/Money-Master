const income = document.getElementById("income-input");
const food = document.getElementById("food-input");
const rent = document.getElementById("rent-input");
const clothes = document.getElementById("clothes-input");

let Expense = document.getElementById("total-expense");
let balanceBeforeSaving = document.getElementById("first-balance");

// warning msg showing 
var alertPlaceholder = document.getElementById('liveAlertPlaceholder')

function alert(message) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
  alertPlaceholder.appendChild(wrapper)
}

function stringToFloat(number) {
  const result = parseFloat(number);
  if (result < 0) {
    alert("You don't input any Negative number")
  } else {
    return result;
  }
}

// calculation button event handler
document.getElementById("calc-btn").addEventListener("click", function () {
  const incomeCost = income.value;
  const foodCost = food.value;
  const rentCost = rent.value;
  const clothesCost = clothes.value;

  if (
    (incomeCost == null || incomeCost == "") ||
    (foodCost == null || foodCost == "") ||
    (rentCost == null || rentCost == "") ||
    (clothesCost == null || clothesCost == "")
  ) {
    alert("Please fillup every input fild");
  } else {
      let income = stringToFloat(incomeCost);
      let food = stringToFloat(foodCost);
      let rent = stringToFloat(rentCost);
      let clothes = stringToFloat(clothesCost);
    const totalExpense = food + rent + clothes;
    const remainAmount = income - totalExpense;

    console.log(totalExpense, remainAmount);
  }
});

