

console.log(`
Object property:\n
    1.  Unordered key-value pairs of data. \n
    2.  Element access via key (property name). \n
    3.  Not itarable with for of , (only with for-in). \n
    4.  Keys are unique ,values are not. \n
    5. Keys have to be strings, numbers or symbol. 
       But all keys are converted into string then store in obj. 
    6. Can store data & functionality (methods).  \n 

`)


let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function(){
        console.log('This is old way of writing fun ');
    },
    greet(){
       console.log(' This is ES6 syntax oof writing fun');
    }
}

user.age; // O(1) operation
user.spell = 'abra ka dabra';
user.scream(); // O(1)
user.greet();
console.log(user);

/*
  Now, you think hashTAble is so nice we should we it every where, But 
  HashTable have some disadvantage as well, 
  Because of collision it take O(n/k);
  
  visit this : https://www.cs.usfca.edu/~galles/visualization/OpenHash.html

*/







console.log(" ========= Iteration =========")
// observe the array example
const arr=[1,2,3];
for(const ele of arr){
    console.log(ele);   // ele ==== array value
}

for(const ele in arr){
    console.log(arr[ele],ele);  // ele ==== index
}
//object itarate
for(const objEle in person){
    console.log(objEle);
}
