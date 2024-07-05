// decleration of object 

let obj = new Object();

obj.let = 10;
obj.JSON= {"abc":19,"sqw":15}
console.log(obj)

obj.func = function(){
    console.log(`${obj.let}`)
}

obj.func();

//iterating all objects in js

for(let key in obj){
    console.log("befor delete" +key)
}

//delete key 
// console.log("befor delete" +obj)
delete obj.func

for(let key in obj){
    console.log("after delete "+key)
    
}
// console.log("after delete "+obj)