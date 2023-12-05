/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const res = {};
  for(const i of transactions){
    if(res[i.category]){
      res[i.category] += i.price;
    }
    else{
      res[i.category] = i.price;
    }
  }

  return Object.entries(res).map(([category,total]) => ({
    category,
    total,
  }));
}

module.exports = calculateTotalSpentByCategory;
// const totalsByCategory = {};

//   for (const transaction of transactions) {
//       if (totalsByCategory[transaction.category]) {
//           totalsByCategory[transaction.category] += transaction.price;
//       } else {
//           totalsByCategory[transaction.category] = transaction.price;
//       }
//   }

//   return Object.entries(totalsByCategory).map(([category, totalSpent]) => ({
//       category,
//       totalSpent,
//   }));