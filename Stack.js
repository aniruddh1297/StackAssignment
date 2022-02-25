class Stack{

    constructor(){
        this.items=[];
        this.count=0;
        this.upper_limit=10;

    }

    push (stack_elements){

        if(this.count>this.upper_limit){
            console.log("Stack limit exceeded");
        }

        else{

        this.items[this.count]=stack_elements;
        console.log(`${stack_elements} added to ${this.count}`);
        this.count=this.count+1;
        
        return this.count-1;
        }


    }
    pop(){

        if(this.count==0) {
            console.log("no items to pop!!");
        }
        else{
        let delete_item=this.items[this.count-1];
        this.count=this.count-1;
        console.log(`${delete_item} removed`);
        return delete_item;

        }


    }

    peek(){

        console.log(`top item of the stack is ${this.items[this.count-1]}`)
        return this.items[this.count-1]
    }
    stack_size(){

        console.log(`size of stack is ${this.count}`);
    }




}

