const billAmount = document.getElementById("bill-input");
const numberOfPeople = document.querySelector(".num-people");
const warningMsg = document.querySelector(".warning");
const warningMsgFocus = document.querySelector(".warning-focus");
const tipAmount = document.querySelector(".tip-amount");
const totalAmount = document.querySelector(".total-amount");
//* When uncommented, will
// const grandTotal = document.querySelector(".grand-total");
const customPercent = document.getElementById("custom");
const btns = document.querySelectorAll(".tip-btn");
const resetBtn = document.querySelector(".reset");

billAmount.focus();

btns.forEach(function (i) {
  i.addEventListener("click", function () {
    //* Get the value of the button
    let btnValue = this.textContent;
    //* Convert the value of the button to an integer
    btnValue = parseInt(btnValue, 10);
    //* Calculate the percentage of the bill as a tip
    const tip = (btnValue * billAmount.value) / 100;
    //* Calculate the tip per person
    const tipPerPerson = tip / numberOfPeople.value;
    const numPeople = numberOfPeople.value;
    const billValue = billAmount.value;
    const totalPerPerson = billValue / numPeople;
    customPercent.value = "";

    //* Warning for zero value of people entered
    if (numPeople == 0) {
      warningMsg.style.display = "block";
      numberOfPeople.value = "";
      numberOfPeople.classList.add("warning-focus");
    } else {
      warningMsg.style.display = "none";
      numberOfPeople.classList.remove("warning-focus");
    }

    //* Display the tip per person and what the total equals per person
    tipAmount.textContent = `$${tipPerPerson.toFixed(2) ? tipPerPerson.toFixed(2) : ".00"}`;
    totalAmount.textContent = `$${(totalPerPerson + tipPerPerson).toFixed(2)}`;

    //* When uncommented, will add tip amount and total amount together
    // grandTotal.textContent = `$${(Number(billValue) + Number(numPeople) * Number(tipPerPerson.toFixed(2))).toFixed(2)}`;
  });
});

//* CUSTOM tip amount which uses the enter key to validate
customPercent.addEventListener("keydown", (event) => {
  let name = event.key;

  if (name === "Enter") {
    //* Get the value of the input
    let custValue = customPercent.value;
    //* Convert the value of the input to an integer
    custValue = parseInt(custValue, 10);
    //* Calculate the percentage of the bill as a tip
    const tip = (custValue * billAmount.value) / 100;
    //* Calculate the tip per person
    const tipPerPerson = tip / numberOfPeople.value;
    const numPeople = numberOfPeople.value;
    const billValue = billAmount.value;
    const totalPerPerson = billValue / numPeople;
    customPercent.value = "";

    //* Display the tip per person and what the total equals per person
    if (billValue) {
      tipAmount.textContent = `$${tipPerPerson.toFixed(2) ? tipPerPerson.toFixed(2) : ".00"}`;
      totalAmount.textContent = `$${(totalPerPerson + tipPerPerson).toFixed(2)}`;

      //* When uncommented, will add tip amount and total amount together
      // grandTotal.textContent = `$${(Number(billValue) + Number(numPeople) * Number(tipPerPerson.toFixed(2))).toFixed(2)}`;
    }
  }
});

billAmount.addEventListener("keydown", (event) => {
  let name = event.key;

  if (name === "Enter") {
    if (billAmount.value == 0) {
      billAmount.value = "";
    } else {
      numberOfPeople.focus();
    }
  }
});

numberOfPeople.addEventListener("keydown", (event) => {
  let name = event.key;

  if (name === "Enter") {
    if (numberOfPeople.value == 0) {
      warningMsg.style.display = "block";
      numberOfPeople.value = "";
      numberOfPeople.classList.add("warning-focus");
    } else {
      warningMsg.style.display = "none";
      numberOfPeople.classList.remove("warning-focus");
      customPercent.focus();
    }
  }
});

//* Reset button
resetBtn.addEventListener("click", () => {
  billAmount.value = "";
  numberOfPeople.value = "";
  customPercent.value = "";
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
  //* When uncommented, will reset value to zero
  // grandTotal.textContent = "$0.00";
  billAmount.focus();
});
