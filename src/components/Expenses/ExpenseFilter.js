import React, { useState } from "react";

import "./ExpenseFilter.css";
// sets the function to be use by the onchange event. We used useState to allow us to change the value of a certain element.

const ExpensesFilter = (props) => {
  const [selectedYear, setYear] = useState("");
  //selectedYear is the special variable that receives the value of the event. setYear is the function that sets the variable.
  const yearChangeHandler = (event) => {
    setYear(event.target.value);
    props.onSelectedYear(selectedYear);

    // props.onSelectedYear(selectedYear) throws the value to the parent element which is the Expenses.js or any other element that wishes to add this component
  };
  //onChange - sets the event that the function would activate, yearChangeHandler - is the function that will activate once the changes in select element happen.

  // props.defaultYear - is the default value from expenses.js that sets the initial value of the select element.
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.defaultYear} onChange={yearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
