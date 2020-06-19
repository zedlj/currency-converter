//https://exchangeratesapi.io/    (API)
// Rates are quoted against the Euro by default. Quote against a different currency by setting 
// the base parameter in your request:
// https://api.exchangeratesapi.io/latest?base=USD

function getValues(){
  var x = document.getElementById("mySelect2").selectedIndex;
  const val1 = document.querySelector("#val1").value;
  getRate(x, val1);
}


function getRate(x, val1){
  if (x === 0) {
  	let rate = 1.11
  	calculateConversion(rate, val1);
  }
    else if (x === 1) {
  	let rate = 1.24 
  	calculateConversion(rate, val1);
  }
    else if (x === 2) {
  	let rate = 1.8 
    calculateConversion(rate, val1);
  }
}


function calculateConversion(rate, val1) {
		const result1 = rate*val1
    document.getElementById("val2").value = `${result1}`;
    // getAPI();
}



// function getAPI(){
//   fetch('https://api.exchangeratesapi.io/latest?symbols=USD,GBP')
//     .then(response => response.json())
//     .then(data => console.log(data))
// }

