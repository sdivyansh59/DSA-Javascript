

class hashTable{
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){  // _ shows it is private fun, althought we can still acces it
        let hash = 0;
        for (let i =0; i<key.length; i++){
            hash= (hash + key.charCodeAt(i) * i) %
            this.data.length;
        }
        return hash;
    } // O(1)

    set(key, value) {
        let address = this._hash(key);
        if(!this.data[address]) {
           this.data[address] = []; 
        }
        this.data[address].push( [key,value] );
    } // o(1)

    get(key) {
        let address = this._hash(key);
        let currentBucket = this.data[address];

        for ( let i = 0; currentBucket.length ; i++){
            if(currentBucket[i][0] === key){
                return currentBucket[i];
            }
        }
        return "not found";
    } // O(1) most of time or o(n/k) 

    keys(){
        const keysArray= [];
        for( let i=0; i < this.data.length ; i++){
            const elementArr = this.data[i];
            if(this.data[i]){
                for( let i= 0 ;i < elementArr.length ; i++){
                keysArray.push(elementArr[i][0]);
                }
            }
            
        }
        return keysArray;
    } // costely operation O(size of hash, in this case it is 500)
    // ths's why for in is costely operation
}


const hash = new hashTable(500);
hash.set(10,"Sonam");
hash.set(20,"Divyansh Singh");
hash.set(30,"Garima Singh");
hash.set(40,"Priyanka Singh");
hash.set(50,"Pankaj singh");

console.log(hash);
console.log(hash.get(10));
console.log(hash.get(30));

console.log(hash.keys());


