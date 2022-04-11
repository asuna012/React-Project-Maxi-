import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Computer",
    amount: 200,
    date: new Date(2020, 7, 11),
  },
];
const App = () => {
  //the code below allows the app to render the initial items declared inside the INITIAL_EXPENSES array
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  // the addExpenseHandler function allows the user to dynamically add items it wishes to the INITIAL_EXPENSES array
  const addExpenseHandler = (expense) => {
    //the function below is the standard fuction used to render the previous items inside the array and adds the new items existing in the array

    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses listOfExpenses={expenses}></Expenses>
    </div>
  );
};

export default App;
