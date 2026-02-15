function checkBudget() {
  let budget = Number(prompt("Enter your budget amount:"));
  let price = Number(prompt("Enter the price of item:"));
  let savings = Number(prompt("Enter your saving amount:"));
  if (isNaN(budget) || isNaN(price) || isNaN(savings)) {
    alert("enter valid amount:");
    return;
  }
  if (budget <= 0 || price <= 0 || savings <= 0) {
    alert("please enter positive number only.");
    return;
  }

  let totalmoney = budget + savings;
  if (totalmoney >= price) {
    alert("You can buy the item.");
    console.log("You can buy the item.");
  } else {
    alert("You can't buy the item.");
    console.log("You can't buy the item.");
  }
  console.log("Your budget amount is:" + budget);
  console.log("The price of item is:" + price);
  console.log("Your saving amount is:" + savings);
  console.log("Your total money is:" + totalmoney);
}
