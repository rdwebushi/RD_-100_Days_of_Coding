/* study array
decleration of array there are two methods 
1) using array literal 
    eg. 
    let arr = []    //empty array
    let arr1 = ['hello', 'world', 123, 456, true]
2)using array constructor
    let arr = new array();
    let arr1 = new array('hello', 'world', 123, 456, true)
*/

let arr = new Array();
let arr1 = new Array('hello', 'world', 123, 456, true)

console.log(arr1)
console.log(arr1[1])
console.log(arr)

// add elements in array specifically 

let fill_arr = new Array(5);

fill_arr[0]=10;
fill_arr[1]=20;
fill_arr[2]= 'hello';
fill_arr[3]='rushi';
fill_arr[4]= 50;
fill_arr[5]= 150;
for(let i=0;i<=5;i++){
    console.log("array value fill_arr["+i+"]"+fill_arr[i])
}

//assigning elements of array to new variable

let first_ele = fill_arr[0];    //first element
console.log(first_ele);

let lasr_ele = fill_arr[fill_arr.length-1];
console.log(lasr_ele);

//modify the element
console.log("befor "+fill_arr[3]); 
fill_arr[3] = "rahul"
console.log("after "+fill_arr[3]);

// add new element to array
fill_arr.push("Bharat");    //add element to last 
console.log(fill_arr);

fill_arr.unshift("Ram"); //add element to 0th index
console.log(fill_arr);

//remove element from array we use pop(), shift(), or splice()
let rl = fill_arr.pop(); //remove last element
console.log(fill_arr);
let r1 = fill_arr.shift();  //remove first element
console.log(fill_arr);

fill_arr.splice(1,2)   //remove 2 element from index1 
console.log(fill_arr);

