/* 函数声明和表达式 */

// 函数声明

function foo() {}

// 以上在被执行前解析(hoisted),因此它在函数定义体上面也可以被调用

foo();
function foo() {}

// 匿名函数表达式

const foo = function() {};

foo;
foo();
var foo = function() {};
// 赋值语句只有在代码运行时执行,所以之前会...

// 命名函数表达式

const foo = function bar() {
    bar(); //正常
};
bar(); // 出错 : ReferenceError

// 在外部不可见, 引用赋值 ; 在内部可见, 命名处理所致

/* this */

// 全局 (严格模式没有全局变量)
this;

// 函数
foo(); // 指向全局 XXXXXXXXXXXXXXXXXXXXXXXXX 没用

//方法
test.foo(); // 指向test对象

// 调用构造函数
new foo(); // 指向新对象

// 显式的设置 this
function foo(a, b, c) {}

const bar = {};
foo.apply(bar, [1, 2, 3]); // 数组将会被扩展，如下所示
foo.call(bar, 1, 2, 3); // 传递到foo的参数是：a = 1, b = 2, c = 3
// this变成了bar?!!!

// 注意: 在对象的字面声明语法中，this 不能用来指向对象本身。 因此 var obj = {me: this} 中的 me 不会指向 obj，因为 this 只可能出现在上述的五种情况中。 ?????????

Foo.method = function() {
    function test() {
        // this 将会被设置为全局对象（浏览器环境中也就是 window 对象）
    }
    test();
};

Foo.method = function() {
    const _this = this;
    function test() {
        // 使用 _this 来指向 Foo 对象
    }
    test();
};

// 方法的赋值表达式

function Foo() {}
Foo.prototype.method = function() {};

function Bar() {}
Bar.prototype = Foo.prototype;

new Bar().method(); // this指向Bar实例

/* 闭包和引用 */

// 函数是唯一拥有自身作用域的结构,so闭包创建和函数密切相关

// 模拟私有变量

function Counter(start) {
    const count = start;
    return {
        increment: function() {
            count++;
        },

        get: function() {
            return count;
        }
    };
}

const foo = Counter(4);
foo.increment();
foo.get(); // 5

// 这两个函数都维持着 对外部作用域 Counter 的引用,so可以访问作用域定义的变量count

// 为什么不可以在外部访问私有变量

// 函数中不可对作用域进行引用或者赋值,在外面不能访问里面

const foo = new Counter(4);
foo.hack = function() {
    count = 1337;
};

// 上面的代码不会改变定义在 Counter 作用域中的 count 变量的值，因为 foo.hack 没有 定义在那个作用域内。
// 它将会创建或者覆盖全局变量 count。

// 循环中的闭包

for (let i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
//输出10个10(异步)

// 需要每次创建i的拷贝 和 _this差不多

// ==>改成自执行函数

for (let i = 0; i < 10; i++) {
    (function(e) {
        setTimeout(function() {
            console.log(e);
        }, 1000);
    })(i);
}

// 这时e 有 i的拷贝,并对e有了引用,而这个值是不会被循环改变的

for (let i = 0; i < 10; i++) {
    setTimeout(
        (function(e) {
            return function() {
                console.log(e);
            };
        })(i),
        1000
    );
}

//返回一个函数这样也行

// argument 对象

// 特别变量argument,维护所有传递到这个函数的参数列表

// argument是一个object而不是array 但又有length属性

//转化为数组

Array.prototype.slice.call(argument); // 听说很慢

// 传递参数(推荐做法)

function foo() {
    bar.apply(null, arguments);
}

function bar(a, b, c) {
    //干活
}

// 还有一种(真滴有点麻烦了,但俗话说写得越多 性能越好 不知道是不是)

function Foo() {}

Foo.prototype.method = function(a, b, c) {
    console.log(this, a, b, c);
};

//创建一个解绑器"method"
//输入参数为:this,arg1,arg2...argN

Foo.method = function() {
    //结果:Foo.prototype.method.call(this,arg1,arg2...argN)
    Function.call.apply(Foo.prototype.method, arguments);
};

// =

Foo.method = function() {
    const args = Array.prototype.slice.call(arguments);
    Foo.prototype.method.apply(args[0], args.slice(1));
};

// 自动更新

// arguments 对象为它的内部属性和函数形式创建了getter和setter方法

// so 改变形式参数的值会改变arguments对象的值

function foo(a, b, c) {
    arguments[0] = 2;
    a;

    b = 4;
    arguments[1];

    var d = c;
    d = 9;
    c;
}

foo(1, 2, 3);
// 2,4,3

// 性能真相

// es5下面

function f(a) {
    "use strict";
    a = 42;
    return [a, arguments[0]];
}

var pair = f(17);

// 判断真假
console.assert(pair[0] === 42);
console.assert(pair[1] === 17);

// pair[0] 居然是42 真相真的建立了

// arguments.callee 会显著影响性能

function foo() {
    arguments.callee;
    arguments.callee.caller;
}

function bigLoop() {
    for (var i = 0; i < 1e5; i++) {
        foo();
    }
}

// 因为它需要知道它自己和它的调用者。 这不仅抵消了内联函数带来的性能提升，而且破坏了封装，因此现在函数可能要依赖于特定的上下文。

// (垃圾)

// 构造函数

// 只能 通过new 方式调用函数都被认为是构造函数

// 内部 this 指向的是object ,这个新创建的对象的 prototype 被指向到构造函数的 prototype。

// 如果被调用的函数没有显式的return表达式,则隐式的会返回this对象 也就是新创建的对象

function foo() {
    this.bla = 1;
}

Foo.prototype.test = function() {
    console.log(this.bla);
};

var test = new Foo();

// 上面代码把Foo作为构造函数使用,并设置新创建对象的prototype为Foo.prototype

// 显式的return表达式将会影响返回结果,但仅限于返回的是一个对象

function Bar() {
    return 2;
}
new Bar(); //返回新创建的对象

function Test() {
    this.value = 2;

    return {
        foo: 1
    };
}
new Test(); //返回的对象

// new Bar() 返回的是新创建的的对象,而不是数字的字面值2.因此new Bar().constructor === Bar,但是如果返回的是数字对象,结果就不同了

function Bar() {
    return new Number(2);
}
new Bar().constructor === Number;

// 这里得到的 new Test()是函数返回的对象,而不是通过new关键字新创建的对象,因此:

new Test().value === undefined;
new Test().foo === 1;

// 如果new被遗漏了,则函数不会返回新创建的对象

function Foo() {
    this.bla = 1; // 获取设置全局参数
}
Foo(); // undefined

// 虽然上例在有些情况下也能正常运行,但是由于JavaScript中this的工作原理,这里的this指全局

// 工厂模式

// 为了不使用 new 关键字,构造函数必须显式的返回一个值

function Bar() {
    var value = 1;
    return {
        method: function() {
            return value;
        }
    };
}
Bar.prototype = {
    foo: function() {}
};

new Bar();
Bar();

