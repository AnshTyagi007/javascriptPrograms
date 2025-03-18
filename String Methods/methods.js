const MyString= require('./string_methods');

class StringMethods extends MyString{
    charAt(index){
        if(index >= this.length || index < 0){
            return undefined;
        }
        else{
            return this.value[index];
        }      
    }

    indexOf(val){
        for(let i=0;i<this.length;i++){
            if(this.value[i] === val)
                return i;
        }
        return undefined;
    }

    slice(start, end){
        if(!end)
            end=this.length;
        if(start >= end || end > this.length || start < 0)
            return undefined;
        else{
            let str='';
            while(start < end){
                str+= this.value[start++];
            }
            return str;
        }
    }

    toUpperCase(){
        let UpperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let LowerCase='abcdefghijklmnopqrstuvwxyz';
        let str='';
        for(let i=0;i<this.length;i++){
            if(this.value[i] >= 'a' && this.value[i] <= 'z'){
                str+= UpperCase[LowerCase.indexOf(this.value[i])];
            }
            else{
                str+= this.value[i];
            }
        }
        return str;
    }

    concat(str){
        let comb='';
        comb+= this.value + str.value;
        return comb;
    }

    split(){
        let arr=[];
        for(let i=0;i<this.length;i++){
            arr.push(this.value[i]);
        }
        return arr;
    }

    replace(searchValue, newValue){
        let str='';
        let i;
        for(i=0;i<this.length;i++){
            if(this.value.slice(i, searchValue.length + i) === searchValue){
                str+= newValue;
                i+= searchValue.length;
                break;
            }
            else{
                str+= this.value[i];
            }
        }
        str+= this.value.slice(i, this.length);
        return str;
    }

    replaceAll(searchValue, newValue){
        let str='';
        for(let i=0;i<this.length;i++){
            if(this.value.slice(i, searchValue.length + i) === searchValue){
                str+= newValue;
                i+= searchValue.length- 1;
            }
            else{
                str+= this.value[i];
            }
        }
        return str;
    }

    trim(){
        let str='';
        let start=0, end=this.length-1;
        while(this.value[start] === ' ')
            start++;
        while(this.value[end] === ' ')
            end--;
        str= this.value.slice(start, end+1);
        return str;
    }
}

module.exports= StringMethods;