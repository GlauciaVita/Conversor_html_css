const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');
let valueConverted = 0;

function handleSubmit(e) {
  e.preventDefault();
  
  if(!inputValue.value || inputValue.value < 0) {
    alert("Informe um valor maior que zero!");
    return;
  } else if (!selectedCurrency.value) {
    alert('Escolha uma moeda!');
    return;
  }

  converterMoeda();
};


function converterMoeda() {
 if(selectedCurrency.value === "eur") {
  valueConverted = inputValue.value * 5.35;
  result.innerHTML = `R\$${valueConverted}`;
 } else if (selectedCurrency.value === "dol") {
  valueConverted = inputValue.value * 4.88;
  result.innerHTML = `R\$${valueConverted}`;
 } else if (selectedCurrency.value === "fra") {
  valueConverted = inputValue.value * 5.58;
  result.innerHTML = `R\$${valueConverted}`;
 } else if (selectedCurrency.value === "ien") {
  valueConverted = inputValue.value * 0.034;
  result.innerHTML = `R\$${valueConverted}`;
 } else if (selectedCurrency.value === "lib") {
  valueConverted = inputValue.value * 6.20;
  result.innerHTML = `R\$${valueConverted}`;
 }

 inputValue.value = " ";
 selectedCurrency.value = "seleção";
};



