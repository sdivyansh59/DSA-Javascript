const person={firstName: 'Max',age: 31, hobbies: ['sports','cooking'],1 :"Divyansh",
               squareFun(x){
                   return x*x;
               }};

console.log(person[0]);  // undefined, becz it is trying to find key with name 0
console.log(person.firstName, person['firstName']); // both are correct syntax
/*
1.  In Obj it's index are basically key's instead of 0,1,2,3....

2.  That's why we are aable to access using for-in loop becz for-in loop
    iterate througn index So here we will itarate key's.

3.  Function in obj shows that it is not only for data storage but we add
    functionality as well. \n
    
4.  Function can add anonymous fun with the help of key's or named fun
    as well. \n
    
5.      

*/

console.log("===== operation on obj ========");

console.log(person);
// we can update
person.firstName='Priyanka Singh';
//console.log(person);

// we can delete 
delete person.firstName;
//console.log(person);



person.happy=function(){
    console.log("Yes I am.");
}
console.log(person);
console.log(person.happy(),person.squareFun(2));


