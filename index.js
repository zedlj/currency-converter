function loadDropdown(){
  fetch('https://api.exchangeratesapi.io/latest')
  .then(response => response.json())
  .then(data => {
    const rates = data.rates;
    for (const [curr, rate] of Object.entries(rates)) {
      const rateOption = document.getElementById("Select");
      const option = document.createElement("option");
      option.text = `${curr}`;
      rateOption.add(option);
      option.setAttribute("value", `${rate}`);
      option.setAttribute("id", `${curr}`);
    }
    checkCookie();
  })
}


function checkCookie(){
    if (document.cookie === ""){
      rate = document.getElementById("CAD").value
      clickListener(rate);
      inputListener(rate);
    } else {
      getCookie();
    }
}


function getCookie (){
  //change to Regex.. 
  const cookies = document.cookie
  const userInputSplit = cookies.split(`;`)[1]   
  const userInput = userInputSplit.split(`userInput=`)[1]
  const rateSplit = cookies.split(`rate=`)[1]
  const rateCode = rateSplit.split(`;`)[0]
 //
  const clickedOption = document.querySelector(`option[id="${rateCode}"]`);
  clickedOption.setAttribute('selected', 'selected')
  rate = clickedOption.value
  document.getElementById("userInput").value = `${userInput}`;
  document.getElementById("output").innerHTML = `${userInput*rate}`;
  clickListener(userInput);
  inputListener(rate);
}


function setCookie(userInput, rate){
  document.cookie = `rate = ${document.querySelector(`option[value="${rate}"]`).id}`;   
  document.cookie = `userInput=${userInput}`;
}


function clickListener(userInput){  
  checkInputEmpty();
  document.getElementById("Select").addEventListener("change", function(event) { 
      const target = event.target, 
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
    const target = event.target, 
    userInput = target.value 
    if (! isNaN(userInput)){
      clickListener(userInput);
      if (userInput && rate >= 0){
        calculateConversion(userInput, rate);
      }
    } else {
      document.getElementById("error").innerHTML = "please enter numbers only!";
    }
  });
}


function checkInputEmpty(){
  const userInputCheck = document.querySelector("#userInput").value;
  if (! userInputCheck){
    document.getElementById("output").innerHTML = "";
    document.getElementById("error").innerHTML = "";
  }
}


function calculateConversion(userInput, rate){
    const result = rate*userInput
    document.getElementById("output").innerHTML = `${result}`;
    setCookie(userInput, rate);
}

 
loadDropdown();