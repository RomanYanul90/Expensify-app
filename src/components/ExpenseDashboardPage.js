import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";

const ExpenseDashboardPage=()=>(
    <h3>
        <ExpensesSummary/>
        <ExpenseList/>
        <ExpenseListFilters/>
    </h3>
);

export default ExpenseDashboardPage


