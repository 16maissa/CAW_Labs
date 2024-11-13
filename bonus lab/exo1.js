//q1
let v1= 10;
let v2=5;
[v1,v2]=[v2,v1];
console.log("Swapped values:",v1,v2) ;


//q2
const numbers = [ 1, 2, 3 ];
const letters = [ "a", "b", "c" ];
const foods = ["mango", "pecan pie" ];
const concat=[...numbers,...letters,...foods];
console.log(" concatarray:",concat);


//q3
const s="hello"
const chararray =[...s];
console.log("Character array:",chararray);


//q4
function fn(a, b, ...args) {
    console.log("Args:", args);
}
    fn(1,2,3,'A','B','C');
    fn(1,2) ;
    let x= ['a','b','c','d']
    fn(...x) ;


    

