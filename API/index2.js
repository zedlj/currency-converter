// only works: type > select currency 
// retype > select currency again



// Option & value loaded to the DOM and accessed globally
fetch('https://api.exchangeratesapi.io/latest')
.then(response => response.json())
.then(data => {
  let rates = data.rates;
  for (const [curr, rate] of Object.entries(rates)) {
    const rate_option = document.getElementById("Select");
    const option = document.createElement("option");
    option.text = `${curr}`;
    rate_option.add(option);
    option.setAttribute("value", `${rate}`);
  }
}) 


//listener for typing-- gets userInput amount
document.addEventListener('input', function() {
  let userInput = document.querySelector("#userInput").value;

//listener for dropdown menu selection to get rate for currency selected
  document.addEventListener('click', function(e) {
    let target = e.target, 
        rate = target.value   
        calculateConversion(userInput, rate)
  });
});



//displays conversion result in output box
function calculateConversion(userInput, rate){
  let result = rate*userInput
  console.log(result)
  //avoid displaying NaN
  if (rate > 0 ) {
  document.getElementById("output").value = `${result}`;
  }
}


