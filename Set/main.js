console.log(`
Take a look at set property.
    1. Insertion order is not stored/memorized.
    2. Element access and extraction via method.
    3. Iterable (=you can use the for-of loop).
    4. Size (length) adjusts dynamically.
    5. Duplicate value are not allowed.
    6. Deletion and finding element is trivial and fast.
    
    `);

const set=new Set();
set.add("divyansh");
set.add("Singh");
set.add("apple");
set.add(1);
console.log(set);

set.add("Singh");  // it will not added and  
//aor koi  error bhi nahi aayega. Silentely rejected
console.log(set);


console.log(`Function in Set\n
    1. set.has() to check if ele present or not.
    2. we can't use set[] syntax, we will get undefined.
    3. set.delete(ele) to delte  ele from set.\n
    4. can't acces using index. \n
    5.`);

 


console.log("==== iterate set ===") ;
for(const el of set){
    console.log(el);
}   




