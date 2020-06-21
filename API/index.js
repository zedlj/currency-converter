// Load drop down options 
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
    option.setAttribute("id", `${rate}`);
  }
}) 

// everything is ok except initial input / click 
//first key press or click triggers function from HTML, so only registers click or input contents on
//second input / click
// need to clear output box to zero when backspaced after last inut character- reset state ?

function clickListener(userInput){  
document.getElementById("Select").addEventListener('click', function(e) { 
  let target = e.target, 
      rate = target.value 
      // console.log('click', rate, userInput)  
        InputListener(rate);  
      if (userInput && rate > 0){
        calculateConversion(userInput, rate);
      }
  });
}


function InputListener(rate){
  document.getElementById("userInput").addEventListener("input", function(e) {
  let target = e.target, 
      userInput = target.value 
      // console.log('type', rate, userInput)  
      clickListener(userInput);
    if (userInput && rate > 0){
      calculateConversion(userInput, rate);
    }
  });
}


function calculateConversion(userInput, rate){
  if (userInput && rate > 0) {
    let result = rate*userInput
    document.getElementById("output").value = `${result}`;
  }
}

