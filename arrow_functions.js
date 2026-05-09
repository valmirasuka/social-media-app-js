// Arrow Functions:

// 1) Declared functions
function greet() {
    return 'Hello World'
}

greet()
// 2) Function expression

const greet2 = function () {
    return 'Hello World'
}

// 3) Arrow function
const greet3 = () => 'Hello World'


// ----

function add(a, b) {
    return a * b
}

const add1 = (a, b) => a * b

// Rules:

// no parameters:
const greet4 = () => 'Hello World'

// we have parameters:
const add2 = (a, b) => a * b

// one parameter
function hello(name) {
    return `Hello ${user}`
}

const hello1 = name => 'Hello ${name}'

// multi line:

const describe = (user) => {
    const greeting = `Hello ${user.name}`
    const age = `Hello ${user.age}`

    return greeting + age;
}

const add3 = (a, b) => a + b

const square = n => n * n

const isEven = num => n % 2 === 0

const repeat = str => str * str

const prices = [10, 20, 30]

let total = 0;

prices.forEach(price => total += price);

const users = [{id: 1}, {id: 2}, {id: 3}]

users.forEach(user => console.log("Checking user: " + user.id))


// .forEach -> do something for each item no return
// map -> transform each item into a new one (a new array)
// filter -> keeps only items that pass a test (a new array)

const numbers = [1, 2, 3, 4]

// 2, 4, 6, 8

const double = numbers.map((nr) => nr * 2)

console.log(numbers)
console.log(double)

const users1 = [
    {name: 'Arti', age: 30},
    {name: 'Leo', age: 25}
]

const names = users1.map((user) => user.name)

console.log(names)

// .filter

const ages = [12, 10, 25, 7, 50]

const adults = ages.filter((age) => age >= 18)

console.log(adults)

const users2 = [
    {name: 'Arti', isActive: true},
    {name: 'Leo', isActive: false},
    {name: 'Besniku', isActive: true}
]

// duke perdorur .filter -> mbushe nje array te ri
// activeUsers me userat te cilat jane aktive

const activeUsers = users2.filter((activeUsers) => activeUsers.isActive).map((user) => user.name.toUpperCase())

console.log(activeUsers)

// 2.
// duke perdorur .filter -> mbushe nje array te ri
// evenNumbers me numrat qe jane cift
const ages2 = [12, 10, 25, 7, 50]

const evenNumbers = ages2.filter((age) => age % 2 === 0)

console.log(evenNumbers)

const products = [
    {name: 'Mouse', price: 20},
    {name: 'Keyboard', price: 80},
    {name: 'Monitor', price: 180}
]

// Filtroj dhe shfaqi vetem produktet qe jane me lire se 100 
// dhe shfaqi vetem emrat (duke perdorur .map)

const cheapProducts = products.filter((product) => product.price < 100).map((updatedProduct) => updatedProduct.name)

console.log(cheapProducts)