//1
var setOne = arr => [...new Set(arr)];
setOne([4,5,5,2,2,4,3,1,5,2]);
console.log("Set one result:", setOne([4, 5, 5, 2, 2, 4, 3, 1, 5, 2]));

//2
var getRidOf = (tab, ...val) => tab.filter(item => !val.includes(item));
console.log("Get rid of result:", getRidOf(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 'b', 'e', 'x'));