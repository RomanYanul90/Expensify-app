import React from "react";
import {connect} from 'react-redux'
import Expense_form from "./Expense_form";
import {editExpense, removeExpense} from "../actions/expenses";

export class EditExpensePage extends React.Component{
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id,expense)
        this.props.history.push('/')
    }
    onRemove = () => {
        this.props.removeExpense({id:this.props.expense.id})
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
    editExpense: (id,expense) => dispatch(editExpense(id,expense)),
    removeExpense:(data)=>dispatch(removeExpense(data))
})

const mapStateToProps = (state,props)=>({expense: state.expenses.find((el)=>el.id===props.match.params.id)});

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage)