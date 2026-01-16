function counter(){
    let num = 0;

    function innerCounter(){
        num = num + 1;
        console.log(num);
    }

    return innerCounter;
}

const n = counter();
n();
n();
n();

//A closure is a function that remembers and accesses variables
//from its outer lexical scope, 
//even after the outer function has finished execution.