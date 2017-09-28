// splice(start,deleteCount,item)

// splice方法从array中移除一或多个元素,并用新的item替换它们

// 参数start是从数组array 中移除元素的开始位置

// 参数deleteCount是要移除的元素个数

// 如果有额外参数 ,那些item会插入到被移除元素的位置上.它返回一个包含被移除元素的数组

var a = ["a", "b", "c"];
var r = a.splice(1, 1, "abcd", "bug");

// 移除后 把item加上空位

// splice实现

Array.method("splice", function (start, deleteCount) {

})