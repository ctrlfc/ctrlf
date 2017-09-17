// 作用域用来访问它外部的函数参数和变量, (this和argument这两个孤儿不一样)

// 内部函数比外部的函数更持久

// 用函数的方式初始化一个对象 和 用对象字面量来初始化不同

//函数作用域对于value来说 在函数外是不可见的

var myobject = (function() {
    var value = 0;

    return {
        increment: function(inc) {
            value += typeof inc === "number" ? inc : 1;
        },
        getValue: function() {
            return value;
        }
    };
})();

// 以上不是把一个函数赋值给myobject // 而是把调用 该函数 后 返回的return 里的对象字面量 返回给了 myobject

// 然后这样的话myobject就可以访问increment了 比如 myobject.increment

//创建一个名为quo的够着函数
