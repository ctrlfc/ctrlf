// 函数可以记忆之前操作  记录在对象中,从而避免无谓的重复运算这就是记忆

// 专为对象和数组使用

// 递归函数Fibonacci数列  一个F数字是之前两个F数字之和.最前面两个数字是0和1

var Fibonacci = function(n) {
    return n < 2 ? n : Fibonacci(n - 1) + Fibonacci(n - 2);
};
for (var i = 0; i <= 10; i += 1) {
    console.log("//" + i + ":" + Fibonacci(i));
}
