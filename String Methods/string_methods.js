class MyString{
    constructor(value){
        this.value= value;
        this.length= value.length;
    }
}

module.exports= MyString;

const StringMethods= require('./methods');
const str= new StringMethods('Hello World!')
console.log(str.value)
console.log(str.length)

// // charAt
// console.log(str.charAt(6))

// // indexOf
// console.log(str.indexOf(' '))

// slice
// console.log(str.slice(6, this.length))
// console.log(str.slice(6))

// toUpperCase
// console.log(str.toUpperCase())

// concat
// const temp1= new StringMethods('This is ANSH');
// console.log(str.concat(temp1))

// split
// console.log(str.split())

// replace
// const temp2= new StringMethods('Hello World! What`s inside');
// console.log(temp2.replace('World', 'Ansh'))

// replaceAll
// const temp3= new StringMethods('I love Cats. Cats are very easy to love. Cats are very popular.')
// console.log(temp3.replaceAll('Cats', 'Dogs'))

// trim
// const temp4= new StringMethods('   Hello World!  ')
// console.log(temp4.trim())