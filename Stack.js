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


}

const stack = new Stack();
stack.push(100);
stack.push(200);
stack.push(300);
stack.push(100);
stack.push(200);
stack.push(300);
