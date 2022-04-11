import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card.js";
import ExpenseFilter from "./ExpenseFilter";
import react, { useState } from "react";

const Expenses = (props) => {
  //usestate is used to initialize a default year for the select element in expense filter component. this serves as a parent to child relationship component in which it sets the initial value of the expense filter component.
  const [filteredYear, setFilteredYear] = useState("2020");

  //saveSelectedYear function is activated when the select element changes its value. It has the same function with the expensefilter.js. It only receives the value of the child component and renders or pushes it to this component.
  const saveSelectedYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  //Expense filter component is imported and added as a component in Expense.js.

  // onSelectedYear is the properties of the child component that sets the value of the select element and throws the value to the Expenses.js using the saveSelected Year function.

  return (
    <div>
      <ExpenseFilter
        onSelectedYear={saveSelectedYear}
        defaultYear={filteredYear}
      />
      <Card className="expenses">
        <ExpenseItem
          title={props.listOfExpenses[0].title}
          amount={props.listOfExpenses[0].amount}
          date={props.listOfExpenses[0].date}
        />
        <ExpenseItem
          title={props.listOfExpenses[1].title}
          amount={props.listOfExpenses[1].amount}
          date={props.listOfExpenses[1].date}
        />
        <ExpenseItem
          title={props.listOfExpenses[2].title}
          amount={props.listOfExpenses[2].amount}
          date={props.listOfExpenses[2].date}
        />
        <ExpenseItem
          title={props.listOfExpenses[3].title}
          amount={props.listOfExpenses[3].amount}
          date={props.listOfExpenses[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
