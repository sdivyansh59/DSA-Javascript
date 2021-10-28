
// create inked ist 
// npm i prompt-sync   to take user input sync 
//https://www.youtube.com/watch?v=MntVOZxB3BA

'use strict';

class CreateNewNode{
     constructor(value){
        this.value=value;
        this.next=null;
        
     }
}

function printList(head){
    let temp=head;
    while(temp!=null){
        console.log(temp.value);
        temp=temp.next;
    }
}

function CreateLinkedList(){
    const ps=require('prompt-sync');
    const prompt=ps({sigint: true});

    const nodeSize=prompt(` Enter number of node you want to crete: `);
    console.log(nodeSize,typeof(nodeSize));

    let head=null;
    let temp=null;
    let n=+nodeSize;
    while(n--){
        let x=+prompt("enter valuse of node: ");
        let node=new CreateNewNode(x);

        if(head===null){
            head=node;
            temp=head;
        }else{
            temp.next=node;
             temp=temp.next;
        }
       
    }

   printList(head);
}



CreateLinkedList();