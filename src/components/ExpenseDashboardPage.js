import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

const ExpenseDashboardPage=()=>(
    <h3>
        <ExpenseList/>
        <ExpenseListFilters/>
    </h3>
);

export default ExpenseDashboardPage


