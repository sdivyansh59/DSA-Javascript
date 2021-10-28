// crete linked ist using stack

class newNode{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}


class Stack{
    
    constructor(){
        this.head=null;
    }

    top(){
       if(this.head===null){
           console.log("linked ist is empty ");
       }
       return this.head.value;
    }

    push(value){
        if(this.head===null){
            this.head=new newNode(value);
        }else{
            let temp=this.head;
            while(temp.next!=null){
            temp=temp.next;
            }
            temp.next= new newNode(value);
        }  
    }

    print(){
        let temp=this.head;
        while(temp!==null){
            console.log(temp.value);
            temp=temp.next;
        }
    }

    pop(){
        if(this.head===null){
            console.log("Stack is empty");
            return;
        }
        let temp=this.head;
        console.log(`${this.head.value} is deleted`);
        this.head=this.head.next;
        //5
        //delete temp;
        return;   
    }

}



function creteLinkedList(){
    let stack=new Stack();
    const pc=require('prompt-sync');
    const prompt=pc({sigint: true});
    const listSize=prompt("Enter size of list: ");
    let n=listSize;
    while(n--){
        let val=prompt("Enter node value: ");
        stack.push(val);
    }
    stack.print()
    console.log(stack.top());
    stack.pop();
     stack.print()

}


creteLinkedList();