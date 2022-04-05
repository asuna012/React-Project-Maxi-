import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses(props) {
  return (
    <div className="expenses">
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
    </div>
  );
}

export default Expenses;
