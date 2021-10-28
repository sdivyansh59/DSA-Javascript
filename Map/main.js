console.log(` 
Map a closer Look
    1. Ordered key-values pair of data. 

    2. Element access via key.

    3. Itarable (=you can use the for-of loop). 

    4. Keys are uniquee values are not. 

    5. Keys can be anything (including reference values like arrays). 

    6. Pure data storage, optimized for daata access. 

    7. you can store function here but that function will not be 
       interact with other key's/ data of same map.
      

    8.  So it is proved that it is purely build for data storage,
        but Obj are not.  
       `)


  console.log("=====  Example =====");

  const m=new Map();
  m.set('name','max');
  m.set(true,true);  
  console.log(m);   


  const resultData=new Map();

  resultData.set('average', 1.53);
  resultData.set('lastResult',null);
  resultData.set(100,0.89);

  const  country={name: 'Germany', population: 82};

  resultData.set(country,0.89);
  // we can't make key as  obj in an obj, But in map we can make key as  obj
  console.log(resultData);




  

// we have to access with the help of function 
console.log("*********** access ************");
console.log(resultData.get('average'))
console.log(resultData.average)   //we will get undefined


console.log("*** deete *****")
resultData.delete('average')
console.log(resultData);
  