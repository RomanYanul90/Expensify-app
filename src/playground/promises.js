const promise = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        //resolve({
         //   name:"Masha",
           // age:24
        //})
        reject("ERROR SYKA")
    },3000)

})

console.log("Before")

promise.then((res)=>{
    console.log(res)
}).catch((err)=>{console.log(err)})