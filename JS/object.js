/* 对象使用和属性 */

/* 删除属性 */

/* 只有delete操作符才能真正删除属性,而设置为underfined或者null只能移除属性与值的关联 */

var obj = {
    bar: 1,
    foo: 2,
    baz: 3
};

obj.bar = undefined;
obj.foo = null;
delete obj.baz;

for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
        console.log(i, "" + obj[i]);
    }
}

/*
bar undefined
foo null
undefined
*/

/* 原型继承 */

function Foo() {
    this.value = 42;
}

Foo.prototype = {
    method: function() {}
};

function Bar() {}

// 设置Bar的prototype属性为Foo的实例对象

Bar.prototype = new Foo();//不能用Foo,因为不会执行Foo原型,而是指向Foo,变成了Function.prototype

Bar.prototype.foo = "Hello world";

// 修正Bar.prototype.constructor为Bar本身

Bar.prototype.constructor = Bar;

// 创建Bar的一个新实例

const test = new Bar();

// 原型链

/*
test[Bar的实例]
    Bar.prototype [Foo的实例]
        { foo: 'Hello World' }
        Foo.prototype
        { method: ...};
        Object.prototype
        { toString:...};
*/

// Bar实例只会共享相同的value属性

/*
test.value
>42
test.method
>function () {}
test.foo
>"Hello world"
*/

/* 原型属性查找 */

// 一直向上找啊找,直到找到object.prototype还没得,我就不找了,给你说undefined

/* 原型属性 */

// 原型不能是值啊，是一个对象 让原型等于 1 肯定出错

/* 原型性能 */

// for..in 会遍历整个原型链