import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import {filters,altFilters} from "../fixtures/filters";
import {AddExpensePage} from "../../components/AddExpensePage";

let setTextFilter,sortByDate,sortByAmount,wrapper

beforeEach( () => {
    setTextFilter = jest.fn()
    sortByDate= jest.fn()
    sortByAmount = jest.fn()
    wrapper = shallow(
     <ExpenseListFilters
        filters = { filters }
        setTextFilter = {setTextFilter}
        sortByDate = {sortByDate}
        sortByAmount = {sortByAmount}
    />);
    }
);

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters  with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change',()=>{
    const value = 'a'
    wrapper.find('input').simulate('change',{
        target: {value}
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('should sort by date',()=>{
    const value = 'date'
    wrapper.setProps({
        filters: altFilters
    })
    wrapper.find('select').simulate('change',{
        target: {value}
    })
    expect(sortByDate).toHaveBeenCalled()
})

test('should sort by amount',()=>{
    const value = 'amount'
    wrapper.find('select').simulate('change',{
        target: {value}
    })
    expect(sortByAmount).toHaveBeenCalled()
})