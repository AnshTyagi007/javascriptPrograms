const MutatorArray= require('./mutator_methods')

class AccessorArray extends MutatorArray{
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
        if(!end)
            end=this.length;
        let arr=[];
        while(start < end){
            arr.push(this[start++]);
        }
        return arr;
    }

    indexOf(value){
        for(let i=0;i<this.length;i++){
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

    flat(){
        let arr=[];
        for(let i=0;i<this.length;i++){
            if(this[i].length){
                for(let j=0;j<this[i].length;j++)
                    arr.push(this[i][j]);
            }
            else{
                arr.push(this[i]);
            }
        }
        return arr;
    }
}

module.exports= AccessorArray;