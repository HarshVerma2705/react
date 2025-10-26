function createProduct(name, price) {
  let stock = 10; // Default stock for every product

  return {
    name,         // Product name
    price,        // Product price
    buy(quantity) {
      if (quantity > stock) {
        console.error(`We only have ${stock} pieces left.`);
      } else {
        stock -= quantity;
        console.log(`${quantity} pieces booked. ${stock} left.`);
      }
    },
    refill(quantity) {
      stock += quantity;
      console.log(`Refilled stock. Pieces now: ${stock}`);
    },
    checkStock() {
      console.log(`Stock left: ${stock}`);
    }
  };
}

// Usage:
const iPhone = createProduct("iPhone", 70000);
iPhone.buy(6);          // Books 6, remaining 4
iPhone.checkStock();    // Prints stock left (4)
iPhone.refill(10);      // Adds 10 to stock

const kitkat = createProduct("Kitkat", 10);
kitkat.buy(5);          // Books 5, remaining 5
kitkat.checkStock();    // Prints stock left (5)
