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
" \t\r\n"    ==   0             // true