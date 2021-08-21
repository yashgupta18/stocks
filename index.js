// Input- bringing html to JS arena
const inputs = document.querySelectorAll(".input");
const form = document.forms[0];
const outputDiv = document.querySelector(".output");
const motion = document.querySelector("#motion");

form.addEventListener("submit", checkcalcHandler); //Adding a function somewhat like onClick

function checkcalcHandler(e) {
  e.preventDefault();

  var cp = inputs[0].value;
  var quantity = inputs[1].value;
  var sell = inputs[2].value;
  if (!isNaN(cp) && !isNaN(quantity) && !isNaN(sell)) {
    cp = Number(cp);
    quantity = Number(quantity);
    sell = Number(sell);

    //loss-calculation
    if (cp > 0 && quantity > 0 && sell > 0) {
      if (cp > sell) {
        var loss = ((cp - sell) * quantity).toFixed(2);
        var losspercent = (((cp - sell) * 100) / cp).toFixed(2);
        outputDiv.innerHTML = `<div> You lost ${losspercent}%. Your total loss is ₹${loss}. </div>`;
      } else {
        //profit-calculation
        var profit = ((sell - cp) * quantity).toFixed(2);
        var profitPercent = (((sell - cp) * 100) / sell).toFixed(2);
        outputDiv.innerHTML = `<div> You gained ${profitPercent}%. Your total profit is ₹${profit}</div>`;
      }
    } else {
      //error-display
      output.innerHTML =
        "Please Enter values greater than 0 that is positive value";
    }
  }
}
