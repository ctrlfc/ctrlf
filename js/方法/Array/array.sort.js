// sort 是排序的方法 ,但不能正确的排序

var n = [4, 8, 15, 16, 23, 42];
n.sort();

// 你的比较函数一个接收2个参数, 并且如果这个两个参数相等则返回0, 如果第1个参数应该排列在前面, 则返回一个负数 第2个参数在后面 就返回一个正数

n.sort(function(a, b) {
    return a - b;
}); //冒泡排序

console.log(n);

var m = ["aa", "bb", "a", 4, 8, 15, 16, 23, 42];
m.sort(function(a, b) {
    if (a === b) {
        return 0;
    }
    if (typeof a === typeof b) {
        return a < b ? -1 : 1;
    }
    return typeof a < typeof b ? -1 : 1;
});

console.log(m);

// 可以编写对象

// by函数接收一个成员名字符串作为参数

// 并返回一个可以用来对包含该成员的对象数组进行排序的比较函数

var by = function (name) {
    return function (o, p) {
        var a, b;
        
    }
}


