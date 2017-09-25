Array.method("reduce", function(f, value) {
    var i;
    for (i = 0; i < this.length; i++) {
        value = f(this[i], value);
    }
    return value;
});

// 通过各iArray.prototype扩充函数,每个数组都继承了这个方法

// 传入函数和一个初始值

// 遍历并调用这个函数,传入的2个数字相加,会计算出相加之和或者乘积

/// 创建一个数组数字

var data = [4, 8, 15, 16, 23, 42];

// 定义两个简单的函数,一个是把两个数字相加,另一个相乘

var add = function(a, b) {
    return a + b;
};

var mult = function (a, b) {
    return a + b;
}

// 调用data 的ruduce 方法,传入add函数u

