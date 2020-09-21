




//_______________________________________________OBJECT_DESTRUCTURING___________________________________________________________

/*const person ={
    name:"Roman",
    age:20,
    location:{
        city:"Grodno",
        temp: 20
    }
}

const {name :firstName = 'Anon',age} = person

console.log(`${firstName} is ${age} yo.`)

const { city,temp : temperature } = person.location

if(city && temperature){
    console.log(`It is ${temperature} in ${city}.`)
}

const book ={
    publisher:{
        name:'penguin'
    }
}

const { name: publisherName = 'Self publish'} = book.publisher

console.log(publisherName)*/

//_______________________________________________ARRAYS_DESTRUCTURING___________________________________________________________

const adress = ['Belarus','Minsk','Soviet street','135','43','230047']

const [country,city,street,house,flat,index]=adress

console.log(`You are in ${country}, ${city}`)

const item = ['coffee','$2.00','$2.50','$3.00']

const [itemName,,,large_coffee_price]=item

console.log(`Large hot ${itemName} price is: ${large_coffee_price}.`)

const person={
    name:"Roman"
}

const getName=({name})=>({
    name
})

console.log(getName(person))
