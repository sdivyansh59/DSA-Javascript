
const array = [2,5,1,2,3,5,1,2,4];
// it should return 2

const firstRecuringChar = () => {
    const hash = {};
    for( let i = 0; i <array.length ; i++){
        if( hash[array[i]]=== undefined){
            hash[array[i]] = true;
        }else{
            return array[i];
        }
    }
}

console.log(firstRecuringChar(array)) ;