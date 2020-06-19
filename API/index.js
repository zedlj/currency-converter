
function getValues(){
  var x = document.getElementById("mySelect2").selectedIndex;
  const val1 = document.querySelector("#val1").value;
  getRate(x, val1);
}


function getRate(x, val1){
  fetch('https://api.exchangeratesapi.io/latest?base=GBP')
    .then(response => response.json())
    .then(data => {
      let AUD_rate = data.rates.AUD
      let USD_rate = data.rates.USD
      let EUR_rate = data.rates.EUR
      calculateConversion(EUR_rate, USD_rate, AUD_rate, x, val1);
    })
}

//for more currencies pass as array instead and access via index? 
function calculateConversion(EUR_rate, USD_rate, AUD_rate, x,  val1){
  if (x === 0) {
    const result = EUR_rate*val1
    document.getElementById("val2").value = `${result}`;
  } 
  if (x === 1) {
    const result = USD_rate*val1
    document.getElementById("val2").value = `${result}`;
  } 
  if (x === 2) {
    const result = AUD_rate*val1
    document.getElementById("val2").value = `${result}`;
  } 
}


//https://exchangeratesapi.io/    (API)
// Rates are quoted against the Euro by default. Quote against a different currency by setting 
// the base parameter in your request:
// https://api.exchangeratesapi.io/latest?base=USD





