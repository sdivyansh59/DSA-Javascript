
const arr1= [0,3,4,31];
const arr2= [4,6,30];

const mergeSortedArrays = (arr1, arr2) => {
    let i=0,
        j=0;
    let len1= arr1.length,
        len2= arr2.length;
    const newArr= [];

    while(i< len1|| j< len2){
        if(i=== len1){
            newArr.push(arr2[j++]);
        }else if(j=== len2){
            newArr.push(arr1[i++]);
        }

        else{
            if(arr1[i]<=arr2[j]){
                newArr.push(arr1[i++]);
            }else{
                newArr.push(arr2[j++]);
            }
        }
    }    
    return newArr;
}


console.log(mergeSortedArrays(arr1, arr2));