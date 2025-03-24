class AccessorArray{
    constructor(...elements){
        for(let i=0;i<elements.length;i++){
            this[i]= elements[i];
        }
        this.length= elements.length;
    }
    with(index, value){
        if(index >= -this.length && index < 0)
            index+= this.length;
        if(index < -this.length || index >= this.length)
            throw new RangeError('Index out of range');
        const arr= [];
        for(let i=0;i<this.length;i++){
            if(i === index)
                arr.push(value)
            else
                arr.push(this[i])
        }
        return arr;
    }

    concat(arr){
        let result= [];
        for(let i=0;i<this.length;i++){
            result.push(this[i]);
        }
        for(let i=0;i<arr.length;i++){
            result.push(arr[i]);
        }
        return result;
    }

    slice(start, end){
        if(!end || end > this.length)
            end=this.length;
        else if(end < -this.length)
            end= 0;
        else if(end < 0)
            end= this.length+ end;
        if(!start || start < -this.length)
            start= 0;
        else if(start < 0)
            start= this.length+ start;
        else if(start > this.length)
        if(start >= end || start >= this.length)
            return [];
        let arr=[];
        while(start < end){
            arr.push(this[start++]);
        }
        return arr;
    }

    indexOf(value, index){
        if(index === undefined)
            index= 0;
        for(let i= index;i<this.length;i++){
            if(this[i] === value)
                return i;
        }
        return -1;
    }

    lastIndexOf(value, index){
        if(index === undefined)
            index= this.length-1;
        for(let i= index;i>=0;i--){
            if(this[i] === value)
                return i;
        }
        return -1;
    }

    join(middle){
        if(middle === undefined)
            middle= ',';
        let str='';
        for(let i=0;i<this.length;i++){
            str+= this[i];
            if(i < this.length -1)
                str+= middle;
        }
        return str;
    }

    includes(value){
        for(let i=0;i<this.length;i++){
            if(this[i] === value)
                return true;
        }
        return false;
    }

    // flat method using recursion
    // flat(element, index, arr){
    //     if(element === undefined){
    //         arr=[];
    //         element= this;
    //         index= 0;
    //     }
    //     if(element.length){
    //         if(index < element.length){
    //             this.flat(element[index], 0, arr)
    //             this.flat(element, ++index, arr);
    //         }
    //     }
    //     else{
    //         arr.push(element);
    //     }
    //     return arr;
    // }

    // flat method using loop
    flat(){
        let arr=[];
        let temp= [];
        for(let i=0;i<this.length;i++)
            temp.push(this[i])
        while(temp.length){
            if(!temp[0].length){
                arr.push(temp.shift());
            }
            else{
                let nestedArray= temp.shift();
                while(nestedArray.length)
                    temp.unshift(nestedArray.pop())
            }
        }
        return arr;
    }
    
    flatMap(myFunction){
        let temp=[];
        for(let i=0;i<this.length;i++){
            temp.push(myFunction(this[i], i, this))
        }
        let arr=[];
        for(let i=0;i< temp.length;i++){
            if(temp[i].length){
                for(let j=0;j<temp[i].length;j++)
                    arr.push(temp[i][j])
            }
            else
                arr.push(temp[i]);
        }
        return arr;
    }

    toReversed(){
        let arr=[];
        for(let i= this.length-1;i>=0;i--){
            arr.push(this[i]);
        }
        return arr;
    }

    toSorted(){
        let arr=[];
        for(let i=0;i<this.length;i++)
            arr.push(this[i]);
        // Insertion Sort
        for(let i=1;i<arr.length;i++){
            let key= arr[i];
            let j=i-1;
            while( key <= arr[j] && j >= 0){
                arr[j+1]= arr[j];
                j--;
            }
            arr[j+1]= key;
        }
        return arr;
    }

    toSpliced(start, itemsLength, ...elements){
        let arr=[];
        for(let i=0;i<start;i++)
            arr.push(this[i]);
        for(let i=0;i<elements.length;i++)
            arr.push(elements[i]);
        for(let i=start+itemsLength;i<this.length;i++)
            arr.push(this[i]);
        return arr;
    }
}

// const arr= new AccessorArray(1, 2, 3, 4, 5, 6);
// console.log(arr)

// // with
// console.log(arr.with(0, 7))
// console.log(arr)

// // concat
// const arr_concat= new AccessorArray(7, 8, 9)
// console.log(arr.concat(arr_concat))

// // slice
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(1, 5));
// console.log(arr.slice(-2));
// console.log(arr.slice(2, -1));
// console.log(arr.slice());

// //  indexOf
// console.log(arr.indexOf(1))
// console.log(arr.indexOf(3))
// console.log(arr.indexOf(6))
// console.log(arr.indexOf(7))

// // lastIndexOf
// const arr_lastIndexOf= new AccessorArray(1, 2, 3, 4, 5, 3, 6, 7)
// console.log(arr_lastIndexOf.lastIndexOf(3))
// console.log(arr_lastIndexOf.lastIndexOf(3, 4))

// // join
// console.log(arr.join())
// console.log(arr.join(''))
// console.log(arr.join('*'))

// // includes
// if(arr.includes(4))
//     console.log('4 is present')
// else
//     console.log('4 is not present')

// // flat
// const arr_flat= new AccessorArray([1, [2, [3, 4, [11, 12]]], [5, [6, 7]], [8, [9]]])
// console.log(arr_flat.flat());

// // flatMap
// const arr_flatMap= new AccessorArray(2, 4, 6, 8, 10)
// console.log(arr_flatMap.flatMap((element) => [element-1, element]))

// toReversed
// const arr_toReversed= new AccessorArray(1, 2, 3, 4, 5)
// console.log(arr_toReversed.toReversed())
// console.log(arr_toReversed)

// toSorted
// const arr_toSorted= new AccessorArray(6, 4, 1, 5, 3, 2)
// console.log(arr_toSorted.toSorted())
// console.log(arr_toSorted)

// toSpliced
// const arr_toSplice= new AccessorArray(1, 2, 7, 8, 9, 6, 7)
// console.log(arr_toSplice.toSpliced(2, 3, 3, 4, 5))
// console.log(arr_toSplice)

module.exports= AccessorArray;