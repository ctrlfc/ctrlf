//2.

var f = function g() {
    return 23;
};
typeof g();

//作用域
//Error

//3.

(function(x) {
    delete x;
    return x;
})(1);

//deleta只能删除对象,所以以上delete x无意义
//1

//4.

var y = 1,
    x = y = typeof x;
x;

//"undefined"

//5.

(function f(f) {
    return typeof f();
})(function() {
    return 1;
});

//"number"


//6.

var foo = {
    bar: function() {
        return this.baz;
    },
    baz: 1
};
(function() {
    return typeof arguments[0]();
})(foo.bar);


//"undefined"


//7.

var foo = {
    bar: function() {
        return this.baz;
    },
    baz: 1
}
typeof(f = foo.bar)();

//"undefined"

//8.

var f = (
    function f() {
        return "1";
    },
    function g() {
        return 2;
    }
)();
typeof f;


//"number"

//9.

var x = 1;
if (function f() {}) {
    x += typeof f;
}
x;

//???


//10.

var x = [typeof x, typeof y][1];
typeof typeof x;


//"string"

//11.

(function(foo) {
    return typeof foo.bar;
})({ foo: { bar: 1 } });

//"undefined"


//12.

(function f() {
    function f() {
        return 1;
    }
    return f();

    function f() {
        return 2;
    }
})();

//2


//14.

with(function(x, undefined) {}) length;

//2
