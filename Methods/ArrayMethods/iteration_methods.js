class IterationArray{
    constructor(...elements){
        for(let i=0;i<elements.length;i++){
            this[i]= elements[i];
        }
        this.length= elements.length;
    }
    forEach(myFunction){
        for(let i=0;i<this.length;i++){
            myFunction(this[i], i, this);
        }
    }

    map(myFunction){
        let arr=[];
        for(let i=0;i<this.length;i++){
            arr.push(myFunction(this[i], i, this));
        }
        return arr;
    }

    filter(myFunction){
        let arr=[];
        for(let i=0;i<this.length;i++){
            if(myFunction(this[i], i, this))
                arr.push(this[i]);
        }
        return arr;
    }

    reduce(myFunction){
        let total= this[0];
        for(let i=1;i<this.length;i++){
            total= myFunction(total, this[i], i, this);
        }
        return total;
    }

    reduceRight(myFunction){
        let total= this[this.length-1];
        for(let i= this.length-2;i >= 0;i--){
            total= myFunction(total, this[i], i, this);
        }
        return total;
    }

    find(myFunction){
        for(let i=0;i<this.length;i++){
            if(myFunction(this[i], i, this))
                return this[i];
        }
        return undefined;
    }

    findIndex(myFunction){
        for(let i=0;i<this.length;i++){
            if(myFunction(this[i], i, this))
                return i;
        }
        return -1;
    }

    findLast(myFunction){
        let lastPassedElement= undefined;
        for(let i=0;i<this.length;i++){
            if(myFunction(this[i], i, this))
                lastPassedElement= this[i];
        }
        return lastPassedElement;
    }

    findLastIndex(myFunction){
        let lastPassedElementIndex= -1;
        for(let i=0;i<this.length;i++){
            if(myFunction(this[i], i, this))
                lastPassedElementIndex= i;
        }
        return lastPassedElementIndex;
    }

    some(myFunction){
        for(let i=0;i<this.length;i++){
            if(myFunction(this[i], i, this))
                return true;
        }
        return false;
    }

    every(myFunction){
        for(let i=0;i<this.length;i++){
            if(!myFunction(this[i], i, this))
                return false;
        }
        return true;
    }
}

// const arr= new IterationArray(1, 2, 3, 4, 5, 6);
// console.log(arr)

// forEach
// arr.forEach((element) => {
//     console.log('This is element:', element)
// })

// // map
// console.log(arr.map((element, index) => element*index))

// // filter
// console.log(arr.filter((element) => element < 3))

// // reduce
// console.log(arr.reduce((total, element) => total+element))

// // reduceRight
// const arr_reduceRight= new IterationArray([0, 1], [2, 3], [4, 5]);
// console.log(arr_reduceRight.reduceRight((total, element) => total.concat(element)))

// // find
// console.log(arr.find((element) => element%3 === 0))

// // findIndex
// console.log(arr.findIndex((element) => element%3 === 0))

// // findLast
// console.log(arr.findLast((element) => element%3 === 0))

// // findLastIndex
// console.log(arr.findLastIndex((element) => element%3 === 0))

// // some
// const arr_some=[1, 2, 3, 5, 7]
// console.log(arr_some.some((element) => element%2 == 0))

// // every
// const arr_every= [2, 4, 6, 8]
// console.log(arr_every.every((element) => element%2 == 0))

module.exports= IterationArray;