import "./Expenses.css";
import Card from "../UI/Card.js";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
const Expenses = (props) => {
  //usestate is used to initialize a default year for the select element in expense filter component. this serves as a parent to child relationship component in which it sets the initial value of the expense filter component.
  const [filteredYear, setFilteredYear] = useState("2020");

  //saveSelectedYear function is activated when the select element changes its value. It has the same function with the expensefilter.js. It only receives the value of the child component and renders or pushes it to this component.
  const saveSelectedYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  //Expense filter component is imported and added as a component in Expense.js.

  // onSelectedYear is the properties of the child component that sets the value of the select element and throws the value to the Expenses.js using the saveSelected Year function.

  //prop.listofExpenses.map is a function that automatically renders the contents of expenses array from App.js file. It gets all the items and populates the expense item component together with the items inside the expenses array.

  //created another function called filteredExpenses to display the items depending on the year selected by the user.
  const filteredExpenses = props.listOfExpenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // we created another component called expensesList component to pass the new array containing all the items filtered per year. It has an argument with the function inside of it called filtered expenses.

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          defaultYear={filteredYear}
          onSelectedYear={saveSelectedYear}
        />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
