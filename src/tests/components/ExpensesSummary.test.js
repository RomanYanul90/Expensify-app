import React from 'react'
import {ExpensesSummary} from "../../components/ExpensesSummary";
import { shallow } from 'enzyme'

test('should render ExpenseSummary with 1 expense correctly',()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={1123}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseSummary with more than one expenses correctly',()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={3} expensesTotal={1123423}/>)
    expect(wrapper).toMatchSnapshot()
})