

// npm i prompt-sync

const pc=require('prompt-sync');
const prompt=pc({sigint: true}); // it means we can turminate using ctrl+C
const listSize=prompt("Enter size of list: ");
let n=listSize;