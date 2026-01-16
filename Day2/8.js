function outerFunction(callback){
    setTimeout(() => {
    callback();
},10000);
}

function innerFunction(){
    console.log("Hello, executed after 10 seconds");
}
outerFunction(innerFunction);