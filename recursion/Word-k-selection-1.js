
(function (){

let input = require('readline-sync');

let str = input.question().toString();
let r = parseInt(input.question());

let s= new Set();
for( let char of str){
    s.add(char);
}

let newStr = "";
for( let ele of s){
    newStr+=ele;
}

const findPossibility = ( str, index, smallAns , r ) =>{
    if( smallAns.length == r){
        console.log(smallAns);
        return ;
    }
    if( index === str.length){
        return ;
    }

    // take
    findPossibility(str, index+1, smallAns+str[index] ,r);
    findPossibility(str, index+1, smallAns ,r);

}

let smallAns = "";
let index =0;
findPossibility( newStr, 0, smallAns , r );
console.log(s, newStr);
})();