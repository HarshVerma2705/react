const Bank = (function() {
  // Private variable
  let balance = 12000;

  // Private functions
  function checkBalance() {
    console.log("Balance:", balance);
  }

  function setBalance(val) {
    balance = val;
  }

  function withdraw(val) {
    if (val <= balance) {
      balance -= val;
      console.log(`Withdraw: ₹${val}. New Balance: ₹${balance}`);
    } else {
      console.log("Insufficient funds");
    }
  }

  // Revealing public API with custom names
  return {
    check: checkBalance,
    set: setBalance,
    draw: withdraw
  };
})();

// Usage examples:
Bank.check();      // prints: Balance: 12000
Bank.set(2000);    // sets balance to 2000
Bank.draw(500);    // Withdraws: 500, New Balance: 1500
