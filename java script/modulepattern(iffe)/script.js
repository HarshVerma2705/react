const Bank = (function() {
  let balance = 12000;
  function checkBalance() {
    console.log("Balance:", balance);
  }
  function setBalance(val) {
    balance = val;
  }
  function withdraw(val) {
    if (val <= balance) {
      balance -= val;
      console.log("Withdraw:", val, "New Balance:", balance);
    } else {
      console.log("Insufficient funds");
    }
  }
  return {
    checkBalance,
    setBalance,
    withdraw
  };
})();
