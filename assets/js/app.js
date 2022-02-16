const income = document.getElementById("income-input");
const food = document.getElementById("food-input");
const rent = document.getElementById("rent-input");
const clothes = document.getElementById("clothes-input");

let Expense = document.getElementById("total-expense");
let balanceBeforeSaving = document.getElementById("first-balance");

const savingPar = document.getElementById("saving-amount");
const balanceAfterSaving = document.getElementById("second-balance");

// warning msg showing
var alertPlaceholder = document.getElementById("liveAlertPlaceholder");

function alert(message, type) {
  var wrapper = document.createElement("div");
  wrapper.innerHTML =
    '<div class="alert alert-' +
    type +
    ' alert-dismissible" role="alert">' +
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

// string to float conversion
function stringToFloat(number) {
  const result = parseFloat(number);
  if (result < 0) {
    setTimeout(() => {
      alert("You don't input any Negative number", "danger");
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
      alert("Please fillup every input fild", "danger");
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
        alert("Your Expense is More then income", "danger");
      }, 1000);
      inputAutoClear();
    } else {
      setTimeout(() => {
        alert("Calculation Done", "success");
      }, 1000);
      Expense.innerText = totalExpense;
      balanceBeforeSaving.innerText = remainAmount;
    }
  }
}

//savings calculation
function savingCalc() {
  const saving = document.getElementById("savingsParentage").value;
  const savingText = stringToFloat(saving);
  let balance = balanceBeforeSaving.innerText;
  let balanceText = stringToFloat(balance);

  let savingsAmount = (balanceText / 100) * savingText;
  let finalBalance = balanceText - savingsAmount;

  console.log(savingsAmount, finalBalance);

    savingPar.innerText = savingsAmount;
    balanceAfterSaving.innerText = finalBalance;
}
