const MyArray= require('./array_methods')

class MutatorArray extends MyArray{
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

    splice(start, itemsLength, ...elements){
        let arr=[];
        for(let i=start + itemsLength;i<this.length;i++){
            arr.push(this[i]);
        for(let i=start;i<this.length;i++)
            delete this[i];
        }
        let i;
        for(i=0;i<elements.length;i++){
            this[start+i]= elements[i];
        }
        i++;
        let j;
        for(j=0;j<arr.length;j++){
            this[i+j]= arr[j];
        }
        this.length= i+j;
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
    }
}

module.exports= MutatorArray;