const AccessorArray= require('./accessor_methods')

class FinalArray extends AccessorArray{
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
        for(let i=0;i<this.length;i++){
            total= myFunction(total, this[i], i, this);
        }
        return total;
    }

    find(myFunction){
        let passedElement= undefined;
        for(let i=0;i<this.length;i++){
            if(myFunction(this[i], i, this) && passedElement === undefined)
                passedElement= this[i];
        }
        return passedElement;
    }
}

module.exports= FinalArray;