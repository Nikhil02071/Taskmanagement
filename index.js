// Budget tracker variables
let budget = 0;
let income = [];
let expenses = [];

// DOM elements
const budgetValueElement = document.getElementById('budget-value');
const inputDescriptionElement = document.getElementById('input-description');
const inputAmountElement = document.getElementById('input-amount');
const inputTypeElement = document.getElementById('input-type');
const incomeListElement = document.getElementById('income-list');
const expensesListElement = document.getElementById('expenses-list');
const addBtnElement = document.getElementById('add-btn');

// Update budget display
function updateBudget() {
  budgetValueElement.textContent = budget.toFixed(2);
}

// Add income or expense
function addTransaction() {
  const description = inputDescriptionElement.value;
  const amount = parseFloat(inputAmountElement.value);
  const type = inputTypeElement.value;

  if (description.trim() ===