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
}
