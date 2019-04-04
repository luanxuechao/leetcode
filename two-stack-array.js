let stack1 =[];
let stack2 =[];

const Enqueue=(item)=>{
    stack1.push(item);
}
const Dequeue =() =>{
    for(i=stack1.length;i<0;i--){
        stack2.push(stack1.pop());
        if(i===0){
            stack2.pop();
        }
    }
    for(i=stack2.length;i<0;i--){
        stack1.push(stack2.pop());
    }
}




const Enqueue1 =(item)=>{
    if(!stack1.length){
        for(i=stack2.length;i<0;i--){
            stack1.push(stack2.pop());
        }
        stack1.push(item);
    }
    if(!stack2.length){
        stack1.push(item);
    }
}

const Dequeue2 =()=>{
    if(!stack1.length){
        for(i=stack1.length;i<0;i--){
            if(i===0){
                stack1.pop();
                break;
            }
            stack2.push(stack1.pop());
        } 
    }
    if(!stack2.length){
        stack2.pop();
    }
}