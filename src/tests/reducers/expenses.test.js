import expensesReducer from '../../reducers/expenses'
import expenses from "../fixtures/expenses";

test('Should setup default state',() => {
    const state = expensesReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual([])
})

test('Should remove expense by id',() => {
    const action = {
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([expenses[0],expenses[2]])
})

test('Should not remove expense with non existing id',() => {
    const action = {
        type:'REMOVE_EXPENSE',
        id:'no exist'
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual(expenses)
})

test('Should add a new expense',() => {
    const action = {
        type:'ADD_EXPENSE',
        expense:{
            id:'4',
            description:'Coffee',
            note:'',
            amount:40,
            createdAt:0
        }
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([...expenses,action.expense])
})

test('Should edit an expense',() => {
    const action = {
        type:'EDIT_EXPENSE',
        id:expenses[0].id,
        updates:{
            description:'tea',
        }
    }
    const state = expensesReducer(expenses,action)
    expect(state[0].description).toBe(action.updates.description)
})

test('Should not edit an expense if it is not exist',() => {
    const action = {
        type:'EDIT_EXPENSE',
        id:'not exist',
        updates:{
            description:'Something new',
        }
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual(expenses)
})

test('should set expenses',()=>{
    const action = {
        type:'SET_EXPENSES',
        expenses:[expenses[1]]
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([expenses[1]])
})

