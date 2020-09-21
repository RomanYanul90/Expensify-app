import React from 'react'
import { shallow } from 'enzyme'
import Expense_form from "../../components/Expense_form";
import expenses from "../fixtures/expenses";

test('should render Expense form correctly',()=>{
    const wrapper = shallow(<Expense_form/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render Expense form with data',()=>{
    const wrapper = shallow(<Expense_form expense = {expenses[0]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render error msg for invalid submission',()=>{
    const wrapper = shallow(<Expense_form />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

test('should set description on input change',()=>{
    const value = "New description"
    const wrapper = shallow(<Expense_form />)
    wrapper.find('input').at(0).simulate('change',{
        target:{ value }
    })
    expect(wrapper.state('description')).toBe(value)
})

test('should set note on textarea change',()=>{
    const value = "New note"
    const wrapper = shallow(<Expense_form />)
    wrapper.find('textarea').simulate('change',{
        target:{ value }
    })
    expect(wrapper.state('note')).toBe(value)
})

test('should set amount for valid input',()=>{
    const value = '12.22'
    const wrapper = shallow(<Expense_form />)
    wrapper.find('input').at(1).simulate('change',{
        target:{ value }
    })
    expect(wrapper.state('amount')).toBe(value)
})

test('should not set amount for valid input',()=>{
    const value = '12.223'
    const wrapper = shallow(<Expense_form />)
    wrapper.find('input').at(1).simulate('change',{
        target:{ value }
    })
    expect(wrapper.state('amount')).toBe('')
})

test('should call onSubmit prop for valid form submission ',()=>{
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<Expense_form expense = {expenses[0]} onSubmit = {onSubmitSpy}/>)
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    })
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt,
    })
})

