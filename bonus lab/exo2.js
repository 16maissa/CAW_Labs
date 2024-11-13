// Convert the following codes to ES2015 notation

//1
var arr =[3, 5, 8];
var plus_one = arr.map(n =>n+1);



//2
var d = arr=>arr.map(val=>val*2);


// 3 

var obj={numbers:{
    a:1,b:2

}};
var {a,b}=obj.numbers;


//4
var add = (a, b) => {
    a = a === 0 ? 0 : a || 10;
    b = b === 0 ? 0 : b || 10;
    return a + b;
};

