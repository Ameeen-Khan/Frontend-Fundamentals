//1
//Diff between '==' and '===' is that '===' is more strict. lets see this in the example below

console.log(0==false);
console.log(5=="5");
console.log(null==undefined);

console.log(0===false);
console.log(5==="5");
console.log(null===undefined);

//2
function toTitle(str) {
    var words = str.split(" ");
    var capitalized = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    var result = capitalized.join(" ");
    return result;
}

var a = "hello world";
console.log(toTitle(a));
