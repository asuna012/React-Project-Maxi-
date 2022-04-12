import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  // we created another component called expenses list to destructure properly the items filtered by the year select element.

  // the first if condition returns an h2 element when the array has no data inside of it.

  // the second return statement returns an element or component called expense item when the array contains data pertaining to the year selected in the select element
  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
