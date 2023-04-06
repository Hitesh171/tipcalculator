const billAmountInput = document.getElementById("billAmount");
const tipPercentInput = document.getElementById("tipPercent");
const tipPercentOutput = document.getElementById("tipPercentOutput");
const tipAmountDiv = document.getElementById("tipAmount");
const tipValue = document.getElementById("tipValue");
const totalValue = document.getElementById("totalValue");

function calculateTip() {
  const billAmount = parseFloat(billAmountInput.value);
  const tipPercent = parseFloat(tipPercentInput.value) / 100;
  const tipAmount = billAmount * tipPercent;
  const totalAmount = billAmount + tipAmount;

  tipValue.innerText = tipAmount.toFixed(2);
  totalValue.innerText = totalAmount.toFixed(2);

  tipAmountDiv.style.display = "block";
}

tipPercentInput.addEventListener("input", function() {
  tipPercentOutput.innerText = tipPercentInput.value + '%';
  calculateTip();
});

billAmountInput.addEventListener("input", function() {
  calculateTip();
});
