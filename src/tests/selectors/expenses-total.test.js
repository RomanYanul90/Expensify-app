import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from "../fixtures/expenses";

test('should return 0 if there is no expenses',()=>{
    const result = selectExpensesTotal([])
    expect(result).toBe(0)
})

test('should correctly return amount of expense if only one expense was passed',()=>{
    const result = selectExpensesTotal([expenses[0]])
    expect(result).toBe(195)
})

test('should correctly return the sum of all expenses that was passed',()=>{
    const result = selectExpensesTotal(expenses)
    expect(result).toBe(114195)

})