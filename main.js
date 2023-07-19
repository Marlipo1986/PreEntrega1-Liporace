function gatherExpenseInformation() {
    let numberOfPeople;
    let peopleExpenses = [];
    let i = 0;
  
    while (true) {
      if (i === 0) {
        numberOfPeople = parseInt(prompt("Enter the number of people:"));
      }
  
      if (i >= numberOfPeople) {
        break;
      }
  
      let name;
      while (true) {
        name = prompt(`Enter the name of person ${i + 1}:`);
        if (name) {
          break;
        }
      }
  
      let totalExpense;
      while (true) {
        totalExpense = parseFloat(prompt(`Enter the total expenses incurred by ${name}:`));
        if (!isNaN(totalExpense)) {
          break;
        }
      }
  
      peopleExpenses.push({ name, totalExpense });
      i++;
    }
  
    return peopleExpenses;
  }
  
  const expenseInformation = gatherExpenseInformation();
  console.log("Expense Information:", expenseInformation);
  