// 模块大发好
// 就用函数和闭包啊
// 只提供接口 隐藏自身和实现的 函数或者对象

// 一个变量放外面不安全 放里面又有损耗 真tam麻烦

// 所以闭包出来了

String.method(
    "deentityify",
    (function() {
        // 字符实体表, 映射字符实体的名字到对应的字符

        var entity = {
            quot: '""',
            lt: "<",
            gt: ">"
        };

        // 返回deentityify方法

        return function() {
            // 这才是deentityif方法 它调用字符串的repalce方法
            //查找 & 和 ; 结束的子字符串 如果这些字符可以在字符实体表中找到,
            // 那么久降该字符实体替换为映射中的值

            return this.replace(/&([^&;]+);/g, function(a, b) {
                var r = entity[b];
                return typeof r === "string" ? r : a;
            });
        };
    })()
);

console.log("&lt;&quot;&gt".deentityify());

// kanbudogn
