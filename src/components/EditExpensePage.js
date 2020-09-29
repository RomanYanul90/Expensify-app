import React from "react";
import {connect} from 'react-redux'
import Expense_form from "./Expense_form";
import {startEditExpense, startRemoveExpense} from "../actions/expenses";

export class EditExpensePage extends React.Component{
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id,expense)
        this.props.history.push('/')
    }
    onRemove = () => {
        this.props.startRemoveExpense({id:this.props.expense.id})
        this.props.history.push('/')
    }
    render(){
            return(
                <div>
                <Expense_form
                    expense = {this.props.expense}
                    onSubmit = {this.onSubmit}/>
            <button onClick = {this.onRemove}>Remove</button>
        </div>
            )
        }
}

const mapDispatchToProps =(dispatch)=>({
    startEditExpense: (id,expense) => dispatch(startEditExpense(id,expense)),
    startRemoveExpense:(data)=>dispatch(startRemoveExpense(data))
})

const mapStateToProps = (state,props)=>({expense: state.expenses.find((el)=>el.id===props.match.params.id)});

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage)