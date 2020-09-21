import {addExpense,editExpense,removeExpense} from "../../actions/expenses";

test('Should setup remove expense action for an object',()=>{
    const action = removeExpense({id:"1a"})
    expect(action).toEqual({
        type:"REMOVE_EXPENSE",
        id:"1a"
    })
})

test('Should setup edit expense action for an object',()=>{
    const action = editExpense("1a",{note:"abc"})
    expect(action).toEqual({
        type:"EDIT_EXPENSE",
        id:"1a",
        updates:{
            note:"abc"
        }

    })
})

test('Should setup add expense action for an object',()=>{
    const expanseDate={
        description:'Rent',
        note:'text',
        amount:100,
        createdAt:1000}
    const action = addExpense(expanseDate)
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense:{
            ...expanseDate,
            id:expect.any(String),
        }
   })
})


test('Should setup add expense action for an object with default values',()=>{

    const action = addExpense()
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense:{
            id: expect.any(String),
            description:'',
            note:'',
            amount:0,
            createdAt:0
        }
    })
})