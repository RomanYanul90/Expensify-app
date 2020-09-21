import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
    onTexChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }
    onSortChange = (e) => {
        if (e.target.value === 'date') {
            this.props.sortByDate();
        } else if (e.target.value === 'amount') {
            this.props.sortByAmount();
        }
    }
    render() {
        return (
            <div>
                <input
                    type = "text"
                    value = {this.props.filters.text}
                    onChange = {this.onTexChange}
                />
                <select
                    value={this.props.filters.sortBy}
                    onChange={this.onSortChange}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({filters: state.filters});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter:(text)=> dispatch(setTextFilter(text)),
    sortByAmount:()=>dispatch(sortByAmount()),
    sortByDate:()=>dispatch(sortByDate()),
    //setStartDate:(startDate)=>dispatch(setStartDate(startDate)),
    //setEndDate:(endDate)=>dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters);