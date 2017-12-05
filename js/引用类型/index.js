// 类型

// 相等与比较

// JavaScript 有两种方式判断两个值是否相等。

// 等于操作符

// 等于操作符由两个等号组成:==

// js是弱类型语言,这就意味着,等于操作符会为了比较两个值而进行强制类型转换

""           ==   "0"           // false
0            ==   ""            // true
0            ==   "0"           // true
false        ==   "false"       // false
false        ==   "0"           // true
false        ==   undefined     // false
false        ==   null          // false
null         ==   undefined     // true
" \t\r\n" == 0             // true

// 上面的表格展示了强制类型转换，这也是使用 == 被广泛认为是不好编程习惯的主要原因， 
// 由于它的复杂转换规则，会导致难以跟踪的问题。

// 此外，强制类型转换也会带来性能消耗，比如一个字符串为了和一个数字进行比较，必须事先被强制转换为数字。

// 严格等于操作符

// 严格等于操作符由三个等号组成：===

// 不像普通的等于操作符，严格等于操作符不会进行强制类型转换。

""           ===   "0"           // false
0            ===   ""            // false
0            ===   "0"           // false
false        ===   "false"       // false
false        ===   "0"           // false
false        ===   undefined     // false
false        ===   null          // false
null         ===   undefined     // false
" \t\r\n"    ===   0             // false

// 上面的结果更加清晰并有利于代码的分析。如果两个操作数类型不同就肯定不相等也有助于性能的提升。

