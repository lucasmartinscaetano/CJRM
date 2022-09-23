// inteiros e decimais
const radius = 10 
const pi = 3.14


//operadores aritméticos
const area = pi * radius ** 2 



//ordem das operações
//1 - parênteses
//2 - expoentes ou raízes
//3 - multiplicação e divisão
//4 - adição e subtração
const crazyOperation = 5 * (10 - 3) ** 2

//operadores de incremento e decremento
let postLikes = 10 //shorthand "++"

//operadores addition, subtraction, multiplication e division
 postLikes += 10


//NaN - not a number

// templates strings
const postTittle = 'É bolacha ou biscoito?'
const postAuthor = 'Matheus Saad'
const postComments = '15'



//criando templates HTML
const html = `
 <h2>${postTittle}</h2>
<p>Author:${postAuthor}</p>
<span>Este post tem ${postComments} comentários</span>
`
//console.log(html)

//arrays 
let heroes = ['Batman', 'Catwoman', 'Iro Man']
const ages = [31, 25, 39, 40, 25]
const randomArray = ['Parker', 'Diana', 19, 18]
//métodos de arrays
const joinHeroes = heroes.join('-')
const indexOf25 = ages.indexOf('25')
const moreHeroes = heroes.concat(['Superman', 'Wolverine'])
const pushToHeroes = heroes.push('Cyclops', 'Hulk')
const popHeroes = heroes.pop()

console.log(heroes)