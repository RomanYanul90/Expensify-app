import configureMockStore from 'redux-mock-store'
import {startAddExpense, addExpense, editExpense, removeExpense,setExpenses,startSetExpenses} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import thunk from "redux-thunk";
import database from ' ../../firebase'

beforeEach((done)=>{
    const expenseData= {}
    expenses.forEach(({id,description, note, amount, createdAt})=>{
        expenseData[id]= {
            description,
            note,
            amount,
            createdAt
        }
    });
    database.ref('expenses').set(expenseData).then(()=>done())
})

const createMockStore = configureMockStore([thunk])

test('Should setup remove expense action for an object', () => {
    const action = removeExpense({id: "1a"})
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "1a"
    })
})

test('Should setup edit expense action for an object', () => {
    const action = editExpense("1a", {note: "abc"})
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "1a",
        updates: {
            note: "abc"
        }

    })
})

test('Should setup add expense action for an object', () => {
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[2]

    })
})

// test('should add expense to database and store', (done) => {
//     const store = createMockStore({});
//     const expenseData = {
//         description: 'Mouse',
//         amount: 3000,
//         note: 'This one is better',
//         createdAt: 1000
//     };
//
//     store.dispatch(startAddExpense(expenseData)).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'ADD_EXPENSE',
//             expense: {
//                 id: expect.any(String),
//                 ...expenseData
//             }
//         });
//
//         return database.ref(`expenses/${actions[0].expense.id}`).once('value');
//     }).then((snapshot) => {
//         expect(snapshot.val()).toEqual(expenseData);
//         done();
//     });
// });
//
//
// test('Should add expense with defaults to database and store ', (done) => {
//     const store = createMockStore({});
//     const expenseDefaults = {
//         description: '',
//         amount: 0,
//         note: '',
//         createdAt: 0
//     };
//
//     store.dispatch(startAddExpense({})).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'ADD_EXPENSE',
//             expense: {
//                 id: expect.any(String),
//                 ...expenseDefaults
//             }
//         });
//
//         return database.ref(`expenses/${actions[0].expense.id}`).once('value');
//     }).then((snapshot) => {
//         expect(snapshot.val()).toEqual(expenseDefaults);
//         done();
//     });
// });
//
// test('should setup set expense action object with data',()=>{
//     const action = setExpenses(expenses)
//     expect(action).toEqual({
//         type:"SET_EXPENSES",
//         expenses
//     })
// })
//
// test('should fetch the expenses from firebase',(done)=>{
//     const store = createMockStore({})
//     store.dispatch(startSetExpenses()).then(()=>{
//         const actions = store.getActions()
//         expect(actions[0]).toEqual({
//             type:'SET_EXPENSES',
//             expenses
//         })
//         done()
//     })
// })