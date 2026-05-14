// 1. returnOnlyOddPeople(people)
// Shkruani një funksion që pranon një listë personash, ku secili person ka një ID, dhe kthen vetëm ata që kanë ID tek (odd number).
// const people = [
// { id: 1, name: "Arta" },
// { id: 2, name: "Blerim" },
// { id: 3, name: "Doni" },
// { id: 4, name: "Elira" }
// ];
// Shpjegimi:
// Numrat tek janë ata që kur i pjestojmë me 2, mbetja (remainder) është 1.
// Kështu kontrollojmë id % 2 !== 0.

// 2. maxNr(a, b)
// Shkruani një funksion maxNr(a, b) që kthen numrin më të madh mes dy numrave.

// 3. isLandscape(width, height)
// Shkruani një funksion që kthen true nëse gjerësia është më e madhe se lartësia.
// Shpjegimi:
// Nëse width është më i madh se height, fotoja është në pozicion landscape.

// 4. fizzBuzz(input)
// Shkruani funksionin fizzBuzz që bën këto gjëra:
// Nëse numri pjestohen me 3 → “Fizz”
// Me 5 → “Buzz”
// Me 3 dhe 5 → “FizzBuzz”
// Nëse nuk është numër → “not a number”
// remainder me 3 kur osht mbetja 0 

// 5. checkSpeed(speed)
// Shkruani funksionin checkSpeed që:
// nëse speed ≤ 70 → “Ok”
// çdo 5 km/h mbi limit → 1 pikë
// nëse pikët ≥ 12 → “License suspended”

// Shpjegimi:
// Çdo 5 km/h mbi 70 jep 1 pikë; nëse pikët arrijnë 12, shoferi humb patentën.
// Bonus: Math.floor() -> përdoret për te rrumbullaksuar nje numer dhjetor

// 6. countTruthy(array)
// Shkruani funksion që numëron sa elemente të array-it janë “truthy”.
// 📌 Shembull array:
// [0, null, undefined, 2, 3] → rezultati duhet të jetë 2
// Shpjegimi:
// Truthy janë vlerat që JavaScript i konsideron të vërteta, si numrat pozitivë, stringjet jo bosh, etj

// 7. sum(limit)
// Shkruani një funksion që merr një array me numra dhe gjen shumën e të gjithë numrave që pjestohen me 3 ose me 5.
// const numbers = [1, 3, 5, 6, 7, 9, 10];
// Shpjegimi:
// Shikojmë çdo numër tek array-i. Nëse një numër pjestohen me 3 ose me 5, e shtojmë në shuma. Në fund kthejmë shumën.

// 8. Krijo një listë notash [9, 8, 5, 10] dhe gjej mesataren duke përdorur forEach.

// 9. Krijo një funksion getNumbersGreaterThan10(numbers) që kthen vetëm numrat më të mëdhenj se 10. me filter

// 10. Krijo një funksion formatProductNames(products) që kthen një array të ri ku çdo emër ka tekstin:
// "Product: " përpara emrit.

// Psh:
// ["Product: Laptop", "Product: Mouse", "Product: Keyboard"] filter

const people = [
    { id: 1, name: "Arta" },
    { id: 2, name: "Blerim" },
    { id: 3, name: "Doni" },
    { id: 4, name: "Elira" }
];

const returnOnlyOddPeople = people => people.filter(oddPeople => oddPeople.id % 2 !== 0)

console.log(returnOnlyOddPeople(people))

const maxNr = (a, b) => {
    if (a > b) {
        console.log(a)
    } else {
        console.log(b)
    }
}

maxNr(10, 5)

const isLandscape = (width, height) => console.log(`Landscape mode: ${width > height}`)

isLandscape(40, 20)

const fizzBuzz = input => {
    console.log()
    if (input % 3 === 0 && input % 5 === 0) {
        console.log('FizzBuzz')
    } else if (input % 5 === 0) {
        console.log('Buzz')
    } else if (input % 3 === 0) {
        console.log('Fizz')
    } else if (typeof input !== "number"){
        console.log('not a number')
    }
}

fizzBuzz('')

const checkSpeed = speed => {
    if (speed <= 70) {
        console.log('Ok');
        return;
    }

    const piket = Math.floor((speed - 70) / 5);

    if (piket >= 12) {
        console.log('License suspended');
    } else {
        console.log('Piket:', piket);
    }
}

checkSpeed(10)   
checkSpeed(80)  
checkSpeed(130)  

let elements = [0, null, undefined, 2, 3, 'Valmira'];

const countTruthy = array => array.filter(element => element).length

console.log(countTruthy(elements));

const numbers = [1, 3, 5, 6, 7, 9, 15];

let sum1 = 0;

const sum = limit => {
    limit.forEach(element => {
        if (element % 3 === 0 && element % 5 === 0) {
            sum1 = sum1 + element
        }
    });
}

sum(numbers)
console.log(sum1)

const notat = [9, 8, 5, 10]

let mesatarja = 0
let shuma = 0

notat.forEach(element => {
    shuma = shuma + element
    mesatarja = shuma / 4 
})

console.log(mesatarja)

const numbers1 = [90, 8, 50, 10, 5]

const getNumbersGreaterThan10 = numbers => numbers.filter(element => element > 10)

console.log(getNumbersGreaterThan10(numbers1))

let products = ["Laptop", "Mouse", "Keyboard"]

const formatProductNames = products => products.map(product => "Product: " + product)

console.log(formatProductNames(products))