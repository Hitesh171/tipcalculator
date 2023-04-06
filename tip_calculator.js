const calculateButton = document.querySelector("#calculateButton");
const billAmount = document.querySelector("#billAmount");
const tipPercent = document.querySelector("#tipPercent");
const tipValue = document.querySelector("#tipValue");
const totalValue = document.querySelector("#totalValue");
const tipAmount = document.querySelector("#tipAmount");

calculateButton.addEventListener("click", () => {
  if (billAmount.value !== "") {
    tipAmount.style.display = "block";
    const tip = (billAmount.value * tipPercent.value) / 100;
    const total = parseFloat(billAmount.value) + parseFloat(tip);
    tipValue.innerText = tip.toFixed(2);
    totalValue.innerText = total.toFixed(2);
  } else {
    alert("Please enter bill amount");
  }
});

tipPercent.addEventListener("input", () => {
  document.querySelector("#tipPercentValue").innerText = `${tipPercent.value}%`;
});
