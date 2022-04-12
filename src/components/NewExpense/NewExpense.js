import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const [showForm, setEditForm] = useState(false);

  const formShowHandler = () => {
    !showForm ? setEditForm(true) : setEditForm(false);
  };
  return (
    <div className="new-expense">
      {!showForm && <button onClick={formShowHandler}>Add New Expense</button>}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={formShowHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
