//strings
console.log('hello, world!')

const email = 'lucasmartinscaetano98@gmail.com'

console.log(email)

//concatenação de strings (+)
const firstName = 'Lucas'
const lastName = 'Martins'
const fullName = firstName + ' ' + lastName 

console.log(fullName)

//acessando caracteres
console.log(fullName[2])

//comprimento de uma string
console.log(fullName.length)

// métodos de string
//console.log(fullName.toUpperCase())

//const result = fullName.toLocaleLowerCase()

//console.log(result)

//const index = email.indexOf('a')
//console.log(index)

//método lastIndexOf
//const lastIndexOfA = email.lastIndexOf('a')

//console.log(lastIndexOfA)

//método slice
//const emailSlice = email.slice(0, 12)
const emailReplace = email.replace('l', 'y')
console.log(emailReplace)