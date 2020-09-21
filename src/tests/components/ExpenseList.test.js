import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseList } from '../../components/ExpenseList'
import expenses from "../fixtures/expenses";

test('should render Expense list with expenses',()=>{
    const wrapper = shallow(<ExpenseList expenses = {expenses}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render Expense list without expenses with message',()=>{
    const wrapper = shallow(<ExpenseList expenses = {[]}/>)
    expect(wrapper).toMatchSnapshot()
})

