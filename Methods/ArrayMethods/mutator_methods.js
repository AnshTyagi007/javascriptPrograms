class MutatorArray{
    constructor(...elements){
        for(let i=0;i<elements.length;i++){
            this[i]= elements[i];
        }
        this.length= elements.length;
    }
    pop(){
        let removedItem= this[this.length -1];
        delete this[this.length-1];
        this.length--;
        return removedItem;
    }

    push(input){
        this[this.length]= input;
        this.length++;
        return this.length;
    }

    shift(){
        let removedItem= this[0];
        for(let i=0;i<this.length-1;i++){
            this[i]= this[i+1];
        }
        delete this[this.length-1];
        this.length--;
        return removedItem;
    }

    unshift(input){
        for(let i=this.length-1;i>=0;i--){
            this[i+1]= this[i];
        }
        this.length++;
        this[0]= input;
        return this.length;
    }

    splice(start, deleteCount, ...elements){
        if(start < -this.length)
            start= 0;
        else if(start < 0)
            start+= this.length;
        else if(start >= this.length){
            for(let i=0;i<elements.length;i++){
                this.push(elements[i]);
                this.length++;
            }
            return [];
        }

        let arr=[];
        for(let i=start+ deleteCount; i< this.length;i++){
            arr.push(this[i]);
        }

        let deletedItems=[];
        for(let i=this.length-1;i>=start;i--){
            if(i < start+deleteCount)
                deletedItems.unshift(this[i]);
            delete this[i];
            this.length--;
        }

        for(let i=0;i<elements.length;i++){
            this.push(elements[i]);
        }

        for(let i=0;i<arr.length;i++){
            this.push(arr[i]);
        }
        return deletedItems;
    }

    copyWithin(target, start, end){
        if(target >= this.length || start >= this.length || target === undefined)
            return this;
        if(target < -this.length)
            target= 0;
        else if(target < 0)
            target+= this.length;
        if(start < -this.length || start === undefined)
            start=0;
        else if(start < 0)
            start+= this.length;
        if(end >= this.length || end === undefined)
            end= this.length;
        else if(end < -this.length)
            end= 0;
        else if(end < 0)
            end+= this.length;
        if(start >= end)
            return this;
        let copy= [];
        while(start < end){
            copy.push(this[start++]);
        }
        for(let i=0;i<copy.length && target+i<this.length;i++){
            this[target+i]= copy[i];
        }
        return this;
    }

    sort(){
        // Insertion Sort
        for(let i=1;i<this.length;i++){
            let key= this[i];
            let j=i-1;
            while(key < this[j] && j >= 0){
                this[j+1]= this[j];
                j--;
            }
            this[j+1]= key;
        }
        return this;
    }

    reverse(){
        let left=0, right= this.length-1;
        while(left < right){
            let temp= this[left];
            this[left]= this[right];
            this[right]= temp;
            left++;
            right--;
        }
        return this;
    }

    fill(value, start, end){
        if(start >= this.length)
            return this;
        else if(start < -this.length || start === undefined)
            start= 0;
        else if(start < 0)
            start+= this.length;
        if(end >= this.length || end === undefined)
            end= this.length;
        else if(end < -this.length)
            end=0;
        else if(end < 0)
            end+= this.length;
        if(start >= end)
            return this;
        while(start < end)
            this[start++]= value;
        return this;
    }
}

// const arr= new MutatorArray(1, 2, 3, 4, 5, 6);
// console.log(arr)

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
// const arr_splice= new MutatorArray(1, 2, 7, 8, 9, 6, 7)
// console.log(arr_splice.splice(2, 3, 3, 4, 5))
// arr_splice.splice(10, 3, 3, 4, 5)
// console.log(arr_splice)

// copyWithin
// const arr_copyWithin= new MutatorArray(1, 2, 3, 4, 5);
// console.log(arr_copyWithin.copyWithin(2))
// console.log(arr_copyWithin.copyWithin(1, 2))
// console.log(arr_copyWithin.copyWithin(1, 3, 5))

// // sort
// const arr_sort= new MutatorArray(6,4,1,5,3,2)
// arr_sort.sort()
// console.log(arr_sort)

// // reverse
// const arr_reverse= new MutatorArray(1, 2, 3, 4, 5)
// arr_reverse.reverse()
// console.log(arr_reverse)

// fill
// const arr_fill1= new MutatorArray(1, 2, 3, 4, 5, 6)
// const arr_fill2= new MutatorArray(1, 2, 3, 4, 5, 6)
// const arr_fill3= new MutatorArray(1, 2, 3, 4, 5, 6)
// const arr_fill4= new MutatorArray(1, 2, 3, 4, 5, 6)
// const arr_fill5= new MutatorArray(1, 2, 3, 4, 5, 6)
// const arr_fill6= new MutatorArray(1, 2, 3, 4, 5, 6)
// const arr_fill7= new MutatorArray(1, 2, 3, 4, 5, 6)
// const arr_fill8= new MutatorArray(1, 2, 3, 4, 5, 6)
// console.log(arr_fill1.fill(4));
// console.log(arr_fill2.fill(4, 1));
// console.log(arr_fill3.fill(4, 1, 2));
// console.log(arr_fill4.fill(4, 1, 1));
// console.log(arr_fill5.fill(4, 3, 3));
// console.log(arr_fill6.fill(4, -3, -2));
// console.log(arr_fill7.fill(4, NaN, NaN));
// console.log(arr_fill8.fill(4, 3, 5));

module.exports= MutatorArray;