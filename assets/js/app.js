const income = document.getElementById("income-input");
const food = document.getElementById("food-input");
const rent = document.getElementById("rent-input");
const clothes = document.getElementById("clothes-input");

let Expense = document.getElementById("total-expense");
let balanceBeforeSaving = document.getElementById("first-balance");

// warning msg showing
var alertPlaceholder = document.getElementById("liveAlertPlaceholder");

function alert(message) {
  var wrapper = document.createElement("div");
  wrapper.innerHTML =
    '<div class="alert alert-danger alert-dismissible" role="alert">' +
    message +
    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
  alertPlaceholder.appendChild(wrapper);
}

//input field auto clear
function inputAutoClear() {
  income.value = "";
  food.value = "";
  rent.value = "";
  clothes.value = "";
  Expense.innerText = "0.0";
  balanceBeforeSaving.innerText = "0.0";
}

function stringToFloat(number) {
  const result = parseFloat(number);
  if (result < 0) {
    setTimeout(() => {
        alert("You don't input any Negative number");
    }, 1000);
    inputAutoClear();
  } else {
    return result;
  }
}

// calculation income and Expense here
function calculation() {
  const incomeCost = income.value;
  const foodCost = food.value;
  const rentCost = rent.value;
  const clothesCost = clothes.value;

  if (
    incomeCost == null ||
    incomeCost == "" ||
    foodCost == null ||
    foodCost == "" ||
    rentCost == null ||
    rentCost == "" ||
    clothesCost == null ||
    clothesCost == ""
  ) {
    setTimeout(() => {
        alert("Please fillup every input fild");
    }, 1000);
    inputAutoClear();
  } else {
    let income = stringToFloat(incomeCost);
    let food = stringToFloat(foodCost);
    let rent = stringToFloat(rentCost);
    let clothes = stringToFloat(clothesCost);
    const totalExpense = food + rent + clothes;
    const remainAmount = income - totalExpense;

    if (totalExpense >= remainAmount) {
      setTimeout(() => {
        alert("Your Expense is More then income amount");
      }, 1000);
      inputAutoClear();
    } else {
      Expense.innerText = totalExpense;
      balanceBeforeSaving.innerText = remainAmount;
    }

    console.log(totalExpense, remainAmount);
  }
}
