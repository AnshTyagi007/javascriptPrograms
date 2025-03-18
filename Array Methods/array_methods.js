class MyArray{
    constructor(...elements){
        for(let i=0;i<elements.length;i++){
            this[i]= elements[i];
        }
        this.length= elements.length;
    }
}

module.exports= MyArray;

const FinalArray= require('./iteration_methods')
const arr= new FinalArray(1, 2, 3, 4, 5, 6);
console.log(arr)

// // pop
// arr.pop();
// console.log(arr)

// // push
// arr.push(6)
// console.log(arr)

// // shift
// arr.shift()
// console.log(arr)

// // unshift
// arr.unshift(1)
// console.log(arr)

// // splice
// const arr_splice= new FinalArray(1, 2, 7, 8, 9, 6, 7)
// arr_splice.splice(2, 3, 3, 4, 5)
// console.log(arr_splice)

// // sort
// const arr_sort= new FinalArray(6,4,1,5,3,2)
// arr_sort.sort()
// console.log(arr_sort)

// // reverse
// const arr_reverse= new FinalArray(1, 2, 3, 4, 5)
// arr_reverse.reverse()
// console.log(arr_reverse)

// // concat
// const arr_concat= new FinalArray(7, 8, 9)
// console.log(arr.concat(arr_concat))

// // slice
// console.log(arr.slice(2,5))
// console.log(arr.slice(2))

// //  indexOf
// console.log(arr.indexOf(4))

// // join
// console.log(arr.join())
// console.log(arr.join(''))
// console.log(arr.join('*'))

// // includes
// if(arr.includes(4))
//     console.log('4 is present')
// else
//     console.log('4 is not present')

// flat
// const arr_flat= new FinalArray([1, 2], [3, 4], 5, [6, [7, [8, 9]]])
// console.log(arr_flat.flat());

// // forEach
// arr.forEach((element) => {
//     console.log('This is element:', element)
// })

// // map
// console.log(arr.map((element, index) => element*index))

// // filter
// console.log(arr.filter((element) => element < 3))

// // reduce
// console.log(arr.reduce((total, element) => total+element))

// // find
// console.log(arr.find((element) => element%3 == 0))