function loadDropDown(cookierate){ 
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
}


function checkCookie(){
  if (document.cookie === ""){
    console.log('no cookies')
    loadDropDown();
    let rate = 1.5269
    clickListener(rate);
    inputListener(rate);
  } else {
    console.log('cookies exist')
      getCookie();
  }
}


function getCookie (){
  console.log('getting cookie')
    let cookies = `${document.cookie}`;
    console.log(document.cookie)
    let userInputSplit = cookies.split(`userInput=`)[1]   // .join() ?
    let userInput = userInputSplit.split(`;`)[0]
    console.log(userInput)
    document.getElementById("userInput").value = `${userInput}`;
    let rateSplit  = cookies.split(`;`)[1]
    let rate = rateSplit.split(`rate=`)[1]
    console.log(rate)
    // when load dropdown, link rate to option it belongs to and add selected attribute
    loadDropDown();   
    calculateConversion(userInput, rate); 
    clickListener(userInput);
    inputListener(rate);
}


function setCookie(userInput, rate){
  document.cookie = `userInput=${userInput}`;
  document.cookie = `rate=${rate}`;
  // const clickedOption = document.querySelector(`option[value="${rate}"]`);
  // console.log(clickedOption);
}


function clickListener(userInput){  
  checkInputEmpty();
  document.getElementById("Select").addEventListener("change", function(event) { 
      let target = event.target, 
      rate = target.value
      inputListener(rate); 
      if (userInput && rate >= 0){
        calculateConversion(userInput, rate);
        setCookie(userInput, rate);
        //displays option element that was clicked on and adds attribute selected
        const clickedOption = document.querySelector(`option[value="${rate}"]`);
        clickedOption.setAttribute('selected', 'selected')
        console.log(clickedOption)
      }
  });
}


function inputListener(rate){
  checkInputEmpty();
  document.getElementById("userInput").addEventListener("keyup", function(event) {
    let target = event.target, 
    userInput = target.value 
    if (! isNaN(userInput)){
      clickListener(userInput);
      if (userInput && rate >= 0){
        calculateConversion(userInput, rate);
        setCookie(userInput, rate);
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
    let result = rate*userInput
    document.getElementById("output").innerHTML = `${result}`;
}



checkCookie();