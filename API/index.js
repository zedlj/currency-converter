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
    option.setAttribute("id", `${curr}`);
  }
}) 


// set inital dropdown rate
window.onload = () => {
  rate = 1.521  //query selector: Select > input > (first) value="x"   ???
  inputListener(rate);
  clickListener(rate);
};  


function clickListener(userInput){  
  checkInputEmpty();
  document.getElementById("Select").addEventListener("click", function(event) { 
      let target = event.target, 
      rate = target.value 
      inputListener(rate);  
      if (userInput && rate >= 0){
        calculateConversion(userInput, rate);
      }
  });
}


function inputListener(rate){
  checkInputEmpty();
  document.getElementById("userInput").addEventListener("keyup", function(event) {
    let target = event.target, 
    userInput = target.value 
    clickListener(userInput);
    if (userInput && rate >= 0){
      calculateConversion(userInput, rate);
    }
  });
}


function checkInputEmpty(){
  const userInputCheck = document.querySelector("#userInput").value;
  if (! userInputCheck){
    document.getElementById("output").innerHTML = "";
  }
}


function calculateConversion(userInput, rate){
    let result = rate*userInput
    document.getElementById("output").innerHTML = `${result}`;
}