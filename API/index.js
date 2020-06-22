// Load drop down options 
fetch('https://api.exchangeratesapi.io/latest')
.then(response => response.json())
.then(data => {
  let rates = data.rates;
  for (const [curr, rate] of Object.entries(rates)) {
    const rateOption = document.getElementById("Select");
    const option = document.createElement("option");
    option.text = `${curr}`;
    rateOption.add(option);
    option.setAttribute("value", `${rate}`);
    option.setAttribute("id", `${rate}`);
  }
}) 


function clickListener(userInput){  
  // console.log('type')
  document.getElementById("Select").addEventListener("click", function(e) { 
      let target = e.target, 
      rate = target.value 
      // console.log('click', rate, userInput)  
      inputListener(rate);  
      if (userInput && rate >= 0){
        calculateConversion(userInput, rate);
      }
  });
}


function inputListener(rate){
  document.getElementById("userInput").addEventListener("keyup", function(e) {
    let target = e.target, 
    userInput = target.value 
    // console.log('type', rate, userInput)  
    clickListener(userInput);
    if (userInput && rate >= 0){
      calculateConversion(userInput, rate);
    }
  });
}


function calculateConversion(userInput, rate){
    let result = rate*userInput
    document.getElementById("output").value = `${result}`;
}



inputListener();
clickListener();