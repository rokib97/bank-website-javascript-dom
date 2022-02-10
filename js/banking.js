// handle deposite event handler
document.getElementById("deposite-btn").addEventListener("click", function () {
  // get the input value element
  const depositeInput = document.getElementById("deposite-input");
  if (depositeInput.value == "") {
    return alert("please make sure to input something");
  }
  if (depositeInput.value <= 0) {
    return alert("Why don't you enter positive number");
  }
  if (isNaN(depositeInput.value) == true) {
    return alert("String returns NaN Here so avoid that");
  }
  const depositeInputOrginalValue = depositeInput.value;
  const depositeInputValue = parseFloat(depositeInputOrginalValue);

  //   get the current deposite text value element
  const depCurValue = document.getElementById("depCurrentValue");
  const depCurTextValue = depCurValue.innerText;
  const depCurNumValue = parseFloat(depCurTextValue);
  const newUpdatedTotal = depositeInputValue + depCurNumValue;
  depCurValue.innerText = newUpdatedTotal;

  //   update the account balance
  const balanceTotal = document.getElementById("current-balance");
  const balanceTotalText = balanceTotal.innerText;
  const balanceTotalPrevious = parseFloat(balanceTotalText);
  const newBalanceTotal = balanceTotalPrevious + depositeInputValue;
  balanceTotal.innerText = newBalanceTotal;

  // clear the deposite input field
  depositeInput.value = "";
});
// handle withdraw event handler
document.getElementById("withdraw-btn").addEventListener("click", function () {
  // get the input withdraw value
  const withdrawInput = document.getElementById("withdraw-input");
  if (withdrawInput.value == "") {
    return alert("please make sure to input something");
  }
  if (withdrawInput.value <= 0) {
    return alert("Why don't you enter positive number");
  }
  if (isNaN(withdrawInput.value) == true) {
    return alert("String returns NaN Here so avoid that");
  }
  // const withdrawInputOldValue = withdrawInput.value;
  const withDrawInputValue = parseFloat(withdrawInput.value);

  //   get the current withdraw innertext value
  const withCurValue = document.getElementById("currnet-withdraw");
  const withdrawPreviousValue = parseFloat(withCurValue.innerText);
  const updatedWidthdrawValue = withDrawInputValue + withdrawPreviousValue;
  withCurValue.innerText = updatedWidthdrawValue;

  // updatet the baap er balance
  const balanceTotal = document.getElementById("current-balance");
  const balanceTotalText = balanceTotal.innerText;
  const balanceTotalPrevious = parseFloat(balanceTotalText);
  const newBalanceTotal = balanceTotalPrevious - withDrawInputValue;
  balanceTotal.innerText = newBalanceTotal;
  withdrawInput.value = "";
});
