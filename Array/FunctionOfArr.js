console.log(`

1. Function of Array are : push() pop() shift()  unshift().
2. Iterate Array : for( let ele of array ) {  }
3. Search :  find() and findIndex()
4. Delete ele : arr.splice(index,n);
   splice make change in original array itself. 

`)

const names=['max','menu','julie','max',10];

console.log(names[1],names.length);

console.log("========= Iterate Array =========")
for(const el of names){
    console.log(el);
}


names.push('Julie');
console.log(names);

console.log("2========= find() and findIndex() ======");
const array1 = [5, 12, 8, 130, 44];
// if element satisfied its condition then returned that element and stop,
//  if not, thn undefined returned.
const found = array1.find(element => element > 10);
console.log(found);


const flag=names.find(ele=> ele==='max');
const idx=names.findIndex(ele=> ele==='max');
console.log(flag,idx);
// array.findIndex() is better than find() becz it will return the index of match element


console.log(" ========== Delete ======")
          
const array=[1,2,3,4,5];
console.log("before"+ array);

array.splice(2,1);
console.log(array);