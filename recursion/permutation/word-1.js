

( function( ){

const readline = require("readline-sync");

let str = readline.question().toString();
//console.log(str);

let n = str.length;

const find =  (m , smallAns , n) => {
    if( n=== 0){
        console.log(smallAns);
        return ;
    }

    for( let [key, value] of m){
       
        if(value > 0){
            m.set(key,value-1);
            find( m, smallAns+key, n-1);
            m.set(key,value);
        }
    }
}

let m = new Map();
for( let char of str){
    //console.log(m.get(char));
    if(m.get(char) === undefined){
        m.set(char,1);
    }else{
         m.set(char, m.get(char)+1);
    }  
}

// print map
let smallAns = "";
let len =str.length;
find(m, smallAns , len);

})();


