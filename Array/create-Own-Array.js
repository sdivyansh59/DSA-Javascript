console.log(`
  we have these method to create array in js . 
    1. let arr=[];
    2. let arr2=new Array();
  But we will define our own array method.  
`)


export default class MyArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    getSize(){
        return this.length;
    }

    push(val){
        this.data[this.length] = val 
        this.length++;
    }

    pop(){
        let val=this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return val;
    }
    
    get(index){
        return this.data[index];
    }

    delete(index){
        this.shiftElementToLeft(index);
        delete this.data[this.length-1];
        this.length--;
        return this.data[this.length-1];
    }

    shiftElementToLeft(index){
        for(let i = index; i < this.length-1; i++){
            this.data[i] = this.data[i+1];
        }
    }

}


const array=new MyArray();
console.log(array.getSize());
array.push(10);
array.push(20);
array.push(30);
array.push(40);
console.log(array);

console.log(array.pop());
console.log(array.get(1));

console.log(array);

array.delete(0);
console.log(array);

