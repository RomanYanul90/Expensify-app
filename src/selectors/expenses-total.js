export default (expenses)=>{
    return expenses.map((el)=>el.amount).reduce((sum,value)=>sum+value,0)
}