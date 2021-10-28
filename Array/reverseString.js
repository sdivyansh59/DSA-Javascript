// Reverse String using myArray , which we created 
// reverse sring : 
// 'Hi My name is Andrei'  -->  'ierdnA si eman yM iH'

// import MyArray  from "./create-Own-Array";  // error ??? pease read about it
//SyntaxError: Cannot use import statement outside a module

console.log(`
    1. JS string are immutable : https://medium.com/@codesprintpro/javascript-string-immutability-ead81df30693
    2.  reverseString fun have no effect
`)

const reverseString = ( str) => {
    const length= str.length;
    console.log(length)
    let i=0,
        j=length-1;
    
        while(i<j){
            let temp= str[i];
            console.log("Before:" ,str[i],str[j]);
            str[i]= str[j];  // nothing assign becz immutability
            str[j]= temp;
            console.log('After :',str[i],str[j]);
            i++;
            j--;
        }

    return str;
}

const reverseString2 = ( str) =>{
    
    if(!str || str.length <2 || typeof str !== 'string'){
        console.log("inside if");
        return str;
    }

    return str.split('').reverse().join('');
    // new reference is returned
}

const reverseString3 = str => [...str].reverse().join('');

let str='Hi My name is Andrei';
console.log(reverseString(str)," First ");
console.log(reverseString2(str), " Second ");
console.log(reverseString3(str), " Third ");

console.log(str, "** Original str does not change becz of immutability **");
