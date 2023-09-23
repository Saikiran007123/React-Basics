import React from "react";
import "./ExpenseItem.css";
function ExpenseItem() {
  const expenseDate = Date(2023, 8, 21);
  const expenseItem = "Car Insurance";
  const expenseAmount = "297.67";
  return (
    <div className="expense-item">
      <div>{expenseDate}</div>
      <div className="expense-item__description">
        <h1>{expenseItem}</h1>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
