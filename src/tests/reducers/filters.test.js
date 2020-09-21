import moment from "moment";
import filtersReducer from '../../reducers/filters'

const filtersReducerDefaultState = {
    text:'',
    sortBy:'amount',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month'),
}

test('Should setup default filter values ',() => {
    const state = filtersReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })
})

test('Should set sortBy to amount',()=>{
    const state = filtersReducer(undefined,{type:'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('Should set sortBy to date',()=>{
    const filtersReducerDefaultState = {
        text:'',
        sortBy:'amount',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month'),
    }
    const state = filtersReducer(filtersReducerDefaultState,{type:'SORT_BY_DATE'})
    expect(state.sortBy).toBe('date')
})

test('Should set text filter',()=>{
    const text = 'TEST TEXT'
    const state = filtersReducer(filtersReducerDefaultState,{type:'SET_TEXT_FILTER',text})
    expect(state.text).toBe(text)
})

test('Should set start date filter',()=>{
    const startDate = moment()
    const state = filtersReducer(undefined,{type:'SET_START_DATE',startDate})
    expect(state.startDate).toEqual(startDate)
})

test('Should set end date filter',()=>{
    const endDate = moment()
    const state = filtersReducer(undefined,{type:'SET_END_DATE',endDate})
    expect(state.endDate).toEqual(endDate)
})