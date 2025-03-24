class MyString{
    constructor(value){
        this.value= value;
        this.length= value.length;
    }

    valueOf(){
        return this.value;
    }

    charAt(index){
        if(index >= this.length || index < 0){
            return undefined;
        }
        else{
            return this.value[index];
        }      
    }

    startsWith(searchString, position){
        if(position === undefined)
            position= 0;
        if(this.value.slice(position, position+searchString.length) === searchString)
            return true;
        return false;
    }

    endsWith(searchString, position){
        if(position === undefined)
            position= this.length;
        if(this.value.slice(position-searchString.length, position) === searchString)
            return true;
        return false;
    }

    indexOf(searchString, position){
        if(position > this.length)
            return -1;
        if(position === undefined || position < 0)
            position= 0;
        for(let i=position;i<this.length- searchString.length+1;i++){
            if(this.value.slice(i, i+searchString.length) === searchString)
                return i;
        }
        return -1;
    }

    lastIndexOf(searchString, position){
        if(position < 0)
            position= 0;
        else if(position > this.length- searchString.length + 1 || position === undefined)
            position= this.length- searchString.length + 1;
        for(let i= position;i>=0;i--){
            if(this.value.slice(i, i+searchString.length) === searchString)
                return i;
        }
        return -1;
    }

    slice(start, end){
        if(!end)
            end=this.length;
        else if(end > this.length)
            end= this.length;
        else if(end < -this.length)
            return undefined;
        else if(end < 0)
            end+= this.length;
        if(!start || start < -this.length)
            start= 0;
        else if(start < 0){
            start+= this.length;
        }
        if(start >= end)
            return undefined;
        let str='';
        while(start < end){
            str+= this.value[start++];
        }
        return str;
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

    includes(searchString, position){
        if(position === undefined)
            position= 0;
        for(let i= position;i<this.length - searchString.length + 1;i++){
            if(searchString === this.value.slice(i, i+searchString.length))
                return true;
        }
        return false;
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

    trimStart(){
        let str='';
        let start=0;
        while(this.value[start] === ' ')
            start++;
        str= this.value.slice(start, this.length);
        return str;
    }

    trimEnd(){
        let str='';
        let end= this.length- 1;
        while(this.value[end] === ' ')
            end--;
        str= this.value.slice(0, end+1);
        return str;
    }

    repeat(repitions){
        let str='';
        for(let i=0;i<repitions;i++){
            str= str.concat(this.value);
        }
        return str;
    }
}

// const str= new MyString('Hello World!');

// // valueOf
// console.log(str.valueOf())

// // charAt
// console.log(str.charAt(6))

// // startsWith
// console.log(str.startsWith('Hello'))
// console.log(str.startsWith('Hello', 1))
// console.log(str.startsWith('World', 6))

// // endsWith
// console.log(str.endsWith('World!'))
// console.log(str.endsWith('World!', str.length-1))
// console.log(str.endsWith('Hello', 5))

// // indexOf
// console.log(str.indexOf('!'))
// console.log(str.indexOf('or'))
// console.log(str.indexOf(' '))
// console.log(str.indexOf('H'))
// console.log(str.indexOf('l'))

// // lastIndexOf
// console.log(str.lastIndexOf('l'))

// // slice
// console.log(str.slice(7));
// console.log(str.slice(4, 9));
// console.log(str.slice(-4));
// console.log(str.slice(-9, -5));

// // toUpperCase
// console.log(str.toUpperCase())

// // concat
// const temp1= new MyString('This is ANSH');
// console.log(str.concat(temp1))

// // split
// console.log(str.split())

// // includes
// console.log(str.includes('World!'))
// console.log(str.includes('World!', 6))
// console.log(str.includes('World!', 7))

// // replace
// const temp2= new MyString('Hello World! What`s inside');
// console.log(temp2.replace('World', 'Ansh'))

// // replaceAll
// const temp3= new MyString('I love Cats. Cats are very easy to love. Cats are very popular.')
// console.log(temp3.replaceAll('Cats', 'Dogs'))

// // trim
// const temp4= new MyString('   Hello World!  ')
// console.log(temp4.trim())

// // trimStart
// const str_trimStart= new MyString('   Hello World  ')
// console.log(str_trimStart.trimStart())
// console.log(str_trimStart.trimStart().length)

// // trimEnd
// const str_trimEnd= new MyString('   Hello World  ')
// console.log(str_trimEnd.trimEnd())
// console.log(str_trimEnd.trimEnd().length)

// // repeat
// const str_repeat= new MyString('Happy! ')
// console.log('I am ', str_repeat.repeat(3))

module.exports= MyString;