function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}

document
  .getElementById("generate-button")
  .addEventListener("click", function () {
    const pinValue = getPin();
    document.getElementById("display-pin").value = pinValue;
  });

document.getElementById("key-pad").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const clacInput = document.getElementById("typed-numbers");
  if (isNaN(number)) {
    if (number == "C") {
      clacInput.value = "";
    }
  } else {
    const privousNumber = clacInput.value;
    const newNumber = privousNumber + number;
    clacInput.value = newNumber;
  }
});

function verifyPin() {
  const pin = document.getElementById("display-pin").value;
  const typedNumbers = document.getElementById("typed-numbers").value;
  const sucessMessage = document.getElementById("success-message");
  const failMessage = document.getElementById("fail-message");
  if (pin == typedNumbers) {
    sucessMessage.style.display = "block";
    failMessage.style.display = "none";
  } else {
    sucessMessage.style.display = "none";
    failMessage.style.display = "block";
  }
}
