// per pdf shembull smunesh me perdor react / e bon si html 

// harte e js ne browser 
// document - objekt qe e permban strukturen e html 
// 
// metoda klasike
// 1. gjen nje element me id-ne e dhene
document.getElementById('id-e-elementit')

//2  gjen te gjitha elementet ne nje klase
document.getElementsByClassName('emri-i-klases')

// 3 gjen te gjitha elementet me nje tag te caktuar
document.getElementsByTagName('p')

console.log(document.getElementById('titulli'))

// spam ose li me tag

// metodat e reja

// 1 gjen elementin e pare qe perputhet me nje CSS selector

document.querySelector('.info'); // i pari me klasen info class = "info"
document.querySelector('#title'); // i pari me id title
document.querySelector('p'); // i pari <p> ne faqe
document.querySelector('div > p'); // <p> te pare brenda <div>

// console.log(document.querySelector('.info'))

// console.log(document.querySelector('p'))

// console.log(document.querySelector('#paragrafi'))

console.log(document.querySelector('.paragrafi-class'))

// 2 gjet te gjitha elementet qe perputhen me ate selektor

console.log(document.querySelectorAll('.info'))

// krejt kontentin qe e ka qeky element
document.querySelectorAll('.info').forEach(item => console.log(item.innerHTML))

// tparit element document.querySelector
// me all i merr krejt

// Manipulimi i elementeve

// console.log(document.querySelector('h1').innerHTML)

const h1 = document.querySelector('h1')

console.log(h1)

h1.textContent = "Nuk eshte ora 11"

// innerhtml mujna mrena me ndryshu edhe tagat e html 
// textcontent qfar kontenti ka mrena

// const p = document.querySelector('p')

// p.innerHTML = '<strong><em>Ky eshte paragrafi italic<em></strong>'

// p.style.color = 'red'

// p.style.background = 'black'

// shto ose hiq klasa 

const div = document.querySelector('div')

// div.classList.add('div-class')

// div.classList.remove('div-class')

div.classList.toggle('div-class') // nese nuk e ka klasen e shton nese e ka e hjek 

// Manipulimi me atribute

const picsumImgUrl = 'https://picsum.photos/seed/picsum/200/300'

const img = document.querySelector('img')

console.log(img)


console.log('Source??', img.getAttribute('src'))

// img.removeAttribute('src')

// Event Listeners - 

const button = document.querySelector('button')

button.addEventListener('click', (event) => {
    // console.log('Butoni u klikua')
    // img.setAttribute('src', picsumImgUrl)
})

div.addEventListener('scroll', () => {
    console.log('Heyyy!!!')
})

const sayHi = (event) => {
    // console.log('Ku po klikojme', event.target)
    // console.log('Qfar tipi te eventit kemi', event.type)
    // console.log('Koordinata X e mausit', event.clientX)
    const paragraphEl = document.querySelector('#paragrafii');

    paragraphEl.textContent = inputValue
}

let inputValue;

// pranon tipin dhe funksionin
const onInput = (event) => {
    // console.log(event.target.value)
    button.textContent = event.target.value
    inputValue = event.target.value
}

button.addEventListener('click', sayHi)

const inputEl = document.querySelector('input')

inputEl.addEventListener('input', onInput)
